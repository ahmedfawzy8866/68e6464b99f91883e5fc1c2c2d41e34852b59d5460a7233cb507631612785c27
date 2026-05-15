import sharp from 'sharp';
import axios from 'axios';
import { StorageService } from './StorageService';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { promisify } from 'util';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { v4 as uuidv4 } from 'uuid';

if (ffmpegPath) {
  ffmpeg.setFfmpegPath(ffmpegPath);
}

const pipeline = promisify(require('stream').pipeline);

/**
 * SIERRA BLU BRANDING ENGINE
 * Level: Institutional / Quiet Luxury
 * Purpose: Automates Stage 3 Branding for property assets.
 */
export class BrandingService {
  private static LOGO_PATH = path.join(process.cwd(), 'public', 'sierra_blu_logo_light.png');

  /**
   * Processes a source image URL and adds the Sierra Blu gold watermark.
   * Returns the uploaded public URL.
   */
  static async brandPropertyImage(
    docId: string, 
    sourceUrl: string, 
    propertyCode: string
  ): Promise<string> {
    try {
      // 1. Fetch source image
      const response = await axios.get(sourceUrl, { responseType: 'arraybuffer' });
      const sourceBuffer = Buffer.from(response.data);

      // 2. Prepare Logo
      let logoBuffer: Buffer;
      if (fs.existsSync(this.LOGO_PATH)) {
        logoBuffer = await sharp(this.LOGO_PATH)
          .resize({ width: 200 }) // Standard institutional size
          .toBuffer();
      } else {
        // Fallback: Create a text-based logo if file is missing
        logoBuffer = await sharp({
          create: {
            width: 300,
            height: 100,
            channels: 4,
            background: { r: 184, g: 134, b: 11, alpha: 0.5 } // Gold-ish
          }
        })
        .composite([{
          input: Buffer.from(`<svg><text x="10" y="40" font-family="Arial" font-size="24" fill="white">SIERRA BLU</text></svg>`),
          top: 0,
          left: 0
        }])
        .png()
        .toBuffer();
      }

      // 3. Composite Watermark
      const brandedBuffer = await sharp(sourceBuffer)
        .composite([
          {
            input: logoBuffer,
            gravity: 'southeast', // Institutional bottom-right placement
          },
          {
            input: Buffer.from(
              `<svg width="400" height="50">
                <text x="10" y="40" font-family="Inter, sans-serif" font-size="20" fill="white" fill-opacity="0.5">
                  REF: ${propertyCode} | SIERRA BLU REALTY
                </text>
              </svg>`
            ),
            gravity: 'southwest',
          }
        ])
        .jpeg({ quality: 90 }) // High fidelity
        .toBuffer();

      // 4. Upload to Storage via StorageService
      const base64Branded = brandedBuffer.toString('base64');
      const brandedUrl = await StorageService.uploadPropertyMedia(
        docId,
        base64Branded,
        'image/jpeg',
        `branded_${propertyCode}.jpg`
      );
      return brandedUrl;
    } catch (error) {
      console.error('Image Branding Failure:', error);
      return sourceUrl;
    }
  }

  /**
   * Processes a source video URL.
   * Currently performs "Institutional Validation" and returns the URL.
   * Future: Transcode with Sierra Blu cinematic watermark using FFmpeg.
   */
  static async brandPropertyVideo(
    docId: string,
    sourceUrl: string,
    propertyCode: string
  ): Promise<string> {
    try {
      console.log(`🎥 [BRANDING] Video Branding Initiated for ${propertyCode} at ${sourceUrl}`);
      
      // LOGIC: For now, we return the original URL but mark it as processed in logs.
      // Institutional Validation: Ensure the URL is reachable and has a video-like extension.
      const isVideo = /\.(mp4|mov|avi|m4v)$/i.test(sourceUrl);
      if (!isVideo) {
        console.warn(`[BRANDING] Asset at ${sourceUrl} does not appear to be a standard video format.`);
      }

      // Trigger FFmpeg watermarking
      const brandedUrl = await this.applyVideoWatermark(docId, sourceUrl, propertyCode);
      
      return brandedUrl;
    } catch (error) {
      console.error('Video Branding Failure:', error);
      return sourceUrl;
    }
  }

  /**
   * Internal FFmpeg Orchestrator
   */
  private static async applyVideoWatermark(
    docId: string,
    sourceUrl: string,
    propertyCode: string
  ): Promise<string> {
    const tempDir = os.tmpdir();
    const inputPath = path.join(tempDir, `${uuidv4()}_input.mp4`);
    const outputPath = path.join(tempDir, `${uuidv4()}_branded.mp4`);

    try {
      // 1. Download source video
      const response = await axios({
        method: 'GET',
        url: sourceUrl,
        responseType: 'stream'
      });
      await pipeline(response.data, fs.createWriteStream(inputPath));

      // 2. Process with FFmpeg
      await new Promise((resolve, reject) => {
        ffmpeg(inputPath)
          .input(this.LOGO_PATH)
          .complexFilter([
            // Resize logo to 150px width and place in bottom-right with 20px padding
            '[1:v]scale=150:-1[logo];[0:v][logo]overlay=main_w-overlay_w-20:main_h-overlay_h-20'
          ])
          .outputOptions([
            '-codec:v libx264',
            '-crf 23',
            '-preset fast',
            '-codec:a copy' // Keep original audio
          ])
          .on('start', (cmd) => console.log('[FFMPEG] Started:', cmd))
          .on('error', (err) => reject(err))
          .on('end', () => resolve(true))
          .save(outputPath);
      });

      // 3. Upload Branded Video
      const brandedBuffer = fs.readFileSync(outputPath);
      const brandedUrl = await StorageService.uploadPropertyMedia(
        docId,
        brandedBuffer.toString('base64'),
        'video/mp4',
        `branded_${propertyCode}.mp4`
      );

      return brandedUrl;
    } catch (error) {
      console.error('[FFMPEG] Branding failed:', error);
      return sourceUrl; // Fallback to original
    } finally {
      // Cleanup
      if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    }
  }
}

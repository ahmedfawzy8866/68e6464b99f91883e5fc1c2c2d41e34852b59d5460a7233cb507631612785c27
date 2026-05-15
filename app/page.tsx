'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useI18n } from '@/lib/I18nContext';
import { useTheme } from 'next-themes';
import { InventoryService, Property } from '@/lib/services/InventoryService.client';
import ShieldLogo from '@/components/Landing/ShieldLogo';
import PropCard from '@/components/Landing/PropCard';

import styles from './page.module.css';

const ParticleCanvas = dynamic(() => import('@/components/Landing/ParticleCanvas'), { ssr: false });
const LiveMap = dynamic(() => import('@/components/Maps/LiveMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-900/50 animate-pulse flex items-center justify-center text-slate-500 font-serif">Initializing Intelligence Map...</div>,
});

// ══════════════════════════════════════════════════════════
//  DESIGN TOKENS & CONSTANTS
// ══════════════════════════════════════════════════════════
import { THEMES, COPY, STATIC_PORTFOLIO_ASSETS, ZONE_COORDS, G, G2 } from '@/app/data/landing-page';


// ══════════════════════════════════════════════════════════
//  MAIN LANDING PAGE
// ══════════════════════════════════════════════════════════
export default function LandingPage() {
  const { locale, setLocale } = useI18n();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeZone, setActiveZone] = useState<number | null>(null);
  const [portfolioAssetsDealt, setPortfolioAssetsDealt] = useState(false);
  const [portfolioAssets, setPortfolioAssets] = useState<Property[]>(STATIC_PORTFOLIO_ASSETS as any);
  const [featured, setFeatured] = useState<Property[]>([]);
  const [filterType, setFilterType] = useState('');
  const [filterCompound, setFilterCompound] = useState('');
  const [filterBedrooms, setFilterBedrooms] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const listingsSectionRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  }, []);

  const lang = locale === 'ar' ? 'ar' : 'en';
  const mode = (theme === 'light' ? 'light' : 'dark') as 'light' | 'dark';
  const th = THEMES[mode];
  const T = COPY[lang];
  const isAr = lang === 'ar';

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setLoaded(true), 80);

    InventoryService.getFeaturedListings(6)
      .then((listings) => {
        if (listings && Array.isArray(listings)) {
          setFeatured(listings);
        }
      })
      .catch(() => {});

    const onScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [mounted, lang, mode]);

  useEffect(() => {
    if (!listingsSectionRef.current || portfolioAssetsDealt) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setPortfolioAssetsDealt(true); obs.disconnect(); } }),
      { threshold: 0.12 }
    );
    obs.observe(listingsSectionRef.current);
    return () => obs.disconnect();
  }, [portfolioAssetsDealt]);

  useEffect(() => { setPortfolioAssetsDealt(false); setTimeout(() => setPortfolioAssetsDealt(true), 100); }, [lang, mode]);

  if (!mounted) return null;

  // Removed sec variable in favor of .lux-container class

  const handleSearch = () => {
    const source = featured.length > 0 ? featured : (STATIC_PORTFOLIO_ASSETS as any);
    const filtered = source.filter((p: any) => {
      if (filterType && p.propertyType !== filterType) return false;
      if (filterCompound && p.compound !== filterCompound) return false;
      if (filterBedrooms && p.bedrooms !== parseInt(filterBedrooms)) return false;
      if (filterPrice && p.price > parseInt(filterPrice)) return false;
      return true;
    });
    
    if (filtered.length > 0) {
      setFeatured(filtered);
      setTimeout(() => listingsSectionRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  };

  const listings = featured.length > 0
    ? featured.map((p, idx) => ({
        id: p.id,
        title: p.title,
        titleAr: p.title,
        location: `${p.compound} · ${p.location}`,
        locationAr: `${p.compound} · ${p.location}`,
        price: `EGP ${p.price.toLocaleString(isAr ? 'ar-EG' : 'en-US')}`,
        beds: p.bedrooms || 3,
        baths: p.bathrooms || 2,
        sqft: `${p.area || 200} m²`,
        badge: p.status || 'Available',
        badgeColor: G2,
        img: STATIC_PORTFOLIO_ASSETS[Math.min(STATIC_PORTFOLIO_ASSETS.length - 1, idx)].img,
      }))
    : STATIC_PORTFOLIO_ASSETS.map(p => ({
        ...p,
        price: `EGP ${p.price.toLocaleString(isAr ? 'ar-EG' : 'en-US')}`,
      }));

  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--on-surface)] transition-colors duration-500" dir={T.dir}>

      {/* ══ NAV ══ */}
      <nav className={`fixed top-0 left-0 right-0 z-[300] h-[68px] flex items-center justify-between px-12 transition-all duration-700 cubic-bezier(0.16,1,0.3,1) ${scrolled ? 'lux-glass border-b border-white/10' : 'bg-transparent border-b border-transparent'}`} dir={T.dir}>
        <div className="flex items-center gap-3 cursor-pointer group">
          <ShieldLogo size={38} />
          <div className="flex flex-col">
            <div className="lux-gold-text text-lg leading-tight tracking-[0.2em] font-serif uppercase">
              {T.brand}
            </div>
            <div className="text-[8px] tracking-[0.38em] text-white/40 uppercase font-body mt-0.5">
              {T.sub}
            </div>
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {T.nav.map((n, i) => (
            <span 
              key={n} 
              onClick={() => scrollTo(['listings', 'intelligence', 'about', 'contact'][i])} 
              className={`text-[11px] font-medium tracking-[0.13em] uppercase transition-all duration-300 cursor-pointer text-[var(--text-sub)] hover:text-[var(--gold-prime)] ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}
            >
              {n}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')} 
            className="lux-button-outline !px-3 !py-1.5 !text-[10px]"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button 
            onClick={() => setTheme(mode === 'dark' ? 'light' : 'dark')} 
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/5 border border-white/10 text-white/60 hover:text-white"
          >
            {mode === 'dark' ? '☀' : '🌙'}
          </button>
          <button 
            onClick={() => scrollTo('listings')} 
            className="hidden sm:lux-button-outline !px-4 !py-2 !text-[10px]"
          >
            {T.cta}
          </button>
        </div>
      </nav>

      {/* Smart filter moved into listings section below */}

      {/* ══ HERO ══ */}
      <section className="lux-hero-section bg-[var(--hero-bg)]">
        <div 
          className={`lux-hero-bg bg-[url('https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=1800&q=80')] ${loaded ? 'scale-100' : 'scale-[1.06]'} transition-transform duration-1000 ${mode === 'dark' ? 'opacity-[0.55]' : 'opacity-[0.15]'}`}
        />
        <div 
          className={`lux-hero-overlay ${mode === 'dark' ? 'bg-[linear-gradient(105deg,rgba(10,21,32,.97)_0%,rgba(13,32,53,.85)_45%,rgba(10,21,32,.4)_100%)]' : 'bg-[linear-gradient(105deg,rgba(192,214,212,.98)_0%,rgba(213,232,230,.95)_50%,rgba(192,214,212,.7)_100%)]'}`}
        />
        <ParticleCanvas />

        <div className="lux-container relative z-10 w-full">
          <div className="grid md:grid-cols-[55%_45%] gap-14 items-center py-[80px]">
            <div className={isAr ? 'order-2' : 'order-1'}>
              <div 
                className={`inline-flex items-center gap-[10px] ${isAr ? 'flex-row-reverse' : 'flex-row'} ${loaded ? 'animate-[fadeUp_.6s_ease_.1s_both]' : 'opacity-0'}`}
              >
                <div className="w-[28px] h-[1px] bg-[var(--gold-prime)]" />
                <span className="lux-section-subtitle !mb-0">{T.tagline}</span>
              </div>

              <h1 
                className={`lux-section-title !text-[clamp(32px,4vw,56px)] !mb-4 mt-5 ${isAr ? 'text-right' : 'text-left'} ${loaded ? 'animate-[fadeUp_.7s_ease_.2s_both]' : 'opacity-0'}`} 
              >
                {isAr ? T.heroH1.slice().reverse().join(' ') : T.heroH1.join(' ')} <br />
                <em className="lux-gold-text italic">{T.heroItalic}</em>
              </h1>

              <div className={`text-[11px] tracking-[0.2em] uppercase text-[var(--gold-prime)] font-medium mb-4 ${loaded ? 'animate-[fadeUp_.7s_ease_.3s_both]' : 'opacity-0'}`}>{T.heroSub}</div>

              <p 
                className={`text-sm font-light leading-relaxed mb-8 max-w-lg text-[var(--text-sub)] ${isAr ? 'text-right' : 'text-left'} ${loaded ? 'animate-[fadeUp_.7s_ease_.38s_both]' : 'opacity-0'}`} 
              >
                {T.heroDesc}
              </p>

              <div className={`flex gap-4 mb-12 ${isAr ? 'flex-row-reverse' : 'flex-row'} ${loaded ? 'animate-[fadeUp_.7s_ease_.46s_both]' : 'opacity-0'}`}>
                <Link href="/listings" className="lux-button lux-button-primary shadow-gold">
                  {T.btnDiscover}
                </Link>
                <Link href="/contact" className="lux-button lux-button-outline">
                  {T.btnView}
                </Link>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-4 lux-glass rounded-xl overflow-hidden ${loaded ? 'animate-[fadeUp_.7s_ease_.56s_both]' : 'opacity-0'}`}>
                {T.stats.map(([val, lbl], i) => (
                  <div key={i} className={`text-center py-5 px-3 ${i < T.stats.length - 1 ? 'border-r border-white/10' : ''}`}>
                    <div className={styles.heroStatValue}>{val}</div>
                    <div className={styles.heroStatLabel}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero card stack */}
            <div 
              className={`hidden md:block relative h-[520px] ${isAr ? 'order-1' : 'order-2'} ${loaded ? 'animate-[fadeUp_.9s_ease_.45s_both]' : 'opacity-0'}`}
            >
              <div className={`absolute inset-0 flex items-center justify-center ${mode === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.025]'}`}>
                <ShieldLogo size={340} />
              </div>
              {[{ off: 2, class: styles.heroCardStackItemTertiary, op: 0.4 }, 
                { off: 1, class: styles.heroCardStackItemSecondary, op: 0.65 }, 
                { off: 0, class: styles.heroCardStackItemBase, op: 1 }].map(({ off, class: itemClass, op }, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.heroCardStackItem} ${itemClass}`}
                  style={{ 
                    top: off * 20, 
                    left: off * 20, 
                    right: -(off * 20), 
                    bottom: -(off * 20), 
                    opacity: op, 
                  }}
                >
                  {off === 0 && (
                    <>
                      <img src={STATIC_PORTFOLIO_ASSETS[1].img} alt="" className="w-full h-[62%] object-cover" />
                      <div className={`absolute top-4 left-4 ${styles.badgeLux}`}>{STATIC_PORTFOLIO_ASSETS[1].badge}</div>
                      <div className="p-6">
                        <div className="text-[10px] font-medium tracking-[0.15em] uppercase lux-gold-text mb-1.5 font-body">{isAr ? STATIC_PORTFOLIO_ASSETS[1].locationAr : STATIC_PORTFOLIO_ASSETS[1].location}</div>
                        <div className="font-serif text-2xl font-semibold mb-3 text-white">{isAr ? STATIC_PORTFOLIO_ASSETS[1].titleAr : STATIC_PORTFOLIO_ASSETS[1].title}</div>
                        <div className="flex justify-between items-center">
                          <span className="font-mono text-xl font-medium lux-gold-text">EGP {STATIC_PORTFOLIO_ASSETS[1].price.toLocaleString(isAr ? 'ar-EG' : 'en-US')}</span>
                          <span className="text-[11px] text-white/40 font-mono font-light uppercase tracking-tight">{STATIC_PORTFOLIO_ASSETS[1].beds} {T.beds} · {STATIC_PORTFOLIO_ASSETS[1].baths} {T.baths}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-[28px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[6px] opacity-40 z-10">
          <span className="text-[9px] tracking-[.24em] uppercase text-[var(--text-muted)] font-body">{T.scroll}</span>
          <div className="animate-shimmer w-[1px] h-[32px] bg-gradient-to-b from-[var(--gold-prime)] to-transparent" />
        </div>
      </section>

      {/* ══ LISTINGS ══ */}
      <section id="listings" ref={listingsSectionRef} className={`lux-section-padding ${mode === 'dark' ? 'bg-[#0A1520]' : 'bg-[var(--bg-alt)]'}`}>
        <div className="lux-container">
          <div className={`reveal flex justify-between items-end mb-12 flex-wrap gap-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={isAr ? 'text-right' : 'text-left'}>
              <div className="lux-section-subtitle">{T.secListings}</div>
              <h2 className="lux-section-title">{T.h2Listings}</h2>
            </div>
            <Link href="/listings" className="lux-button lux-button-outline !px-5 !py-2.5 !text-[10px]">{T.viewAll}</Link>
          </div>

          {/* Smart Filters */}
          <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-0 rounded-xl overflow-hidden mb-12 lux-glass !border-white/5 shadow-2xl">
            {[
              { val: filterType, set: setFilterType, label: T.searchType, opts: [{ v: '', l: T.searchType }, { v: 'villa', l: 'Villa' }, { v: 'apartment', l: 'Apartment' }, { v: 'penthouse', l: 'Penthouse' }, { v: 'townhouse', l: 'Townhouse' }] },
              { val: filterCompound, set: setFilterCompound, label: T.searchCompound, opts: [{ v: '', l: T.searchCompound }, { v: 'Fifth Settlement', l: 'Fifth Settlement' }, { v: 'New Cairo', l: 'New Cairo' }, { v: 'Madinaty', l: 'Madinaty' }, { v: 'Sheikh Zayed', l: 'Sheikh Zayed' }] },
              { val: filterBedrooms, set: setFilterBedrooms, label: isAr ? 'غرف' : 'Rooms', opts: [{ v: '', l: isAr ? 'غرف' : 'Rooms' }, { v: '1', l: `1 ${T.beds}` }, { v: '2', l: `2 ${T.beds}` }, { v: '3', l: `3 ${T.beds}` }, { v: '4', l: `4 ${T.beds}` }, { v: '5', l: `5+ ${T.beds}` }] },
              { val: filterPrice, set: setFilterPrice, label: T.searchBudget, opts: [{ v: '', l: T.searchBudget }, { v: '2000000', l: 'Under 2M' }, { v: '5000000', l: 'Under 5M' }, { v: '10000000', l: 'Under 10M' }, { v: '15000000', l: 'Under 15M' }] },
            ].map((seg, i) => (
              <div key={i} className="px-6 py-4 border-r border-white/5">
                <div className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/40 mb-1.5 font-body">{seg.label}</div>
                <select 
                  value={seg.val} 
                  onChange={(e) => seg.set(e.target.value)} 
                  title={seg.label}
                  className={styles.filterSelect}
                >
                  {seg.opts.map((o) => <option key={o.v} value={o.v} className={styles.filterOption}>{o.l}</option>)}
                </select>
              </div>
            ))}
            <button onClick={handleSearch} className="lux-button-primary !rounded-none !px-8 border-none !text-[11px]">{T.searchBtn}</button>
          </div>

          {/* Listing cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((p, i) => (
              <PropCard
                key={p.id}
                id={p.id}
                title={isAr ? p.titleAr : p.title}
                location={isAr ? p.locationAr : p.location}
                price={p.price}
                beds={p.beds}
                baths={p.baths}
                sqft={p.sqft}
                badge={p.badge}
                badgeColor={p.badgeColor}
                img={p.img}
                dealDelay={i * 0.09}
                dealt={portfolioAssetsDealt}
                isAr={isAr}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY SIERRA BLU ══ */}
      <section id="about" className="relative py-24 overflow-hidden bg-[var(--bg)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.025]">
          <ShieldLogo size={600} />
        </div>
        <div className="relative z-10 mx-auto px-6 md:px-12 max-w-7xl">
          <div className="reveal text-center mb-16">
            <div className="lux-section-subtitle mx-auto">{T.secWhy}</div>
            <h2 className="lux-section-title">{T.h2Why}</h2>
            {'whyDesc' in T && <p className={`text-sm font-light leading-relaxed max-w-xl mx-auto opacity-70 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{(T as any).whyDesc}</p>}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {T.why.map((w: any, i: number) => (
              <div key={i} className={`reveal lux-glass p-8 rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 group ${isAr ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center justify-between mb-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="text-3xl lux-gold-text opacity-50 group-hover:opacity-100 transition-opacity font-serif">{w.icon}</div>
                  {w.stat && (
                    <div className="text-center">
                      <div className="font-mono text-2xl font-medium lux-gold-text leading-none">{w.stat}</div>
                      <div className="text-[8px] tracking-widest uppercase opacity-40 font-body mt-1">{w.statLabel}</div>
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-white">{w.title}</h3>
                <div className={`h-0.5 w-10 lux-gold-gradient rounded-full mb-4 ${isAr ? 'ml-auto' : ''}`} />
                <p className={`text-xs font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className={`reveal mt-16 p-8 rounded-2xl lux-glass border border-[var(--gold-prime)]/20 flex items-center justify-between flex-wrap gap-8 ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
            <div className="flex-1 min-w-[300px]">
              <div className="font-serif text-2xl font-light text-white mb-2">{T.bannerH}</div>
              <div className="text-xs lux-gold-text tracking-widest uppercase opacity-70 font-body">{T.bannerSub}</div>
            </div>
            <Link href="/listings" className="lux-button lux-button-primary !py-3 !px-8">
              {T.bannerBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* ══ INTELLIGENCE MAP ══ */}
      <section id="intelligence" className={`lux-section-padding ${mode === 'dark' ? 'bg-[#091828]' : 'bg-[var(--bg-alt)]'}`}>
        <div className="lux-container">
          <div className={`flex flex-col md:flex-row gap-16 items-center ${isAr ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className={isAr ? 'text-right' : 'text-left'}>
                <div className="lux-section-subtitle">{T.secMap}</div>
                <h2 className="lux-section-title">
                  {T.mapH1}<br /><em className="lux-gold-text italic">{T.mapH2}</em>
                </h2>
                <div className={`h-0.5 w-12 lux-gold-gradient rounded-full my-6 ${isAr ? 'ml-auto' : ''}`} />
                <p className={`text-sm font-light leading-relaxed opacity-70 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{T.mapDesc}</p>
              </div>
              
              <div className="flex flex-col gap-3">
                {T.zones.map((z, i) => (
                  <div
                    key={i}
                    className={`reveal flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 lux-glass border border-white/5 hover:border-[var(--gold-prime)]/30 ${activeZone === i ? 'border-[var(--gold-prime)]/50 bg-white/5' : ''} ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                    onClick={() => setActiveZone(activeZone === i ? null : i)}
                  >
                    <div className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ background: z.color, boxShadow: `0 0 10px ${z.color}` }} />
                    <div className={`flex-1 text-sm font-medium text-white opacity-80 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{z.area}</div>
                    <span className="font-mono text-[10px] font-bold py-1 px-3 rounded-full" style={{ color: z.color, background: `${z.color}15`, border: `1px solid ${z.color}30` }}>{z.stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`reveal h-[520px] relative ${isAr ? 'order-1' : 'order-2'}`}>
              <div className="h-full rounded-2xl overflow-hidden lux-glass border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                <LiveMap mode={mode} activeZoneIndex={activeZone} zones={T.zones} />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] text-[8px] tracking-[0.4em] lux-gold-text opacity-40 font-body pointer-events-none">SIERRA BLU INTELLIGENCE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SIERRA AI ══ */}
      <section className={`lux-section-padding border-y border-white/5 ${mode === 'dark' ? 'bg-gradient-to-br from-[#0A1520] via-[#0D2035] to-[#122A47]' : 'bg-gradient-to-br from-[var(--bg-alt)] via-[var(--bg)] to-[var(--bg-2)]'}`}>
        <div className="mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className={`reveal ${isAr ? 'order-2 text-right' : 'order-1 text-left'}`}>
              <div className="lux-section-subtitle">{T.secAI}</div>
              <h2 className="lux-section-title">{T.aiH}</h2>
              <div className="text-[10px] font-bold tracking-widest text-[#1B6CA8] uppercase mb-6 font-body">{T.aiSub}</div>
              <div className={`h-0.5 w-12 lux-gold-gradient rounded-full mb-8 ${isAr ? 'ml-auto' : ''}`} />
              <p className={`text-sm font-light leading-relaxed opacity-70 mb-10 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{T.aiDesc}</p>
              
              <div className="flex flex-col gap-4 mb-10">
                {T.aiFeatures.map((f, i) => (
                  <div key={i} className={`flex items-center gap-3 text-sm opacity-80 ${isAr ? "flex-row-reverse font-['Cairo',sans-serif]" : "flex-row font-['Jost',sans-serif]"}`}>
                    <div className="w-1.5 h-1.5 rounded-full lux-gold-gradient" />
                    {f}
                  </div>
                ))}
              </div>
              
              <a href="https://t.me/SierraBluBot" target="_blank" rel="noopener noreferrer" className="lux-button lux-button-primary inline-flex">
                {T.aiCTA}
              </a>
            </div>

            {/* Chat mockup */}
            <div className={`reveal ${isAr ? 'order-1' : 'order-2'}`}>
              <div className="lux-glass border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className={styles.chatAvatar}>
                    ◈
                    <div className={styles.chatAvatarPing} />
                  </div>
                  <div>
                    <div className="font-serif text-lg text-white">Sierra Intelligence</div>
                    <div className="font-mono text-[9px] text-[#4ADE80] uppercase tracking-wider">● Online · 4s response</div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {T.aiChat.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`${styles.chatMessage} ${msg.from === 'user' ? styles.chatMessageUser : styles.chatMessageBot} ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center text-[9px] tracking-widest uppercase opacity-30 font-body">
                  AI-Powered Pipeline · 24/7 Availability
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className={`lux-section-padding ${mode === 'dark' ? 'bg-[#0A1628]' : 'bg-[var(--bg-2)]'}`}>
        <div className="mx-auto px-6 md:px-12 max-w-7xl">
          <div className="reveal text-center mb-16">
            <div className="lux-section-subtitle mx-auto">{T.secTesti}</div>
            <h2 className="lux-section-title">{T.h2Testi}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {T.testimonials.map((t, i) => (
              <div key={i} className="reveal lux-glass p-8 rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 group shadow-xl">
                <div className="font-serif text-5xl lux-gold-text opacity-30 leading-none mb-4">&ldquo;</div>
                <p className={`text-sm font-light leading-relaxed opacity-70 italic mb-8 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{t.q}</p>
                <div className={`flex items-center gap-4 ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="w-10 h-10 rounded-full lux-gold-gradient flex items-center justify-center font-mono text-[10px] font-bold text-[#071422]">{t.i}</div>
                  <div>
                    <div className={`text-sm font-medium text-white ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{t.name}</div>
                    <div className="text-[10px] tracking-widest uppercase opacity-40 font-body">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FORM ══ */}
      <section id="contact" className={`lux-section-padding border-t border-white/5 ${mode === 'dark' ? 'bg-gradient-to-br from-[#0A1520] to-[#0D2035]' : 'bg-gradient-to-br from-[var(--bg)] to-[var(--bg-alt)]'}`}>
        <div className="mx-auto px-6 max-w-xl">
          <div className="reveal text-center mb-12">
            <div className="lux-section-subtitle mx-auto">{T.ctaTag}</div>
            <h2 className="lux-section-title">{T.ctaH}</h2>
            <p className={`text-sm font-light opacity-70 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{T.ctaSub}</p>
          </div>
          
          <div className="reveal">
            {submitted ? (
              <div className="lux-glass p-12 rounded-2xl border border-[var(--gold-prime)]/30 text-center">
                <div className="text-4xl mb-6">✓</div>
                <div className="font-serif text-2xl lux-gold-text mb-2">{lang === 'en' ? 'Request Received.' : 'تم استلام طلبك.'}</div>
                <p className={`text-sm font-light opacity-70 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}>{T.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                {[
                  { key: 'name' as const, label: T.formName, type: 'text' },
                  { key: 'phone' as const, label: T.formPhone, type: 'tel' },
                ].map((f) => (
                  <input
                    key={f.key}
                    type={f.type}
                    required
                    placeholder={f.label}
                    value={formData[f.key]}
                    onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                    className={`w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-sm font-light text-white outline-none focus:border-[var(--gold-prime)]/50 transition-all ${isAr ? 'text-right font-[\'Cairo\',sans-serif]' : 'text-left font-[\'Jost\',sans-serif]'}`}
                  />
                ))}
                <button type="submit" className="lux-button lux-button-primary w-full !py-4">
                  {T.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-[#040E1C] text-[#EFF8F7] py-20 border-t border-white/5">
        <div className="mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-16 mb-20">
            <div className={isAr ? 'text-right' : 'text-left'}>
              <div className={`flex items-center gap-4 mb-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                <ShieldLogo size={42} />
                <div>
                  <div className="font-serif text-xl lux-gold-text tracking-widest uppercase">{T.brand}</div>
                  <div className="text-[9px] tracking-[0.4em] opacity-40 font-body">{T.sub}</div>
                </div>
              </div>
              <p className={`text-xs font-light leading-relaxed opacity-40 max-w-xs ${isAr ? 'ml-auto font-["Cairo",sans-serif]' : 'font-["Jost",sans-serif]'}`}>{T.footDesc}</p>
            </div>
            
            {[
              { title: T.footNav, links: T.footNavLinks, ids: ['listings', 'intelligence', 'about', '', 'contact'] },
              { title: T.footMarkets, links: T.footMarketLinks, ids: ['intelligence', 'intelligence', 'intelligence', 'intelligence', 'intelligence'] },
            ].map((col) => (
              <div key={col.title} className={isAr ? 'text-right' : 'text-left'}>
                <div className="text-[10px] font-bold tracking-widest lux-gold-text uppercase mb-8 font-body">{col.title}</div>
                <div className="space-y-4">
                  {col.links.map((l, i) => (
                    <div 
                      key={l} 
                      onClick={() => col.ids[i] && scrollTo(col.ids[i])} 
                      className={`text-xs font-light opacity-40 hover:opacity-100 hover:lux-gold-text cursor-pointer transition-all ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`}
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className={`pt-10 border-t border-white/5 flex justify-between items-center flex-wrap gap-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="text-[10px] font-light opacity-30 font-body">{T.copyright}</div>
            <div className="flex gap-8">
              {T.legal.map((l) => (
                <span key={l} className="text-[10px] font-light opacity-30 hover:opacity-100 cursor-pointer transition-all font-body">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

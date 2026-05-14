#!/usr/bin/env node

const report = {
  nodeVersion: process.version,
  platform: process.platform,
  arch: process.arch,
  timestamp: new Date().toISOString(),
};

console.log('[diagnostic] Sierra Blu environment check');
console.log(JSON.stringify(report, null, 2));

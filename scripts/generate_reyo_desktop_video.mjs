import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = './tmp_reyo_frames';
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public', { recursive: true });
}

// 1920 x 1080 Desktop resolution
const W = 1920;
const H = 1080;

const renderDesktopFrame = (contentSvg, options = {}) => {
  const { searchVal = 'Search for packaging...', activeTab = 'Home' } = options;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="obsidianBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c0a17"/>
      <stop offset="50%" stop-color="#100d20"/>
      <stop offset="100%" stop-color="#0a0814"/>
    </linearGradient>
    <linearGradient id="cardBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18142a"/>
      <stop offset="100%" stop-color="#120f22"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background canvas with star/dust particles -->
  <rect width="${W}" height="${H}" fill="url(#obsidianBg)"/>
  <circle cx="340" cy="220" r="1.5" fill="#ffffff" opacity="0.3"/>
  <circle cx="890" cy="140" r="1.2" fill="#ffffff" opacity="0.2"/>
  <circle cx="1450" cy="380" r="1.5" fill="#ffffff" opacity="0.25"/>
  <circle cx="720" cy="740" r="1.2" fill="#ffffff" opacity="0.2"/>
  <circle cx="1120" cy="890" r="1.5" fill="#ffffff" opacity="0.3"/>
  <circle cx="1680" cy="650" r="1.2" fill="#ffffff" opacity="0.2"/>

  <!-- Subtle ambient purple background glow -->
  <circle cx="650" cy="450" r="400" fill="#8b5cf6" opacity="0.05" filter="url(#glow)"/>
  <circle cx="1200" cy="600" r="350" fill="#a855f7" opacity="0.04" filter="url(#glow)"/>

  <!-- LEFT SIDEBAR -->
  <g transform="translate(0, 0)">
    <rect width="90" height="${H}" fill="#0e0b1c" stroke="#1f1a36" stroke-width="1.5"/>
    
    <!-- Logo -->
    <g transform="translate(24, 32)">
      <rect width="42" height="42" rx="12" fill="url(#accentGrad)" filter="url(#softShadow)"/>
      <text x="21" y="27" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#ffffff">R</text>
    </g>

    <!-- Navigation Icons -->
    <g transform="translate(24, 120)">
      <rect width="42" height="42" rx="12" fill="${activeTab === 'Home' ? '#251e44' : 'transparent'}" stroke="${activeTab === 'Home' ? '#6d28d9' : 'transparent'}" stroke-width="1.5"/>
      <path d="M12 28 L12 18 L21 11 L30 18 L30 28 L23 28 L23 21 L19 21 L19 28 Z" fill="${activeTab === 'Home' ? '#c084fc' : '#64748b'}"/>
    </g>

    <g transform="translate(24, 180)">
      <path d="M12 15 L21 11 L30 15 L21 19 Z M12 21 L21 25 L30 21 M12 27 L21 31 L30 27" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <g transform="translate(24, 240)">
      <path d="M21 12 L23 18 L29 20 L23 22 L21 28 L19 22 L13 20 L19 18 Z" fill="none" stroke="#64748b" stroke-width="2" stroke-linejoin="round"/>
    </g>

    <g transform="translate(24, 300)">
      <polygon points="21,12 23.5,17.5 29.5,18.2 25,22.3 26.2,28.2 21,25.2 15.8,28.2 17,22.3 12.5,18.2 18.5,17.5" fill="none" stroke="#64748b" stroke-width="2"/>
    </g>

    <g transform="translate(24, 1000)">
      <circle cx="21" cy="21" r="8" fill="none" stroke="#64748b" stroke-width="2"/>
      <path d="M21 9 L21 11 M21 31 L21 33 M9 21 L11 21 M31 21 L33 21" stroke="#64748b" stroke-width="2"/>
    </g>
  </g>

  <!-- TOP HEADER BAR -->
  <g transform="translate(120, 28)">
    <g transform="translate(0, 0)">
      <circle cx="24" cy="24" r="24" fill="#6d28d9"/>
      <text x="24" y="31" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="700" fill="#ffffff">R</text>

      <text x="64" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#ffffff">Good morning, Reshma ✨</text>
      <text x="64" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="400" fill="#94a3b8">Here's what's happening in your library</text>
    </g>

    <g transform="translate(480, 4)">
      <rect width="480" height="46" rx="23" fill="#151128" stroke="#2a2347" stroke-width="1.5"/>
      <circle cx="24" cy="23" r="7" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <line x1="29" y1="28" x2="36" y2="35" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <text x="48" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#cbd5e1">${searchVal}</text>
    </g>

    <g transform="translate(1000, 14)">
      <path d="M14 6 A6 6 0 0 1 26 6 L26 14 L30 18 L10 18 L14 14 Z M17 20 A3 3 0 0 0 23 20" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="27" cy="6" r="3" fill="#a855f7"/>
    </g>
  </g>

  <!-- RIGHT SIDEBAR -->
  <g transform="translate(1480, 40)">
    <text x="0" y="20" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#a855f7" letter-spacing="1">LEARNING PROGRESS</text>
    
    <g transform="translate(0, 40)">
      <text x="0" y="20" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Packaging Design</text>
      <text x="0" y="40" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">14 saves · going deep</text>
      
      <text x="0" y="80" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Typography</text>
      <text x="0" y="100" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">6 saves · mentoring</text>
      
      <text x="0" y="140" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Motion Design</text>
      <text x="0" y="160" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">2 saves · just started</text>
    </g>

    <g transform="translate(0, 260)">
      <rect width="380" height="190" rx="20" fill="#16122c" stroke="#2b234d" stroke-width="1.5" filter="url(#softShadow)"/>
      <text x="24" y="36" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">✨ This Week</text>
      <text x="24" y="70" font-family="-apple-system, sans-serif" font-size="14" fill="#cbd5e1">You saved 8 things across 3 topics.</text>
      <text x="24" y="94" font-family="-apple-system, sans-serif" font-size="14" fill="#cbd5e1">Your deepest dive was Packaging</text>
      <text x="24" y="118" font-family="-apple-system, sans-serif" font-size="14" fill="#cbd5e1">Design (5 saves).</text>
      <text x="24" y="154" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#c084fc">See weekly summary →</text>
    </g>

    <g transform="translate(0, 480)">
      <rect width="380" height="170" rx="20" fill="#16122c" stroke="#2b234d" stroke-width="1.5" filter="url(#softShadow)"/>
      <text x="24" y="36" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Need your help</text>
      <text x="24" y="70" font-family="-apple-system, sans-serif" font-size="14" fill="#cbd5e1">I found 3 saves I'm not sure about —</text>
      <text x="24" y="94" font-family="-apple-system, sans-serif" font-size="14" fill="#cbd5e1">help me place them?</text>
      <text x="24" y="134" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#c084fc">Sort now →</text>
    </g>
  </g>

  <!-- MAIN CONTENT INJECTION -->
  <g transform="translate(120, 110)">
    ${contentSvg}
  </g>
</svg>`;
};

// Hero Banner helper
const renderHeroBanner = (highlightBtn = false) => `
<g transform="translate(0, 0)">
  <rect width="1320" height="150" rx="20" fill="#181333" stroke="#312658" stroke-width="1.5" filter="url(#softShadow)"/>
  
  <text x="32" y="36" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#a855f7" letter-spacing="1.5">RIGHT NOW</text>
  <text x="32" y="72" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#ffffff">You're working on <tspan fill="#c084fc">bottle-label-concept</tspan></text>
  <text x="32" y="100" font-family="-apple-system, sans-serif" font-size="14" fill="#94a3b8">I found 7 saves from 3 sources that match this project</text>

  <g transform="translate(32, 110)">
    <rect width="160" height="34" rx="17" fill="${highlightBtn ? '#9333ea' : '#7c3aed'}" stroke="${highlightBtn ? '#ffffff' : 'none'}" stroke-width="${highlightBtn ? '2' : '0'}" filter="url(#softShadow)"/>
    <text x="80" y="22" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">View matches →</text>
  </g>

  <g transform="translate(940, 20)">
    <rect x="0" y="10" width="110" height="90" rx="10" fill="#2a1f49" stroke="#4c387d" stroke-width="1"/>
    <text x="55" y="65" text-anchor="middle" font-size="34">🍾</text>
    
    <rect x="125" y="10" width="110" height="90" rx="10" fill="#2a1f49" stroke="#4c387d" stroke-width="1"/>
    <text x="180" y="65" text-anchor="middle" font-size="34">🏷️</text>

    <rect x="250" y="10" width="110" height="90" rx="10" fill="#2a1f49" stroke="#4c387d" stroke-width="1"/>
    <text x="305" y="65" text-anchor="middle" font-size="34">📦</text>
  </g>
</g>
`;

// Filter Tabs & Pills
const renderTabsAndPills = () => `
<g transform="translate(0, 180)">
  <text x="0" y="24" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Topics</text>
  <rect x="0" y="34" width="55" height="3" rx="1.5" fill="#a855f7"/>
  
  <text x="80" y="24" font-family="-apple-system, sans-serif" font-size="18" font-weight="500" fill="#64748b">All</text>

  <g transform="translate(180, 0)">
    <rect x="0" y="2" width="130" height="32" rx="16" fill="#1a1435" stroke="#322759" stroke-width="1"/>
    <circle cx="18" cy="18" r="7" fill="#ef4444"/>
    <text x="34" y="22" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#ffffff">YouTube 12</text>
    <text x="114" y="22" font-size="10" fill="#94a3b8">▼</text>

    <rect x="145" y="2" width="135" height="32" rx="16" fill="#1a1435" stroke="#322759" stroke-width="1"/>
    <circle cx="163" cy="18" r="7" fill="#ec4899"/>
    <text x="179" y="22" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#ffffff">Instagram 9</text>
    <text x="264" y="22" font-size="10" fill="#94a3b8">▼</text>

    <rect x="295" y="2" width="125" height="32" rx="16" fill="#1a1435" stroke="#322759" stroke-width="1"/>
    <circle cx="313" cy="18" r="7" fill="#e11d48"/>
    <text x="329" y="22" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#ffffff">Pinterest 7</text>
    <text x="404" y="22" font-size="10" fill="#94a3b8">▼</text>

    <rect x="435" y="2" width="125" height="32" rx="16" fill="#1a1435" stroke="#322759" stroke-width="1"/>
    <circle cx="453" cy="18" r="7" fill="#f43f5e"/>
    <text x="469" y="22" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#ffffff">Dribbble 5</text>
    <text x="544" y="22" font-size="10" fill="#94a3b8">▼</text>
  </g>
</g>
`;

// 1. Scene: Home Feed
const scene01_HomeFeed = () => renderDesktopFrame(`
  ${renderHeroBanner()}
  ${renderTabsAndPills()}

  <g transform="translate(0, 250)">
    <g transform="translate(0, 0)">
      <rect width="310" height="320" rx="18" fill="#17122e" stroke="#2d2252" stroke-width="1.5" filter="url(#softShadow)"/>
      <rect width="310" height="170" rx="18" fill="#27194f"/>
      <text x="155" y="100" text-anchor="middle" font-size="48">✨</text>
      <rect x="16" y="16" width="76" height="24" rx="6" fill="#ef4444"/>
      <text x="54" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#ffffff">YouTube</text>

      <text x="18" y="205" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Kinetic type reveal in</text>
      <text x="18" y="228" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">After Effects</text>
      <text x="18" y="258" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Motion Lab</text>
      <rect x="18" y="278" width="94" height="22" rx="6" fill="#2b1f4c"/>
      <text x="65" y="293" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" fill="#c084fc">Motion Design</text>
    </g>

    <g transform="translate(335, 0)">
      <rect width="310" height="320" rx="18" fill="#17122e" stroke="#2d2252" stroke-width="1.5" filter="url(#softShadow)"/>
      <rect width="310" height="170" rx="18" fill="#1f2c4a"/>
      <text x="155" y="100" text-anchor="middle" font-size="48">🍾</text>
      <rect x="16" y="16" width="76" height="24" rx="6" fill="#ef4444"/>
      <text x="54" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#ffffff">YouTube</text>

      <text x="18" y="205" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Designing die-lines</text>
      <text x="18" y="228" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">for bottle labels</text>
      <text x="18" y="258" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Studio Packet</text>
      <rect x="18" y="278" width="112" height="22" rx="6" fill="#2b1f4c"/>
      <text x="74" y="293" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" fill="#c084fc">Packaging Design</text>
    </g>

    <g transform="translate(670, 0)">
      <rect width="310" height="320" rx="18" fill="#17122e" stroke="#2d2252" stroke-width="1.5" filter="url(#softShadow)"/>
      <rect width="310" height="170" rx="18" fill="#3a1e3e"/>
      <text x="155" y="100" text-anchor="middle" font-size="48">💫</text>
      <rect x="16" y="16" width="76" height="24" rx="6" fill="#ef4444"/>
      <text x="54" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#ffffff">YouTube</text>

      <text x="18" y="205" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Long exposure light</text>
      <text x="18" y="228" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">streaks explained</text>
      <text x="18" y="258" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Frame by Frame</text>
      <rect x="18" y="278" width="94" height="22" rx="6" fill="#2b1f4c"/>
      <text x="65" y="293" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" fill="#c084fc">Motion Design</text>
    </g>

    <g transform="translate(1005, 0)">
      <rect width="310" height="320" rx="18" fill="#17122e" stroke="#2d2252" stroke-width="1.5" filter="url(#softShadow)"/>
      <rect width="310" height="170" rx="18" fill="#1c3345"/>
      <text x="155" y="100" text-anchor="middle" font-size="48">🔮</text>
      <rect x="16" y="16" width="76" height="24" rx="6" fill="#ef4444"/>
      <text x="54" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#ffffff">YouTube</text>

      <text x="18" y="205" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Vibrant 3D geometry</text>
      <text x="18" y="228" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">loops</text>
      <text x="18" y="258" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Render Diary</text>
      <rect x="18" y="278" width="94" height="22" rx="6" fill="#2b1f4c"/>
      <text x="65" y="293" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" fill="#c084fc">Motion Design</text>
    </g>
  </g>
`);

// 2. Scene: Topics Constellation Bubble Graph View
const scene02_GraphConstellation = (activeTooltip = 'Typography') => renderDesktopFrame(`
  ${renderHeroBanner()}
  ${renderTabsAndPills()}

  <g transform="translate(0, 240)">
    <rect width="1320" height="660" rx="20" fill="#120e24" stroke="#281e47" stroke-width="1.5"/>

    <path d="M 640 330 Q 420 180 280 200" stroke="#7c3aed" stroke-width="2.5" fill="none" opacity="0.6" stroke-dasharray="6,4"/>
    <path d="M 640 330 Q 820 180 960 200" stroke="#7c3aed" stroke-width="2.5" fill="none" opacity="0.6" stroke-dasharray="6,4"/>
    <path d="M 640 330 Q 460 480 340 540" stroke="#7c3aed" stroke-width="2.5" fill="none" opacity="0.6" stroke-dasharray="6,4"/>
    <path d="M 640 330 Q 820 480 940 540" stroke="#7c3aed" stroke-width="2.5" fill="none" opacity="0.6" stroke-dasharray="6,4"/>
    <path d="M 280 200 Q 180 340 200 440" stroke="#6d28d9" stroke-width="1.5" fill="none" opacity="0.4"/>

    <g transform="translate(640, 330)">
      <circle cx="0" cy="0" r="115" fill="#1c143a" stroke="#8b5cf6" stroke-width="3" filter="url(#softShadow)"/>
      <circle cx="0" cy="0" r="102" fill="none" stroke="#a855f7" stroke-width="1" opacity="0.5"/>
      <text x="0" y="-12" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#ffffff">Packaging Design</text>
      <text x="0" y="16" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="14" fill="#c084fc">14 saves</text>
      
      <g transform="translate(-36, 32)">
        <circle cx="12" cy="12" r="10" fill="#ef4444"/>
        <circle cx="36" cy="12" r="10" fill="#ec4899"/>
        <circle cx="60" cy="12" r="10" fill="#f43f5e"/>
      </g>
    </g>

    <g transform="translate(280, 200)">
      <circle cx="0" cy="0" r="90" fill="#1c143a" stroke="${activeTooltip === 'Typography' ? '#c084fc' : '#7c3aed'}" stroke-width="${activeTooltip === 'Typography' ? '4' : '2.5'}" filter="url(#softShadow)"/>
      <text x="0" y="-8" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Typography</text>
      <text x="0" y="16" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="13" fill="#c084fc">9 saves</text>
      <g transform="translate(-24, 30)">
        <circle cx="12" cy="12" r="9" fill="#ec4899"/>
        <circle cx="36" cy="12" r="9" fill="#e11d48"/>
      </g>
    </g>

    <g transform="translate(960, 200)">
      <circle cx="0" cy="0" r="95" fill="#1c143a" stroke="#7c3aed" stroke-width="2.5" filter="url(#softShadow)"/>
      <text x="0" y="-8" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Branding</text>
      <text x="0" y="16" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="13" fill="#c084fc">11 saves</text>
      <g transform="translate(-24, 30)">
        <circle cx="12" cy="12" r="9" fill="#ec4899"/>
        <circle cx="36" cy="12" r="9" fill="#f43f5e"/>
      </g>
    </g>

    <g transform="translate(340, 540)">
      <circle cx="0" cy="0" r="80" fill="#1c143a" stroke="#7c3aed" stroke-width="2.5" filter="url(#softShadow)"/>
      <text x="0" y="-6" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">Motion Design</text>
      <text x="0" y="16" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="13" fill="#c084fc">7 saves</text>
      <g transform="translate(-16, 28)">
        <circle cx="16" cy="10" r="8" fill="#ef4444"/>
      </g>
    </g>

    <g transform="translate(940, 540)">
      <circle cx="0" cy="0" r="80" fill="#1c143a" stroke="#7c3aed" stroke-width="2.5" filter="url(#softShadow)"/>
      <text x="0" y="-6" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">UI/UX Design</text>
      <text x="0" y="16" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="13" fill="#c084fc">5 saves</text>
    </g>

    <g transform="translate(180, 440)">
      <circle cx="0" cy="0" r="65" fill="#1c143a" stroke="#6d28d9" stroke-width="2"/>
      <text x="0" y="-4" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Illustration</text>
      <text x="0" y="16" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="12" fill="#c084fc">4 saves</text>
    </g>

    ${activeTooltip === 'Typography' ? `
    <g transform="translate(240, 270)" filter="url(#softShadow)">
      <rect width="360" height="150" rx="16" fill="#1a1236" stroke="#9333ea" stroke-width="2"/>
      <text x="24" y="34" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Typography</text>
      <text x="24" y="58" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#c084fc">9 saves from Instagram, Pinterest</text>
      <text x="24" y="90" font-family="-apple-system, sans-serif" font-size="13" fill="#cbd5e1">Mostly about: type pairing and vertical rhythm</text>
      <text x="24" y="122" font-family="-apple-system, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">Last updated: 4 days ago</text>
    </g>
    ` : ''}

    ${activeTooltip === 'Packaging' ? `
    <g transform="translate(600, 420)" filter="url(#softShadow)">
      <rect width="380" height="150" rx="16" fill="#1a1236" stroke="#9333ea" stroke-width="2"/>
      <text x="24" y="34" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Packaging Design</text>
      <text x="24" y="58" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#c084fc">14 saves from YouTube, Instagram, Dribbble</text>
      <text x="24" y="90" font-family="-apple-system, sans-serif" font-size="13" fill="#cbd5e1">Mostly about: die line setup and label hierarchy</text>
      <text x="24" y="122" font-family="-apple-system, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">Last updated: 2 days ago</text>
    </g>
    ` : ''}

    <text x="24" y="630" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#c084fc">See all topics →</text>
  </g>
`);

// 3. Topic Typography Sub-content
const typographyContent = `
  <g transform="translate(0, 0)">
    <g transform="translate(0, 0)">
      <text x="0" y="24" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#c084fc">← Back to dashboard</text>
    </g>

    <g transform="translate(0, 50)">
      <text x="0" y="20" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#a855f7" letter-spacing="1.5">TOPIC</text>
      <text x="0" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="38" font-weight="800" fill="#ffffff">Typography</text>
      <text x="0" y="96" font-family="-apple-system, sans-serif" font-size="16" fill="#cbd5e1">9 saves · Instagram, Pinterest</text>
      <text x="0" y="124" font-family="-apple-system, sans-serif" font-size="14" fill="#94a3b8">Mostly about: type pairing and vertical rhythm</text>
    </g>

    <g transform="translate(0, 210)">
      <rect width="180" height="42" rx="21" fill="#241a45" stroke="#4a3680" stroke-width="1.5"/>
      <text x="24" y="26" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Type pairing</text>
      <rect x="125" y="10" width="38" height="22" rx="11" fill="#7c3aed"/>
      <text x="144" y="25" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#ffffff">3</text>
    </g>

    <g transform="translate(0, 280)">
      <g transform="translate(0, 0)">
        <rect width="410" height="520" rx="22" fill="#181333" stroke="#9333ea" stroke-width="2" filter="url(#softShadow)"/>
        
        <rect width="410" height="400" rx="22" fill="#dc2626"/>
        <text x="205" y="280" text-anchor="middle" font-family="'Georgia', serif" font-size="280" font-weight="900" fill="#fef2f2" opacity="0.95">M</text>

        <rect x="20" y="20" width="80" height="26" rx="6" fill="#ef4444"/>
        <text x="60" y="38" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff">YouTube</text>

        <text x="24" y="445" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Quick kerning tip in 30 seconds</text>
        <text x="24" y="475" font-family="-apple-system, sans-serif" font-size="14" fill="#94a3b8">Type Daily</text>
      </g>

      <g transform="translate(445, 0)">
        <rect width="410" height="520" rx="22" fill="#181333" stroke="#312658" stroke-width="1.5" filter="url(#softShadow)"/>
        
        <rect width="410" height="400" rx="22" fill="#f8fafc"/>
        <text x="60" y="140" font-family="-apple-system, sans-serif" font-size="110" font-weight="900" fill="#0f172a">PA</text>
        <text x="60" y="250" font-family="-apple-system, sans-serif" font-size="110" font-weight="900" fill="#0f172a">PI</text>
        <text x="60" y="360" font-family="-apple-system, sans-serif" font-size="110" font-weight="900" fill="#dc2626">21</text>

        <rect x="20" y="20" width="80" height="26" rx="6" fill="#e11d48"/>
        <text x="60" y="38" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff">Pinterest</text>

        <text x="24" y="445" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Type specimen pin</text>
        <text x="24" y="475" font-family="-apple-system, sans-serif" font-size="14" fill="#94a3b8">Studio Glyph</text>
      </g>

      <g transform="translate(890, 0)">
        <rect width="410" height="520" rx="22" fill="#181333" stroke="#312658" stroke-width="1.5" filter="url(#softShadow)"/>
        
        <rect width="410" height="400" rx="22" fill="#1e293b"/>
        <text x="60" y="180" font-family="-apple-system, sans-serif" font-size="130" font-weight="900" fill="#cbd5e1">PI</text>
        <text x="60" y="320" font-family="-apple-system, sans-serif" font-size="130" font-weight="900" fill="#38bdf8">21</text>

        <rect x="20" y="20" width="80" height="26" rx="6" fill="#f43f5e"/>
        <text x="60" y="38" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff">Dribbble</text>

        <text x="24" y="445" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#ffffff">Type specimen grid project</text>
        <text x="24" y="475" font-family="-apple-system, sans-serif" font-size="14" fill="#94a3b8">Glyph</text>
      </g>
    </g>
  </g>
`;

const scene03_TopicTypography = () => renderDesktopFrame(typographyContent);

// 4. Detail Modal
const scene04_DetailModal = () => renderDesktopFrame(`
  ${typographyContent}
  
  <rect x="-120" y="-110" width="${W}" height="${H}" fill="#080612" opacity="0.85"/>

  <g transform="translate(180, 40)" filter="url(#softShadow)">
    <rect width="960" height="700" rx="28" fill="#151028" stroke="#3c2a68" stroke-width="2"/>

    <g transform="translate(890, 24)">
      <circle cx="16" cy="16" r="16" fill="#241a45"/>
      <text x="16" y="22" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="16" fill="#cbd5e1">✕</text>
    </g>

    <g transform="translate(32, 32)">
      <rect width="450" height="636" rx="20" fill="#dc2626"/>
      <text x="225" y="440" text-anchor="middle" font-family="'Georgia', serif" font-size="440" font-weight="900" fill="#fef2f2" opacity="0.95">M</text>
    </g>

    <g transform="translate(515, 60)">
      <rect x="0" y="0" width="80" height="26" rx="6" fill="#ef4444"/>
      <text x="40" y="18" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff">YouTube</text>

      <text x="0" y="70" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#ffffff">Quick kerning tip in 30</text>
      <text x="0" y="105" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#ffffff">seconds</text>

      <text x="0" y="145" font-family="-apple-system, sans-serif" font-size="15" fill="#94a3b8">Type Daily</text>
      <text x="0" y="172" font-family="-apple-system, sans-serif" font-size="13" fill="#c084fc">Typography</text>

      <g transform="translate(0, 220)">
        <rect width="400" height="200" rx="18" fill="#20153d" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="24" y="36" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#a855f7" letter-spacing="1.5">REYO'S NOTE</text>
        <text x="24" y="72" font-family="-apple-system, sans-serif" font-size="15" fill="#e2e8f0">Reyo saved this under Typography. It's</text>
        <text x="24" y="98" font-family="-apple-system, sans-serif" font-size="15" fill="#e2e8f0">a strong reference for your current work</text>
        <text x="24" y="124" font-family="-apple-system, sans-serif" font-size="15" fill="#e2e8f0">— worth revisiting when you tackle</text>
        <text x="24" y="150" font-family="-apple-system, sans-serif" font-size="15" fill="#e2e8f0">typography.</text>
      </g>

      <g transform="translate(0, 460)">
        <rect width="180" height="46" rx="23" fill="#7c3aed" filter="url(#softShadow)"/>
        <text x="90" y="28" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Open original ↗</text>
      </g>
    </g>
  </g>
`);

// 5. Matches Modal
const scene05_MatchesModal = () => renderDesktopFrame(`
  ${renderHeroBanner(true)}
  ${renderTabsAndPills()}

  <rect x="-120" y="-110" width="${W}" height="${H}" fill="#080612" opacity="0.85"/>

  <g transform="translate(100, 20)" filter="url(#softShadow)">
    <rect width="1120" height="780" rx="28" fill="#140f28" stroke="#3d2a6a" stroke-width="2"/>

    <text x="40" y="50" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#a855f7" letter-spacing="2">MATCHES</text>
    <text x="40" y="92" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="800" fill="#ffffff">7 saves for <tspan fill="#c084fc">bottle-label-concept</tspan></text>
    <text x="40" y="122" font-family="-apple-system, sans-serif" font-size="14" fill="#94a3b8">Across YouTube, Instagram and Dribbble</text>

    <g transform="translate(1040, 36)">
      <circle cx="18" cy="18" r="18" fill="#241a45"/>
      <text x="18" y="24" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="18" fill="#cbd5e1">✕</text>
    </g>

    <g transform="translate(40, 150)">
      <g transform="translate(0, 0)">
        <rect width="325" height="280" rx="16" fill="#1b1435" stroke="#312458" stroke-width="1.5"/>
        <rect width="325" height="150" rx="16" fill="#221945"/>
        <text x="162" y="95" text-anchor="middle" font-size="40">🍾</text>
        <rect x="14" y="14" width="70" height="22" rx="6" fill="#ef4444"/>
        <text x="49" y="29" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff">YouTube</text>

        <text x="16" y="182" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Die-line setup for</text>
        <text x="16" y="204" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">cylindrical bottles</text>
        <text x="16" y="235" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Studio Packet</text>
      </g>

      <g transform="translate(355, 0)">
        <rect width="325" height="280" rx="16" fill="#1b1435" stroke="#312458" stroke-width="1.5"/>
        <rect width="325" height="150" rx="16" fill="#1a2538"/>
        <text x="162" y="95" text-anchor="middle" font-size="40">📐</text>
        <rect x="14" y="14" width="70" height="22" rx="6" fill="#f43f5e"/>
        <text x="49" y="29" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Dribbble</text>

        <text x="16" y="182" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Condensed type for</text>
        <text x="16" y="204" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">tight labels</text>
        <text x="16" y="235" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Glyph</text>
      </g>

      <g transform="translate(710, 0)">
        <rect width="325" height="280" rx="16" fill="#1b1435" stroke="#312458" stroke-width="1.5"/>
        <rect width="325" height="150" rx="16" fill="#301d3a"/>
        <text x="162" y="95" text-anchor="middle" font-size="40">🔍</text>
        <rect x="14" y="14" width="70" height="22" rx="6" fill="#ef4444"/>
        <text x="49" y="29" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff">YouTube</text>

        <text x="16" y="182" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Contrast &amp; readability</text>
        <text x="16" y="204" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">on curved surfaces</text>
        <text x="16" y="235" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Frame by Frame</text>
      </g>

      <g transform="translate(0, 305)">
        <rect width="325" height="280" rx="16" fill="#1b1435" stroke="#312458" stroke-width="1.5"/>
        <rect width="325" height="150" rx="16" fill="#291a2e"/>
        <text x="162" y="95" text-anchor="middle" font-size="40">🏷️</text>
        <rect x="14" y="14" width="70" height="22" rx="6" fill="#ec4899"/>
        <text x="49" y="29" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Instagram</text>

        <text x="16" y="182" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Dieline packaging</text>
        <text x="16" y="204" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">sample cards</text>
        <text x="16" y="235" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Packaging Lab</text>
      </g>

      <g transform="translate(355, 305)">
        <rect width="325" height="280" rx="16" fill="#1b1435" stroke="#312458" stroke-width="1.5"/>
        <rect width="325" height="150" rx="16" fill="#182330"/>
        <text x="162" y="95" text-anchor="middle" font-size="40">📦</text>
        <rect x="14" y="14" width="70" height="22" rx="6" fill="#ec4899"/>
        <text x="49" y="29" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Instagram</text>

        <text x="16" y="182" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Sealed with love</text>
        <text x="16" y="204" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">packaging</text>
        <text x="16" y="235" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Crafted Box</text>
      </g>

      <g transform="translate(710, 305)">
        <rect width="325" height="280" rx="16" fill="#1b1435" stroke="#312458" stroke-width="1.5"/>
        <rect width="325" height="150" rx="16" fill="#201838"/>
        <text x="162" y="95" text-anchor="middle" font-size="40">✨</text>
        <rect x="14" y="14" width="70" height="22" rx="6" fill="#f43f5e"/>
        <text x="49" y="29" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Dribbble</text>

        <text x="16" y="182" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">Bottle mockup</text>
        <text x="16" y="204" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">3D render</text>
        <text x="16" y="235" font-family="-apple-system, sans-serif" font-size="13" fill="#94a3b8">Render Studios</text>
      </g>
    </g>
  </g>
`);

// -------------------------------------------------------------
// SEQUENCE DEFINITION
// -------------------------------------------------------------
const scenes = [
  { name: '01_home_feed', duration: 4.0, svg: scene01_HomeFeed() },
  { name: '02_graph_constellation', duration: 3.5, svg: scene02_GraphConstellation('Typography') },
  { name: '03_graph_packaging_hover', duration: 3.0, svg: scene02_GraphConstellation('Packaging') },
  { name: '04_topic_typography', duration: 4.0, svg: scene03_TopicTypography() },
  { name: '05_detail_modal', duration: 4.5, svg: scene04_DetailModal() },
  { name: '06_graph_return', duration: 3.0, svg: scene02_GraphConstellation('') },
  { name: '07_matches_modal', duration: 5.0, svg: scene05_MatchesModal() },
  { name: '08_home_loop', duration: 3.0, svg: scene01_HomeFeed() },
];

console.log('Rendering Reyo Desktop SVG frames with ffmpeg...');
scenes.forEach((scene, index) => {
  const svgPath = path.join(OUTPUT_DIR, `frame_${String(index).padStart(2, '0')}.svg`);
  const pngPath = path.join(OUTPUT_DIR, `frame_${String(index).padStart(2, '0')}.png`);
  fs.writeFileSync(svgPath, scene.svg);
  console.log(`Converting ${scene.name} to 1920x1080 PNG...`);
  execSync(`ffmpeg -y -i "${svgPath}" -vf "scale=1920:1080" "${pngPath}"`, { stdio: 'ignore' });
});

// Build concat list
let concatList = '';
scenes.forEach((scene, index) => {
  const pngPath = path.resolve(OUTPUT_DIR, `frame_${String(index).padStart(2, '0')}.png`);
  concatList += `file '${pngPath}'\n`;
  concatList += `duration ${scene.duration}\n`;
});
const lastPng = path.resolve(OUTPUT_DIR, `frame_${String(scenes.length - 1).padStart(2, '0')}.png`);
concatList += `file '${lastPng}'\n`;

const concatFile = path.join(OUTPUT_DIR, 'concat.txt');
fs.writeFileSync(concatFile, concatList);

const targetVideo = './public/organize-proof.mp4';
const reyoTarget = './public/reyo-desktop-demo.mp4';

console.log('Encoding Reyo Desktop MP4 video via ffmpeg...');
execSync(
  `ffmpeg -y -f concat -safe 0 -i "${concatFile}" -vf "fps=30,format=yuv420p" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 20 -movflags +faststart "${targetVideo}"`,
  { stdio: 'inherit' }
);

// Also copy to reyoTarget
execSync(`cp "${targetVideo}" "${reyoTarget}"`);

console.log('✅ Successfully created /public/organize-proof.mp4 and /public/reyo-desktop-demo.mp4');

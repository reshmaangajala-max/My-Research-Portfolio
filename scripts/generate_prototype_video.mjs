import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = './tmp_frames';
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public', { recursive: true });
}

// 1080 x 2400 mobile resolution
const W = 1080;
const H = 2400;

// Helper to wrap text or create SVG elements
const renderDeviceFrame = (screenContentSvg, showStatusBar = true) => `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0d14"/>
      <stop offset="50%" stop-color="#0e131f"/>
      <stop offset="100%" stop-color="#07090e"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#161e2e"/>
      <stop offset="100%" stop-color="#0f1422"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)" />

  <!-- Ambient Glow -->
  <circle cx="540" cy="700" r="550" fill="#a855f7" opacity="0.08" />
  <circle cx="200" cy="1800" r="450" fill="#6366f1" opacity="0.06" />

  ${showStatusBar ? `
  <!-- Status Bar -->
  <text x="90" y="100" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="38" font-weight="600" fill="#ffffff" opacity="0.9">12:30</text>
  <g transform="translate(860, 70)" fill="#ffffff" opacity="0.85">
    <path d="M0 32 L8 32 L8 24 L0 24 Z M12 32 L20 32 L20 18 L12 18 Z M24 32 L32 32 L32 10 L24 10 Z M36 32 L44 32 L44 2 L36 2 Z"/>
    <path d="M60 12 A16 16 0 0 1 88 12 M66 18 A10 10 0 0 1 82 18 M72 24 A4 4 0 0 1 76 24" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>
    <rect x="105" y="6" width="46" height="24" rx="6" stroke="#ffffff" stroke-width="3" fill="none"/>
    <rect x="109" y="10" width="30" height="16" rx="3" fill="#ffffff"/>
    <rect x="153" y="14" width="4" height="8" rx="2" fill="#ffffff"/>
  </g>
  ` : ''}

  <!-- Main Screen Content -->
  ${screenContentSvg}

  <!-- Android Bottom Home Indicator Pill -->
  <rect x="360" y="2340" width="360" height="10" rx="5" fill="#ffffff" opacity="0.4"/>
</svg>
`;

const screens = [
  // 1. Welcome Screen ("How I help")
  {
    name: '01_welcome',
    duration: 3.5,
    svg: renderDeviceFrame(`
      <g transform="translate(100, 240)">
        <text x="440" y="80" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="64" font-weight="700" fill="#ffffff" letter-spacing="-1">How I help</text>
        
        <!-- Card 1: Look -->
        <g transform="translate(0, 180)">
          <rect width="880" height="230" rx="36" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2" filter="url(#shadow)"/>
          <circle cx="80" cy="115" r="36" fill="#222b40"/>
          <text x="80" y="127" text-anchor="middle" font-size="34">👁️</text>
          <text x="148" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="700" fill="#ffffff">I look</text>
          <text x="148" y="152" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="29" font-weight="400" fill="#94a3b8">Find important things in the places you choose.</text>
        </g>

        <!-- Card 2: Understand -->
        <g transform="translate(0, 450)">
          <rect width="880" height="230" rx="36" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2" filter="url(#shadow)"/>
          <circle cx="80" cy="115" r="36" fill="#222b40"/>
          <text x="80" y="127" text-anchor="middle" font-size="34">💡</text>
          <text x="148" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="700" fill="#ffffff">I understand</text>
          <text x="148" y="152" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="29" font-weight="400" fill="#94a3b8">Figure out what matters and what needs your attention.</text>
        </g>

        <!-- Card 3: Step in -->
        <g transform="translate(0, 720)">
          <rect width="880" height="230" rx="36" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2" filter="url(#shadow)"/>
          <circle cx="80" cy="115" r="36" fill="#222b40"/>
          <text x="80" y="127" text-anchor="middle" font-size="34">⚡</text>
          <text x="148" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="700" fill="#ffffff">I step in</text>
          <text x="148" y="152" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="29" font-weight="400" fill="#94a3b8">Help you take care of it when the time comes.</text>
        </g>

        <!-- Privacy note -->
        <g transform="translate(440, 1260)">
          <text x="0" y="0" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="28" font-weight="600" fill="#94a3b8">🔒 Don't worry about your data.</text>
          <text x="0" y="44" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="26" font-weight="400" fill="#64748b">You choose what I can access.</text>
          <text x="0" y="84" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="26" font-weight="400" fill="#64748b">You can change it anytime.</text>
        </g>

        <!-- Button -->
        <g transform="translate(40, 1680)">
          <rect width="800" height="130" rx="65" fill="#a78bfa" filter="url(#shadow)"/>
          <text x="400" y="80" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="700" fill="#0f172a">That sounds good →</text>
        </g>
      </g>
    `)
  },

  // 2. Storage Choice Screen ("How would you like me to keep your information?")
  {
    name: '02_storage',
    duration: 3,
    svg: renderDeviceFrame(`
      <g transform="translate(100, 200)">
        <rect x="340" y="0" width="200" height="48" rx="24" fill="#a78bfa" fill-opacity="0.15" stroke="#a78bfa" stroke-opacity="0.4" stroke-width="2"/>
        <text x="440" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#c084fc" letter-spacing="2">ONE LAST THING</text>

        <text x="440" y="140" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="52" font-weight="700" fill="#ffffff" letter-spacing="-1">How would you like me to</text>
        <text x="440" y="205" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="52" font-weight="700" fill="#ffffff" letter-spacing="-1">keep your information?</text>

        <!-- Option 1: On-device (Selected) -->
        <g transform="translate(0, 310)">
          <rect width="880" height="280" rx="36" fill="url(#cardGrad)" stroke="#a78bfa" stroke-width="3" filter="url(#shadow)"/>
          <circle cx="80" cy="90" r="32" fill="#2a2046"/>
          <text x="80" y="100" text-anchor="middle" font-size="30">📱</text>
          <text x="144" y="96" font-family="-apple-system, sans-serif" font-size="38" font-weight="700" fill="#ffffff">On-device</text>
          
          <circle cx="800" cy="90" r="22" fill="#a78bfa"/>
          <circle cx="800" cy="90" r="8" fill="#0f172a"/>

          <text x="144" y="170" font-family="-apple-system, sans-serif" font-size="28" fill="#94a3b8">I work on this phone, your information stays</text>
          <text x="144" y="210" font-family="-apple-system, sans-serif" font-size="28" fill="#94a3b8">on this device.</text>
          <text x="144" y="250" font-family="-apple-system, sans-serif" font-size="24" fill="#64748b">No backup if this phone is lost.</text>
        </g>

        <!-- Option 2: Connect account -->
        <g transform="translate(0, 640)">
          <rect width="880" height="260" rx="36" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2"/>
          <circle cx="80" cy="85" r="32" fill="#1e2738"/>
          <text x="80" y="95" text-anchor="middle" font-size="30">☁️</text>
          <text x="144" y="92" font-family="-apple-system, sans-serif" font-size="38" font-weight="700" fill="#cbd5e1">Connect your account</text>

          <circle cx="800" cy="85" r="22" fill="none" stroke="#475569" stroke-width="3"/>

          <text x="144" y="160" font-family="-apple-system, sans-serif" font-size="28" fill="#64748b">I'll work with your connected services and sync</text>
          <text x="144" y="200" font-family="-apple-system, sans-serif" font-size="28" fill="#64748b">across all your devices safely.</text>
        </g>

        <!-- Modal Bottom Sheet -->
        <g transform="translate(0, 1020)">
          <rect width="880" height="740" rx="44" fill="#131929" stroke="#334155" stroke-width="2" filter="url(#shadow)"/>
          <text x="440" y="100" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="44" font-weight="700" fill="#ffffff">Things to remember</text>
          
          <g transform="translate(80, 170)" font-family="-apple-system, sans-serif" font-size="28" fill="#cbd5e1">
            <circle cx="10" cy="18" r="6" fill="#a78bfa"/>
            <text x="36" y="26">You can back up and restore your data.</text>

            <circle cx="10" cy="98" r="6" fill="#a78bfa"/>
            <text x="36" y="106">You can access it from supported devices.</text>

            <circle cx="10" cy="178" r="6" fill="#a78bfa"/>
            <text x="36" y="186">Connected info is processed securely on device.</text>
          </g>

          <text x="440" y="470" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="24" fill="#64748b">You can change this anytime in Settings.</text>

          <!-- Continue button -->
          <g transform="translate(60, 540)">
            <rect width="760" height="120" rx="60" fill="#a78bfa"/>
            <text x="380" y="74" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="36" font-weight="700" fill="#0f172a">Continue →</text>
          </g>
        </g>
      </g>
    `)
  },

  // 3. Source Selection Screen ("What should I access first?")
  {
    name: '03_sources',
    duration: 3.5,
    svg: renderDeviceFrame(`
      <g transform="translate(100, 200)">
        <rect x="320" y="0" width="240" height="48" rx="24" fill="#a78bfa" fill-opacity="0.15" stroke="#a78bfa" stroke-opacity="0.4" stroke-width="2"/>
        <text x="440" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#c084fc" letter-spacing="2">LET'S MOVE FORWARD</text>

        <text x="440" y="140" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="52" font-weight="700" fill="#ffffff" letter-spacing="-1">What should I access first?</text>

        <!-- Toggle Item 1 -->
        <g transform="translate(0, 230)">
          <rect width="880" height="180" rx="32" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2"/>
          <text x="50" y="76" font-size="34">📁</text>
          <text x="120" y="74" font-family="-apple-system, sans-serif" font-size="34" font-weight="700" fill="#ffffff">Files &amp; PDF</text>
          <text x="120" y="124" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">I'll look for deadlines, bills and policies in your files.</text>
          <!-- Switch ON -->
          <rect x="740" y="55" width="90" height="52" rx="26" fill="#a78bfa"/>
          <circle cx="798" cy="81" r="21" fill="#ffffff"/>
        </g>

        <!-- Toggle Item 2 -->
        <g transform="translate(0, 440)">
          <rect width="880" height="180" rx="32" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2"/>
          <text x="50" y="76" font-size="34">🖼️</text>
          <text x="120" y="74" font-family="-apple-system, sans-serif" font-size="34" font-weight="700" fill="#ffffff">Photos</text>
          <text x="120" y="124" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">I'll look for dates and details in documents and receipts.</text>
          <!-- Switch ON -->
          <rect x="740" y="55" width="90" height="52" rx="26" fill="#a78bfa"/>
          <circle cx="798" cy="81" r="21" fill="#ffffff"/>
        </g>

        <!-- Toggle Item 3 -->
        <g transform="translate(0, 650)">
          <rect width="880" height="180" rx="32" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2"/>
          <text x="50" y="76" font-size="34">✉️</text>
          <text x="120" y="74" font-family="-apple-system, sans-serif" font-size="34" font-weight="700" fill="#ffffff">Email</text>
          <text x="120" y="124" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">I'll find bills, renewals and appointments in your inbox.</text>
          <!-- Switch ON -->
          <rect x="740" y="55" width="90" height="52" rx="26" fill="#a78bfa"/>
          <circle cx="798" cy="81" r="21" fill="#ffffff"/>
        </g>

        <!-- Toggle Item 4 -->
        <g transform="translate(0, 860)">
          <rect width="880" height="180" rx="32" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2"/>
          <text x="50" y="76" font-size="34">📅</text>
          <text x="120" y="74" font-family="-apple-system, sans-serif" font-size="34" font-weight="700" fill="#ffffff">Calendar</text>
          <text x="120" y="124" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">I'll understand what's coming up and resolve conflicts.</text>
          <!-- Switch ON -->
          <rect x="740" y="55" width="90" height="52" rx="26" fill="#a78bfa"/>
          <circle cx="798" cy="81" r="21" fill="#ffffff"/>
        </g>

        <!-- Add more sources button -->
        <g transform="translate(240, 1100)">
          <rect width="400" height="80" rx="40" fill="#1e2738" stroke="#3b4760" stroke-width="2"/>
          <text x="200" y="50" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="26" font-weight="600" fill="#c084fc">+ Add more sources</text>
        </g>

        <!-- Continue button -->
        <g transform="translate(40, 1720)">
          <rect width="800" height="120" rx="60" fill="#a78bfa" filter="url(#shadow)"/>
          <text x="400" y="74" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="36" font-weight="700" fill="#0f172a">Continue →</text>
        </g>
      </g>
    `)
  },

  // 4. Ingestion / Scanning screen
  {
    name: '04_scanning',
    duration: 3,
    svg: renderDeviceFrame(`
      <g transform="translate(100, 360)">
        <text x="440" y="60" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="48" font-weight="700" fill="#ffffff">Okay, I'm digging into it.</text>
        <text x="440" y="120" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="32" font-weight="400" fill="#94a3b8">Give me a minute.</text>

        <!-- Center Scanning Icon -->
        <g transform="translate(340, 240)">
          <circle cx="100" cy="100" r="100" fill="#a78bfa" fill-opacity="0.1" stroke="#a78bfa" stroke-width="3"/>
          <circle cx="100" cy="100" r="75" fill="#a78bfa" fill-opacity="0.2"/>
          <text x="100" y="118" text-anchor="middle" font-size="64">✉️</text>
        </g>

        <text x="440" y="560" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="42" font-weight="700" fill="#ffffff">Looking through your email</text>

        <!-- Checklist -->
        <g transform="translate(140, 660)" font-family="-apple-system, sans-serif" font-size="30" fill="#cbd5e1">
          <g transform="translate(0, 0)">
            <circle cx="20" cy="20" r="16" fill="#10b981"/>
            <text x="20" y="26" text-anchor="middle" font-size="20" fill="#ffffff">✓</text>
            <text x="60" y="30">Bills and payments</text>
          </g>

          <g transform="translate(0, 80)">
            <circle cx="20" cy="20" r="16" fill="#10b981"/>
            <text x="20" y="26" text-anchor="middle" font-size="20" fill="#ffffff">✓</text>
            <text x="60" y="30">Renewals and important dates</text>
          </g>

          <g transform="translate(0, 160)">
            <circle cx="20" cy="20" r="16" fill="#10b981"/>
            <text x="20" y="26" text-anchor="middle" font-size="20" fill="#ffffff">✓</text>
            <text x="60" y="30">Appointments and instructions</text>
          </g>
        </g>

        <!-- Speech bubble -->
        <g transform="translate(60, 1020)">
          <rect width="760" height="140" rx="28" fill="#171e2e" stroke="#2b344d" stroke-width="2"/>
          <text x="380" y="60" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">&#8220;Your inbox has quite the collection. Let me</text>
          <text x="380" y="100" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">find the important bits.&#8221;</text>
        </g>
      </g>
    `)
  },

  // 5. Main Home Dashboard ("Done. I've got the important stuff covered.")
  {
    name: '05_dashboard',
    duration: 4,
    svg: renderDeviceFrame(`
      <g transform="translate(80, 160)">
        <!-- Top App Bar -->
        <g transform="translate(0, 0)">
          <text x="0" y="50" font-family="-apple-system, sans-serif" font-size="44" font-weight="700" fill="#ffffff">Done. I've got the</text>
          <text x="0" y="105" font-family="-apple-system, sans-serif" font-size="44" font-weight="700" fill="#ffffff">important stuff covered.</text>
          
          <g transform="translate(840, 20)">
            <circle cx="40" cy="40" r="40" fill="#1e2738"/>
            <text x="40" y="50" text-anchor="middle" font-size="30">🔍</text>
          </g>
        </g>

        <!-- Progress chip -->
        <g transform="translate(0, 140)">
          <rect width="480" height="52" rx="26" fill="#1a2333" stroke="#2b3850" stroke-width="1.5"/>
          <circle cx="30" cy="26" r="8" fill="#a78bfa"/>
          <text x="56" y="34" font-family="-apple-system, sans-serif" font-size="22" font-weight="500" fill="#94a3b8">50% done · still processing the rest</text>
        </g>

        <!-- Section 1 Header -->
        <g transform="translate(0, 250)">
          <circle cx="12" cy="12" r="10" fill="#f43f5e"/>
          <text x="36" y="20" font-family="-apple-system, sans-serif" font-size="28" font-weight="600" fill="#f43f5e">Needs your attention right now</text>
        </g>

        <!-- Attention Card 1: Health insurance -->
        <g transform="translate(0, 310)">
          <rect width="920" height="340" rx="36" fill="url(#cardGrad)" stroke="#3b2b48" stroke-width="2.5" filter="url(#shadow)"/>
          
          <text x="50" y="80" font-family="-apple-system, sans-serif" font-size="36" font-weight="700" fill="#ffffff">Health insurance expires</text>
          
          <g transform="translate(50, 120)">
            <text x="0" y="44" font-family="-apple-system, sans-serif" font-size="44" font-weight="800" fill="#ffffff">₹12,450</text>
            <rect x="220" y="10" width="160" height="42" rx="21" fill="#ef4444" fill-opacity="0.2"/>
            <text x="300" y="38" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="22" font-weight="700" fill="#f87171">4 days left</text>
          </g>

          <g transform="translate(50, 230)">
            <rect width="180" height="48" rx="24" fill="#1e2738"/>
            <text x="90" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="22" fill="#94a3b8">Star Health · Email</text>
          </g>

          <!-- Renew now CTA button -->
          <g transform="translate(620, 205)">
            <rect width="250" height="85" rx="42.5" fill="#a78bfa"/>
            <text x="125" y="53" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">Renew now →</text>
          </g>
        </g>

        <!-- Section 2: Coming up soon -->
        <g transform="translate(0, 710)">
          <text x="0" y="30" font-family="-apple-system, sans-serif" font-size="28" font-weight="600" fill="#ffffff">Coming up soon</text>

          <g transform="translate(0, 60)">
            <rect width="445" height="240" rx="30" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2"/>
            <text x="40" y="60" font-size="34">🛂</text>
            <rect x="300" y="35" width="105" height="38" rx="19" fill="#eab308" fill-opacity="0.2"/>
            <text x="352" y="60" text-anchor="middle" font-size="18" font-weight="700" fill="#fde047">58 days</text>
            <text x="40" y="130" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Passport renewal</text>
            <text x="40" y="180" font-family="-apple-system, sans-serif" font-size="22" fill="#64748b">Photos · Insurance</text>
          </g>

          <g transform="translate(475, 60)">
            <rect width="445" height="240" rx="30" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2"/>
            <text x="40" y="60" font-size="34">🔧</text>
            <rect x="300" y="35" width="105" height="38" rx="19" fill="#eab308" fill-opacity="0.2"/>
            <text x="352" y="60" text-anchor="middle" font-size="18" font-weight="700" fill="#fde047">21 days</text>
            <text x="40" y="130" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Vehicle service</text>
            <text x="40" y="180" font-family="-apple-system, sans-serif" font-size="22" fill="#64748b">Calendar · Vehicle</text>
          </g>
        </g>

        <!-- Section 3: Timeline Snapshot -->
        <g transform="translate(0, 1080)">
          <text x="0" y="30" font-family="-apple-system, sans-serif" font-size="28" font-weight="600" fill="#ffffff">Your timeline</text>
          
          <g transform="translate(0, 60)">
            <rect width="920" height="150" rx="28" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="65" font-family="-apple-system, sans-serif" font-size="24" font-weight="700" fill="#a78bfa">10 Aug</text>
            <text x="40" y="105" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">9:00 AM</text>

            <text x="180" y="65" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Health insurance expires</text>
            <text x="180" y="105" font-family="-apple-system, sans-serif" font-size="22" fill="#f43f5e">Needs attention</text>

            <text x="880" y="85" text-anchor="end" font-family="-apple-system, sans-serif" font-size="32" font-weight="700" fill="#ffffff">₹12,450</text>
          </g>

          <g transform="translate(0, 230)">
            <rect width="920" height="150" rx="28" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="65" font-family="-apple-system, sans-serif" font-size="24" font-weight="700" fill="#a78bfa">17 Aug</text>
            <text x="40" y="105" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">9:00 AM</text>

            <text x="180" y="65" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Car insurance renewal</text>
            <text x="180" y="105" font-family="-apple-system, sans-serif" font-size="22" fill="#38bdf8">ICICI Lombard</text>

            <text x="880" y="85" text-anchor="end" font-family="-apple-system, sans-serif" font-size="32" font-weight="700" fill="#ffffff">₹8,920</text>
          </g>
        </g>

        <!-- Bottom Navigation Bar -->
        <g transform="translate(-80, 1950)">
          <rect width="1080" height="200" fill="#0c101a" stroke="#1f293d" stroke-width="2"/>
          
          <!-- Tab 1: Home (Active) -->
          <g transform="translate(135, 30)">
            <circle cx="40" cy="40" r="36" fill="#a78bfa" fill-opacity="0.2"/>
            <text x="40" y="48" text-anchor="middle" font-size="32">🏠</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#a78bfa">Home</text>
          </g>

          <!-- Tab 2: Timeline -->
          <g transform="translate(365, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">📅</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Timeline</text>
          </g>

          <!-- Plus Button -->
          <g transform="translate(490, 15)">
            <circle cx="50" cy="50" r="50" fill="#a78bfa" filter="url(#shadow)"/>
            <text x="50" y="64" text-anchor="middle" font-size="44" font-weight="300" fill="#0f172a">+</text>
          </g>

          <!-- Tab 3: Sources -->
          <g transform="translate(685, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">📑</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Sources</text>
          </g>

          <!-- Tab 4: Activity -->
          <g transform="translate(875, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">⚡</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Activity</text>
          </g>
        </g>
      </g>
    `)
  },

  // 6. Deep Detail Screen: Star Health
  {
    name: '06_detail_view',
    duration: 3.5,
    svg: renderDeviceFrame(`
      <g transform="translate(80, 140)">
        <!-- Top Nav -->
        <g transform="translate(0, 0)">
          <circle cx="40" cy="40" r="36" fill="#1a2333"/>
          <text x="40" y="48" text-anchor="middle" font-size="28" fill="#ffffff">←</text>
          <text x="460" y="50" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="34" font-weight="700" fill="#ffffff">Health insurance expires</text>
        </g>

        <!-- Category tag -->
        <g transform="translate(0, 110)">
          <text x="460" y="30" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="22" font-weight="700" fill="#c084fc" letter-spacing="1">INSURANCE · STAR HEALTH PREMIER CARE</text>
        </g>

        <!-- Amount Box -->
        <g transform="translate(0, 170)">
          <rect width="920" height="200" rx="32" fill="url(#cardGrad)" stroke="#2b344d" stroke-width="2"/>
          <text x="60" y="60" font-family="-apple-system, sans-serif" font-size="22" fill="#94a3b8">Due Date</text>
          <text x="60" y="110" font-family="-apple-system, sans-serif" font-size="34" font-weight="700" fill="#ffffff">10 August 2026</text>

          <text x="560" y="60" font-family="-apple-system, sans-serif" font-size="22" fill="#94a3b8">Amount</text>
          <text x="560" y="110" font-family="-apple-system, sans-serif" font-size="38" font-weight="800" fill="#ffffff">₹12,450</text>
        </g>

        <!-- AI Insight Box -->
        <g transform="translate(0, 410)">
          <rect width="920" height="340" rx="32" fill="#141a29" stroke="#a78bfa" stroke-opacity="0.4" stroke-width="2"/>
          
          <g transform="translate(40, 40)">
            <circle cx="24" cy="24" r="24" fill="#a78bfa" fill-opacity="0.2"/>
            <text x="24" y="32" text-anchor="middle" font-size="24">✨</text>
            <text x="64" y="32" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Tara's understanding</text>
          </g>

          <text x="40" y="120" font-family="-apple-system, sans-serif" font-size="28" fill="#cbd5e1">&#8220;Your health insurance policy appears to</text>
          <text x="40" y="165" font-family="-apple-system, sans-serif" font-size="28" fill="#cbd5e1">expire on 10 August. I found the renewal</text>
          <text x="40" y="210" font-family="-apple-system, sans-serif" font-size="28" fill="#cbd5e1">information in your Star Health email.&#8221;</text>

          <g transform="translate(40, 260)">
            <rect width="220" height="42" rx="21" fill="#10b981" fill-opacity="0.15"/>
            <text x="110" y="28" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#34d399">High confidence</text>
          </g>
        </g>

        <!-- Source Verification Box -->
        <g transform="translate(0, 790)">
          <rect width="920" height="180" rx="28" fill="#111624" stroke="#222c3f" stroke-width="1.5"/>
          <text x="40" y="55" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">SOURCE</text>
          <text x="40" y="95" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Star Health Premier Care Notice</text>
          <text x="40" y="135" font-family="-apple-system, sans-serif" font-size="22" fill="#94a3b8">Email · Star Health Renewal Notice</text>

          <g transform="translate(680, 50)">
            <rect width="200" height="80" rx="24" fill="#1e2738" stroke="#3b4760" stroke-width="1.5"/>
            <text x="100" y="48" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="22" font-weight="600" fill="#c084fc">View original</text>
          </g>
        </g>

        <!-- Bottom Action CTA -->
        <g transform="translate(0, 1650)">
          <rect width="920" height="130" rx="65" fill="#a78bfa" filter="url(#shadow)"/>
          <text x="460" y="78" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="38" font-weight="700" fill="#0f172a">Renew now →</text>
        </g>
      </g>
    `)
  },

  // 7. Timeline Full View Tab
  {
    name: '07_timeline',
    duration: 3.5,
    svg: renderDeviceFrame(`
      <g transform="translate(80, 150)">
        <text x="0" y="50" font-family="-apple-system, sans-serif" font-size="44" font-weight="700" fill="#ffffff">Timeline</text>
        <text x="0" y="95" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">Chronological view of all upcoming obligations</text>

        <!-- Chips -->
        <g transform="translate(0, 140)">
          <rect width="90" height="50" rx="25" fill="#a78bfa"/>
          <text x="45" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="22" font-weight="700" fill="#0f172a">All</text>

          <g transform="translate(110, 0)">
            <rect width="220" height="50" rx="25" fill="#171e2e" stroke="#2b344d" stroke-width="1.5"/>
            <text x="110" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#94a3b8">Bills &amp; Payments</text>
          </g>

          <g transform="translate(350, 0)">
            <rect width="160" height="50" rx="25" fill="#171e2e" stroke="#2b344d" stroke-width="1.5"/>
            <text x="80" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#94a3b8">Insurance</text>
          </g>

          <g transform="translate(530, 0)">
            <rect width="140" height="50" rx="25" fill="#171e2e" stroke="#2b344d" stroke-width="1.5"/>
            <text x="70" y="32" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#94a3b8">Vehicle</text>
          </g>
        </g>

        <!-- Month 1 -->
        <g transform="translate(0, 240)">
          <text x="0" y="30" font-family="-apple-system, sans-serif" font-size="24" font-weight="700" fill="#c084fc" letter-spacing="1">AUGUST 2026</text>

          <!-- Item 1 -->
          <g transform="translate(0, 50)">
            <rect width="920" height="130" rx="24" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <circle cx="30" cy="65" r="8" fill="#f43f5e"/>
            <text x="60" y="55" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#ffffff">Health insurance expires</text>
            <text x="60" y="90" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">10 August 2026 · Insurance</text>
            <text x="880" y="75" text-anchor="end" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">₹12,450</text>
          </g>

          <!-- Item 2 -->
          <g transform="translate(0, 200)">
            <rect width="920" height="130" rx="24" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <circle cx="30" cy="65" r="8" fill="#38bdf8"/>
            <text x="60" y="55" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#ffffff">Car insurance renewal</text>
            <text x="60" y="90" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">17 August 2026 · Vehicle</text>
            <text x="880" y="75" text-anchor="end" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">₹8,920</text>
          </g>

          <!-- Item 3 -->
          <g transform="translate(0, 350)">
            <rect width="920" height="130" rx="24" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <circle cx="30" cy="65" r="8" fill="#a78bfa"/>
            <text x="60" y="55" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#ffffff">Doctor appointment</text>
            <text x="60" y="90" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">18 Aug, 4:30 PM · Fortis Clinic</text>
            <text x="880" y="75" text-anchor="end" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#a78bfa">Consultation</text>
          </g>

          <!-- Item 4 -->
          <g transform="translate(0, 500)">
            <rect width="920" height="130" rx="24" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <circle cx="30" cy="65" r="8" fill="#f59e0b"/>
            <text x="60" y="55" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#ffffff">Adobe subscription</text>
            <text x="60" y="90" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">1 Sep 2026 · Subscriptions</text>
            <text x="880" y="75" text-anchor="end" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">₹1,675</text>
          </g>
        </g>

        <!-- Bottom Navigation Bar -->
        <g transform="translate(-80, 1950)">
          <rect width="1080" height="200" fill="#0c101a" stroke="#1f293d" stroke-width="2"/>
          <g transform="translate(135, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">🏠</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Home</text>
          </g>
          <g transform="translate(365, 30)">
            <circle cx="40" cy="40" r="36" fill="#a78bfa" fill-opacity="0.2"/>
            <text x="40" y="48" text-anchor="middle" font-size="32">📅</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#a78bfa">Timeline</text>
          </g>
          <g transform="translate(490, 15)">
            <circle cx="50" cy="50" r="50" fill="#a78bfa" filter="url(#shadow)"/>
            <text x="50" y="64" text-anchor="middle" font-size="44" font-weight="300" fill="#0f172a">+</text>
          </g>
          <g transform="translate(685, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">📑</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Sources</text>
          </g>
          <g transform="translate(875, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">⚡</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Activity</text>
          </g>
        </g>
      </g>
    `)
  },

  // 8. Sources Tab
  {
    name: '08_sources_tab',
    duration: 3.5,
    svg: renderDeviceFrame(`
      <g transform="translate(80, 150)">
        <text x="0" y="50" font-family="-apple-system, sans-serif" font-size="44" font-weight="700" fill="#ffffff">Sources</text>
        <text x="0" y="95" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">Here's what I've been looking through</text>

        <!-- Source cards -->
        <g transform="translate(0, 160)">
          <!-- Source 1 -->
          <g transform="translate(0, 0)">
            <rect width="920" height="150" rx="28" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="65" font-size="32">✉️</text>
            <text x="100" y="60" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Star Health policy</text>
            <text x="100" y="100" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Email · Processed today · High Confidence</text>
            <rect x="740" y="45" width="140" height="42" rx="21" fill="#10b981" fill-opacity="0.15"/>
            <text x="810" y="73" text-anchor="middle" font-size="20" font-weight="700" fill="#34d399">1 item</text>
          </g>

          <!-- Source 2 -->
          <g transform="translate(0, 180)">
            <rect width="920" height="150" rx="28" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="65" font-size="32">✉️</text>
            <text x="100" y="60" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">ICICI Lombard motor policy</text>
            <text x="100" y="100" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Email · Processed today · High Confidence</text>
            <rect x="740" y="45" width="140" height="42" rx="21" fill="#10b981" fill-opacity="0.15"/>
            <text x="810" y="73" text-anchor="middle" font-size="20" font-weight="700" fill="#34d399">1 item</text>
          </g>

          <!-- Source 3 -->
          <g transform="translate(0, 360)">
            <rect width="920" height="150" rx="28" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="65" font-size="32">📁</text>
            <text x="100" y="60" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Adobe Creative Cloud Invoice</text>
            <text x="100" y="100" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Files &amp; PDF · Processed today</text>
            <rect x="740" y="45" width="140" height="42" rx="21" fill="#10b981" fill-opacity="0.15"/>
            <text x="810" y="73" text-anchor="middle" font-size="20" font-weight="700" fill="#34d399">1 item</text>
          </g>

          <!-- Source 4 -->
          <g transform="translate(0, 540)">
            <rect width="920" height="150" rx="28" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="65" font-size="32">🖼️</text>
            <text x="100" y="60" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Passport bio page</text>
            <text x="100" y="100" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Photos · On-device OCR parsed</text>
            <rect x="740" y="45" width="140" height="42" rx="21" fill="#10b981" fill-opacity="0.15"/>
            <text x="810" y="73" text-anchor="middle" font-size="20" font-weight="700" fill="#34d399">1 item</text>
          </g>
        </g>

        <!-- Bottom Navigation Bar -->
        <g transform="translate(-80, 1950)">
          <rect width="1080" height="200" fill="#0c101a" stroke="#1f293d" stroke-width="2"/>
          <g transform="translate(135, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">🏠</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Home</text>
          </g>
          <g transform="translate(365, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">📅</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Timeline</text>
          </g>
          <g transform="translate(490, 15)">
            <circle cx="50" cy="50" r="50" fill="#a78bfa" filter="url(#shadow)"/>
            <text x="50" y="64" text-anchor="middle" font-size="44" font-weight="300" fill="#0f172a">+</text>
          </g>
          <g transform="translate(685, 30)">
            <circle cx="40" cy="40" r="36" fill="#a78bfa" fill-opacity="0.2"/>
            <text x="40" y="48" text-anchor="middle" font-size="32">📑</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#a78bfa">Sources</text>
          </g>
          <g transform="translate(875, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">⚡</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Activity</text>
          </g>
        </g>
      </g>
    `)
  },

  // 9. Activity Tab ("Here's what I've been up to")
  {
    name: '09_activity_tab',
    duration: 3.5,
    svg: renderDeviceFrame(`
      <g transform="translate(80, 150)">
        <text x="0" y="50" font-family="-apple-system, sans-serif" font-size="44" font-weight="700" fill="#ffffff">Activity</text>
        <text x="0" y="95" font-family="-apple-system, sans-serif" font-size="24" fill="#94a3b8">Here's what I've been up to</text>

        <!-- Activity items -->
        <g transform="translate(0, 160)">
          <text x="0" y="30" font-family="-apple-system, sans-serif" font-size="22" font-weight="700" fill="#c084fc" letter-spacing="1">TODAY</text>

          <!-- Act 1 -->
          <g transform="translate(0, 60)">
            <rect width="920" height="140" rx="24" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="50" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">11:02 AM</text>
            <text x="180" y="50" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#ffffff">You marked Adobe subscription as paid</text>
            <text x="180" y="90" font-family="-apple-system, sans-serif" font-size="20" fill="#a78bfa">View linked obligation →</text>
          </g>

          <!-- Act 2 -->
          <g transform="translate(0, 220)">
            <rect width="920" height="140" rx="24" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="50" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">10:55 AM</text>
            <text x="180" y="50" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#ffffff">You confirmed Health insurance renewal</text>
            <text x="180" y="90" font-family="-apple-system, sans-serif" font-size="20" fill="#a78bfa">View linked obligation →</text>
          </g>

          <!-- Act 3 -->
          <g transform="translate(0, 380)">
            <rect width="920" height="190" rx="24" fill="#141a29" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="2"/>
            <text x="40" y="50" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">10:49 AM</text>
            <text x="180" y="50" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#ffffff">Found something I'm not fully sure about</text>
            <text x="180" y="90" font-family="-apple-system, sans-serif" font-size="20" fill="#94a3b8">Possible vehicle document · Source PDF</text>
            <rect x="740" y="100" width="140" height="50" rx="25" fill="#f59e0b"/>
            <text x="810" y="132" text-anchor="middle" font-size="22" font-weight="700" fill="#0f172a">Review →</text>
          </g>

          <!-- Act 4 -->
          <g transform="translate(0, 590)">
            <rect width="920" height="140" rx="24" fill="#141a29" stroke="#222c3f" stroke-width="1.5"/>
            <text x="40" y="50" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">10:47 AM</text>
            <text x="180" y="50" font-family="-apple-system, sans-serif" font-size="26" font-weight="700" fill="#ffffff">Found an Adobe subscription</text>
            <text x="180" y="90" font-family="-apple-system, sans-serif" font-size="20" fill="#34d399">High confidence</text>
          </g>
        </g>

        <!-- Bottom Navigation Bar -->
        <g transform="translate(-80, 1950)">
          <rect width="1080" height="200" fill="#0c101a" stroke="#1f293d" stroke-width="2"/>
          <g transform="translate(135, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">🏠</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Home</text>
          </g>
          <g transform="translate(365, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">📅</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Timeline</text>
          </g>
          <g transform="translate(490, 15)">
            <circle cx="50" cy="50" r="50" fill="#a78bfa" filter="url(#shadow)"/>
            <text x="50" y="64" text-anchor="middle" font-size="44" font-weight="300" fill="#0f172a">+</text>
          </g>
          <g transform="translate(685, 30)">
            <text x="40" y="48" text-anchor="middle" font-size="32">📑</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" fill="#64748b">Sources</text>
          </g>
          <g transform="translate(875, 30)">
            <circle cx="40" cy="40" r="36" fill="#a78bfa" fill-opacity="0.2"/>
            <text x="40" y="48" text-anchor="middle" font-size="32">⚡</text>
            <text x="40" y="95" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#a78bfa">Activity</text>
          </g>
        </g>
      </g>
    `)
  }
];

console.log('Rendering SVG frames with ffmpeg...');
screens.forEach((screen, index) => {
  const svgPath = path.join(OUTPUT_DIR, `screen_${String(index).padStart(2, '0')}.svg`);
  const pngPath = path.join(OUTPUT_DIR, `screen_${String(index).padStart(2, '0')}.png`);
  fs.writeFileSync(svgPath, screen.svg);
  console.log(`Converting ${screen.name} to PNG...`);
  execSync(`ffmpeg -y -i "${svgPath}" -vf "scale=1080:2400" "${pngPath}"`, { stdio: 'ignore' });
});

// Build an ffmpeg concat script
let concatList = '';
screens.forEach((screen, index) => {
  const pngPath = path.resolve(OUTPUT_DIR, `screen_${String(index).padStart(2, '0')}.png`);
  concatList += `file '${pngPath}'\n`;
  concatList += `duration ${screen.duration}\n`;
});
// repeat last frame
const lastPngPath = path.resolve(OUTPUT_DIR, `screen_${String(screens.length - 1).padStart(2, '0')}.png`);
concatList += `file '${lastPngPath}'\n`;

const concatFile = path.join(OUTPUT_DIR, 'concat.txt');
fs.writeFileSync(concatFile, concatList);

const targetVideo = './public/tara-prototype.mp4';
console.log('Encoding MP4 video via ffmpeg...');
execSync(
  `ffmpeg -y -f concat -safe 0 -i "${concatFile}" -vf "fps=30,format=yuv420p" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 20 -movflags +faststart "${targetVideo}"`,
  { stdio: 'inherit' }
);

// Create a poster frame image in public
const posterImage = './public/tara-poster.png';
execSync(`cp "${path.join(OUTPUT_DIR, 'screen_00.png')}" "${posterImage}"`);

console.log('✅ Successfully created /public/tara-prototype.mp4 and /public/tara-poster.png');

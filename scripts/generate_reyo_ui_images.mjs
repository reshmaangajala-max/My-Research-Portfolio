import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = './public';
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// -------------------------------------------------------------
// 1. REYO YT SCREEN (Process Section) - Exact YouTube page with "Save to Reyo" button
// Dimensions: 1920 x 1080
// -------------------------------------------------------------
const renderReyoYtSvg = () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ytDarkBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#08070d"/>
      <stop offset="100%" stop-color="#050408"/>
    </linearGradient>

    <linearGradient id="videoPlayerBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0e0a1f"/>
      <stop offset="50%" stop-color="#090616"/>
      <stop offset="100%" stop-color="#05030d"/>
    </linearGradient>

    <linearGradient id="reyoBtnGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2c1654"/>
      <stop offset="100%" stop-color="#1f103d"/>
    </linearGradient>

    <linearGradient id="purpleGlow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>
  </defs>

  <!-- Background Base Canvas -->
  <rect width="1920" height="1080" fill="url(#ytDarkBg)"/>

  <!-- ========================================================= -->
  <!-- TOP YOUTUBE APP HEADER -->
  <!-- ========================================================= -->
  <g transform="translate(48, 28)">
    <!-- Hamburger Menu (3 lines) -->
    <g transform="translate(0, 8)">
      <line x1="0" y1="0" x2="20" y2="0" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round"/>
      <line x1="0" y1="7" x2="20" y2="7" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round"/>
      <line x1="0" y1="14" x2="20" y2="14" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round"/>
    </g>

    <!-- YouTube Logo -->
    <g transform="translate(48, 2)">
      <!-- Red Play Pill -->
      <rect width="32" height="22" rx="6" fill="#ff0000"/>
      <polygon points="13,6 22,11 13,16" fill="#ffffff"/>
      <!-- YouTube Wordmark -->
      <text x="38" y="17" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#ffffff" letter-spacing="-0.8">YouTube</text>
    </g>

    <!-- Center Search Bar -->
    <g transform="translate(460, -4)">
      <rect width="660" height="42" rx="21" fill="#121216" stroke="#2a2a32" stroke-width="1.2"/>
      <text x="24" y="26" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#71717a">Search</text>
      <!-- Search Glass Icon Right Container -->
      <path d="M600 0 H639 A21 21 0 0 1 660 21 A21 21 0 0 1 639 42 H600 Z" fill="#22222a"/>
      <g transform="translate(620, 12)">
        <circle cx="7" cy="7" r="5.5" fill="none" stroke="#a1a1aa" stroke-width="1.8"/>
        <line x1="11" y1="11" x2="16" y2="16" stroke="#a1a1aa" stroke-width="1.8" stroke-linecap="round"/>
      </g>
    </g>

    <!-- Right Utility Icons -->
    <g transform="translate(1420, 2)">
      <!-- Upload Icon (Tray with up arrow) -->
      <g transform="translate(0, 2)">
        <path d="M4 14 V17 C4 17.5 4.5 18 5 18 H19 C19.5 18 20 17.5 20 17 V14" fill="none" stroke="#f1f5f9" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M12 4 V14 M8 8 L12 4 L16 8" fill="none" stroke="#f1f5f9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Create Icon (Video with +) -->
      <g transform="translate(70, 2)">
        <rect x="2" y="4" width="16" height="14" rx="3" fill="none" stroke="#f1f5f9" stroke-width="1.8"/>
        <polygon points="18,8 24,5 24,17 18,14" fill="none" stroke="#f1f5f9" stroke-width="1.8"/>
        <line x1="10" y1="8" x2="10" y2="14" stroke="#f1f5f9" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="7" y1="11" x2="13" y2="11" stroke="#f1f5f9" stroke-width="1.8" stroke-linecap="round"/>
      </g>

      <!-- Notification Bell -->
      <g transform="translate(140, 2)">
        <path d="M6 14 A6 6 0 0 1 18 14 L19 17 H5 L6 14 Z M9 18 A3 3 0 0 0 15 18" fill="none" stroke="#f1f5f9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- User Avatar -->
      <g transform="translate(200, -4)">
        <circle cx="17" cy="17" r="17" fill="#64748b"/>
        <circle cx="17" cy="12" r="6" fill="#f8fafc"/>
        <path d="M6 27 C6 21 11 18 17 18 C23 18 28 21 28 27 Z" fill="#f8fafc"/>
      </g>
    </g>
  </g>

  <!-- ========================================================= -->
  <!-- LEFT COLUMN: VIDEO PLAYER + METADATA -->
  <!-- ========================================================= -->
  <g transform="translate(48, 100)">
    <!-- Video Player Container (16:9 Aspect) -->
    <rect width="1160" height="600" rx="16" fill="url(#videoPlayerBg)" stroke="#1a152e" stroke-width="1.5"/>

    <!-- Video Canvas Content Preview -->
    <g transform="translate(40, 36)">
      <!-- UI/UX Case Study Badge -->
      <rect width="168" height="30" rx="15" fill="#1e1338" stroke="#582a9e" stroke-width="1.2"/>
      <text x="84" y="20" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#c084fc">UI/UX Case Study</text>

      <!-- Large Video Slide Headline -->
      <text x="0" y="86" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="38" font-weight="800" fill="#ffffff" letter-spacing="-0.8">
        Designing a KYC
      </text>
      <text x="0" y="132" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="38" font-weight="800" fill="#ffffff" letter-spacing="-0.8">
        Onboarding Flow
      </text>

      <!-- Mock KYC Information Architecture Diagram Cards in Video -->
      <g transform="translate(420, 20)">
        <!-- Top Pill Cards -->
        <g transform="translate(0, 0)">
          <rect width="150" height="32" rx="8" fill="#191330" stroke="#372061" stroke-width="1"/>
          <text x="18" y="21" font-size="12" fill="#cbd5e1">&#x25C7; Back to Library</text>

          <rect x="165" width="105" height="32" rx="8" fill="#582a9e"/>
          <text x="185" y="21" font-size="12" font-weight="700" fill="#ffffff">+ New save</text>
        </g>

        <!-- Right Header Pill -->
        <g transform="translate(300, -10)">
          <rect width="210" height="42" rx="21" fill="#130d29" stroke="#311c58" stroke-width="1"/>
          <text x="20" y="20" font-size="11" font-weight="700" fill="#a855f7">&#x25C6; This one</text>
          <text x="80" y="19" font-size="11.5" font-weight="700" fill="#ffffff">Clarity in Chaos</text>
          <text x="80" y="32" font-size="10" fill="#94a3b8">Onboarding experience</text>
          <circle cx="185" cy="21" r="12" fill="#4c1d95"/>
        </g>

        <!-- Stacked Diagram Flow Cards -->
        <g transform="translate(300, 52)">
          <!-- Card 1 -->
          <rect width="210" height="52" rx="8" fill="#150e2c" stroke="#2c1a52" stroke-width="1"/>
          <text x="16" y="22" font-size="12" font-weight="700" fill="#ffffff">Clarity in Chaos</text>
          <text x="16" y="38" font-size="10.5" fill="#94a3b8">Information architecture</text>
          <text x="16" y="48" font-size="9" fill="#71717a">12 tags &#xB7; 2 days ago</text>
          <text x="190" y="32" font-size="12" fill="#a855f7">&#x203A;</text>

          <!-- Card 2 -->
          <rect y="64" width="210" height="52" rx="8" fill="#150e2c" stroke="#2c1a52" stroke-width="1"/>
          <text x="16" y="86" font-size="12" font-weight="700" fill="#ffffff">Clarity in Chaos</text>
          <text x="16" y="102" font-size="10.5" fill="#94a3b8">Information architecture</text>
          <text x="190" y="96" font-size="12" fill="#a855f7">&#x203A;</text>

          <!-- Card 3 -->
          <rect y="128" width="210" height="52" rx="8" fill="#150e2c" stroke="#2c1a52" stroke-width="1"/>
          <text x="16" y="150" font-size="12" font-weight="700" fill="#ffffff">Clarity in Chaos</text>
          <text x="16" y="166" font-size="10.5" fill="#94a3b8">User flow exploration</text>
          <text x="180" y="160" font-size="10" fill="#a855f7">12%</text>

          <!-- Card 4 (Client feedback) -->
          <rect y="192" width="210" height="52" rx="8" fill="#150e2c" stroke="#2c1a52" stroke-width="1"/>
          <circle cx="28" cy="218" r="10" fill="#f43f5e"/>
          <text x="46" y="214" font-size="12" font-weight="700" fill="#ffffff">Client feedback</text>
          <text x="46" y="230" font-size="10.5" fill="#94a3b8">Onboarding friction points</text>
          <text x="190" y="224" font-size="12" fill="#a855f7">&#x203A;</text>

          <!-- Card 5 (Persona research) -->
          <rect y="256" width="210" height="52" rx="8" fill="#150e2c" stroke="#2c1a52" stroke-width="1"/>
          <circle cx="28" cy="282" r="10" fill="#64748b"/>
          <text x="46" y="278" font-size="12" font-weight="700" fill="#ffffff">Persona research</text>
          <text x="46" y="294" font-size="10.5" fill="#94a3b8">User motivations</text>
          <text x="190" y="288" font-size="12" fill="#a855f7">&#x203A;</text>
        </g>
      </g>
    </g>

    <!-- Video Progress Bar & Controls -->
    <g transform="translate(24, 545)">
      <!-- Scrubber Bar -->
      <rect width="1112" height="4" rx="2" fill="#3f3f46"/>
      <!-- Filled Red Scrubber Portion (at 5:42 / 18:36 ~ 31%) -->
      <rect width="345" height="4" rx="2" fill="#ef4444"/>
      <circle cx="345" cy="2" r="6" fill="#ef4444"/>

      <!-- Controls Row -->
      <g transform="translate(0, 18)">
        <!-- Play/Pause -->
        <polygon points="4,2 14,8 4,14" fill="#ffffff"/>
        <!-- Next Video -->
        <polygon points="34,2 42,7 42,2 44,2 44,14 42,14 42,9 34,14" fill="#ffffff"/>
        <!-- Speaker / Volume -->
        <path d="M68 5 L73 5 L79 1 L79 15 L73 11 L68 11 Z" fill="#ffffff"/>
        <path d="M83 5 A5 5 0 0 1 83 11" fill="none" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Timestamp Text -->
        <text x="100" y="12" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="500" fill="#ffffff">5:42 / 18:36</text>

        <!-- Right Player Icons -->
        <g transform="translate(920, 0)">
          <!-- CC Badge -->
          <rect width="24" height="16" rx="3" fill="#ffffff"/>
          <text x="12" y="12" text-anchor="middle" font-size="10" font-weight="900" fill="#000000">CC</text>
          <!-- Settings Gear with HD Badge -->
          <circle cx="56" cy="8" r="6" fill="none" stroke="#ffffff" stroke-width="1.8"/>
          <rect x="62" y="-2" width="16" height="10" rx="2" fill="#ef4444"/>
          <text x="70" y="6" text-anchor="middle" font-size="7" font-weight="900" fill="#ffffff">HD</text>
          <!-- Miniplayer -->
          <rect x="96" y="2" width="18" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.5"/>
          <rect x="106" y="8" width="6" height="4" fill="#ffffff"/>
          <!-- Theater Mode -->
          <rect x="132" y="2" width="18" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.5"/>
          <!-- Fullscreen -->
          <path d="M164 2 H170 V8 M180 8 V2 H174 M180 10 V16 H174 M164 10 V16 H170" fill="none" stroke="#ffffff" stroke-width="1.5"/>
        </g>
      </g>
    </g>

    <!-- ======================================================= -->
    <!-- VIDEO METADATA & BUTTON BAR -->
    <!-- ======================================================= -->
    <g transform="translate(0, 630)">
      <!-- Main Title -->
      <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="23" font-weight="700" fill="#ffffff">
        Designing a KYC Onboarding Flow — Full UX Case Study
      </text>

      <!-- Channel & Actions Row -->
      <g transform="translate(0, 52)">
        <!-- Channel Icon -->
        <circle cx="24" cy="24" r="22" fill="#24154a" stroke="#4c2889" stroke-width="1.5"/>
        <g transform="translate(14, 14)">
          <path d="M10 2 C6 2 2 6 2 10 C2 14 6 18 10 18 C14 18 18 14 18 10 C18 6 14 2 10 2 Z" fill="none" stroke="#c084fc" stroke-width="1.8"/>
          <circle cx="10" cy="10" r="3" fill="#ffffff"/>
        </g>

        <!-- Channel Info -->
        <g transform="translate(56, 12)">
          <text x="0" y="13" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#ffffff">Mizko</text>
          <text x="0" y="29" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" fill="#94a3b8">29.4K subscribers</text>
        </g>

        <!-- Subscribe Button -->
        <g transform="translate(220, 6)">
          <rect width="118" height="38" rx="19" fill="#ffffff"/>
          <text x="59" y="24" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Subscribe</text>
        </g>

        <!-- Right Actions Group -->
        <g transform="translate(390, 6)">
          <!-- Like / Dislike Pill -->
          <rect width="135" height="38" rx="19" fill="#1f1f27"/>
          <path d="M22 22 V14 C22 12.5 24 10 26 10 L26 14 H34 C35 14 36 15 36 16 L33 24 C32.5 25 31.5 25 30.5 25 H24 Z" fill="none" stroke="#ffffff" stroke-width="1.5"/>
          <text x="44" y="24" font-size="13" font-weight="600" fill="#ffffff">1.2K</text>
          <line x1="82" y1="8" x2="82" y2="30" stroke="#33333e" stroke-width="1"/>
          <path d="M102 16 V24 C102 25.5 100 28 98 28 L98 24 H90 C89 24 88 23 88 22 L91 14 C91.5 13 92.5 13 93.5 13 H100 Z" fill="none" stroke="#ffffff" stroke-width="1.5"/>

          <!-- Share Button -->
          <g transform="translate(148, 0)">
            <rect width="105" height="38" rx="19" fill="#1f1f27"/>
            <path d="M20 18 L28 12 L20 6 V10 C14 10 10 14 8 20 C10 17 14 16 20 16 Z" fill="none" stroke="#ffffff" stroke-width="1.5"/>
            <text x="44" y="24" font-size="13" font-weight="600" fill="#ffffff">Share</text>
          </g>

          <!-- Save Button (Bookmark) -->
          <g transform="translate(265, 0)">
            <rect width="100" height="38" rx="19" fill="#1f1f27"/>
            <path d="M22 10 H32 V26 L27 22 L22 26 Z" fill="none" stroke="#ffffff" stroke-width="1.5"/>
            <text x="42" y="24" font-size="13" font-weight="600" fill="#ffffff">Save</text>
          </g>

          <!-- ===================================================== -->
          <!-- HIGHLIGHTED: SAVE TO REYO BUTTON -->
          <!-- ===================================================== -->
          <g transform="translate(378, 0)">
            <!-- Outer Glow / Gradient Border -->
            <rect width="170" height="38" rx="19" fill="url(#reyoBtnGrad)" stroke="#8b5cf6" stroke-width="1.8"/>
            <g transform="translate(20, 10)">
              <!-- Sparkles Icon -->
              <path d="M7 2 L8.5 6 L12.5 7.5 L8.5 9 L7 13 L5.5 9 L1.5 7.5 L5.5 6 Z" fill="#c084fc"/>
              <circle cx="12" cy="3" r="1" fill="#c084fc"/>
            </g>
            <text x="44" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">Save to Reyo</text>
          </g>

          <!-- More (...) Icon -->
          <g transform="translate(560, 6)">
            <circle cx="12" cy="12" r="17" fill="#1f1f27"/>
            <circle cx="8" cy="12" r="1.8" fill="#ffffff"/>
            <circle cx="12" cy="12" r="1.8" fill="#ffffff"/>
            <circle cx="16" cy="12" r="1.8" fill="#ffffff"/>
          </g>
        </g>
      </g>
    </g>
  </g>

  <!-- ========================================================= -->
  <!-- RIGHT COLUMN: YOUTUBE VIDEO RECOMMENDATIONS LIST -->
  <!-- ========================================================= -->
  <g transform="translate(1248, 100)">
    <!-- Category Filter Chips -->
    <g transform="translate(0, 0)">
      <rect width="52" height="32" rx="8" fill="#ffffff"/>
      <text x="26" y="21" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">All</text>

      <rect x="62" width="110" height="32" rx="8" fill="#1f1f27"/>
      <text x="117" y="21" text-anchor="middle" font-size="13" font-weight="500" fill="#ffffff">From Mizko</text>

      <rect x="182" width="76" height="32" rx="8" fill="#1f1f27"/>
      <text x="220" y="21" text-anchor="middle" font-size="13" font-weight="500" fill="#ffffff">UI/UX</text>

      <rect x="268" width="80" height="32" rx="8" fill="#1f1f27"/>
      <text x="308" y="21" text-anchor="middle" font-size="13" font-weight="500" fill="#ffffff">Design</text>

      <text x="368" y="21" font-size="16" fill="#cbd5e1">&#x203A;</text>
    </g>

    <!-- Recommendation Item 1 (24:31) -->
    <g transform="translate(0, 48)">
      <rect width="180" height="102" rx="10" fill="#17122b"/>
      <!-- Mock cards in thumbnail -->
      <rect x="14" y="16" width="36" height="26" rx="4" fill="#321e54"/>
      <rect x="56" y="16" width="46" height="26" rx="4" fill="#241542"/>
      <rect x="108" y="16" width="56" height="26" rx="4" fill="#3b1d68"/>
      <!-- Time Badge -->
      <rect x="130" y="78" width="44" height="18" rx="4" fill="#000000" opacity="0.85"/>
      <text x="152" y="91" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">24:31</text>
      <!-- Meta -->
      <g transform="translate(195, 8)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">UX Case Study: Fintech</text>
        <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Onboarding Redesign</text>
        <text x="0" y="56" font-size="12.5" fill="#94a3b8">Mizko</text>
        <text x="0" y="74" font-size="12.5" fill="#94a3b8">12K views &#xB7; 2 weeks ago</text>
      </g>
    </g>

    <!-- Recommendation Item 2 (16:45) -->
    <g transform="translate(0, 164)">
      <rect width="180" height="102" rx="10" fill="#cbd5e1"/>
      <rect x="15" y="15" width="150" height="72" rx="6" fill="#f1f5f9"/>
      <rect x="130" y="78" width="44" height="18" rx="4" fill="#000000" opacity="0.85"/>
      <text x="152" y="91" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">16:45</text>
      <g transform="translate(195, 8)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Information Architecture</text>
        <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Explained Simply</text>
        <text x="0" y="56" font-size="12.5" fill="#94a3b8">Mizko</text>
        <text x="0" y="74" font-size="12.5" fill="#94a3b8">8.6K views &#xB7; 1 month ago</text>
      </g>
    </g>

    <!-- Recommendation Item 3 (19:22) -->
    <g transform="translate(0, 280)">
      <rect width="180" height="102" rx="10" fill="#130d29"/>
      <rect x="130" y="78" width="44" height="18" rx="4" fill="#000000" opacity="0.85"/>
      <text x="152" y="91" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">19:22</text>
      <g transform="translate(195, 8)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Designing Flows</text>
        <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">That Make Sense</text>
        <text x="0" y="56" font-size="12.5" fill="#94a3b8">Mizko</text>
        <text x="0" y="74" font-size="12.5" fill="#94a3b8">9.1K views &#xB7; 3 weeks ago</text>
      </g>
    </g>

    <!-- Recommendation Item 4 (15:10) -->
    <g transform="translate(0, 396)">
      <rect width="180" height="102" rx="10" fill="#17122b"/>
      <rect x="130" y="78" width="44" height="18" rx="4" fill="#000000" opacity="0.85"/>
      <text x="152" y="91" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">15:10</text>
      <g transform="translate(195, 8)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">User Research That</text>
        <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Actually Helps Design</text>
        <text x="0" y="56" font-size="12.5" fill="#94a3b8">Mizko</text>
        <text x="0" y="74" font-size="12.5" fill="#94a3b8">6.3K views &#xB7; 1 month ago</text>
      </g>
    </g>

    <!-- Recommendation Item 5 (20:11) -->
    <g transform="translate(0, 512)">
      <rect width="180" height="102" rx="10" fill="#cbd5e1"/>
      <rect x="130" y="78" width="44" height="18" rx="4" fill="#000000" opacity="0.85"/>
      <text x="152" y="91" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">20:11</text>
      <g transform="translate(195, 8)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Turning Complexity</text>
        <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Into Clarity</text>
        <text x="0" y="56" font-size="12.5" fill="#94a3b8">Mizko</text>
        <text x="0" y="74" font-size="12.5" fill="#94a3b8">7.8K views &#xB7; 2 months ago</text>
      </g>
    </g>

    <!-- Recommendation Item 6 (22:08) -->
    <g transform="translate(0, 628)">
      <rect width="180" height="102" rx="10" fill="#130d29"/>
      <rect x="130" y="78" width="44" height="18" rx="4" fill="#000000" opacity="0.85"/>
      <text x="152" y="91" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">22:08</text>
      <g transform="translate(195, 8)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Design Systems</text>
        <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">From Scratch</text>
        <text x="0" y="56" font-size="12.5" fill="#94a3b8">Mizko</text>
        <text x="0" y="74" font-size="12.5" fill="#94a3b8">11K views &#xB7; 2 months ago</text>
      </g>
    </g>
  </g>
</svg>`;

// -------------------------------------------------------------
// 2. REYO SAVE MODAL SCREEN (Save Section) - Exact "Saved to Reyo" modal overlay
// Dimensions: 1920 x 1080
// -------------------------------------------------------------
const renderReyoSaveSvg = () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="saveOuterBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0814"/>
      <stop offset="100%" stop-color="#06040c"/>
    </linearGradient>

    <linearGradient id="modalCardBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#19152b"/>
      <stop offset="100%" stop-color="#120e22"/>
    </linearGradient>

    <linearGradient id="checkCircleGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>

    <linearGradient id="modalBtnGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6328e0"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>

    <filter id="modalShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="30" flood-color="#000000" flood-opacity="0.8"/>
      <feDropShadow dx="0" dy="0" stdDeviation="20" flood-color="#6d28d9" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Outer Dimmed YouTube Page Canvas -->
  <rect width="1920" height="1080" fill="url(#saveOuterBg)"/>

  <!-- Dimmed YouTube Container Frame in Background -->
  <g opacity="0.45" filter="blur(1px)">
    <!-- YouTube Top Bar -->
    <g transform="translate(60, 40)">
      <rect x="0" y="2" width="30" height="20" rx="5" fill="#ff0000"/>
      <polygon points="12,6 20,12 12,18" fill="#ffffff"/>
      <text x="36" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="800" fill="#ffffff">YouTube</text>

      <rect x="360" y="-4" width="600" height="38" rx="19" fill="#141418" stroke="#2c2c36" stroke-width="1"/>
      <text x="380" y="21" font-size="14" fill="#71717a">Search</text>
    </g>

    <!-- Dimmed Video Frame -->
    <g transform="translate(60, 110)">
      <rect width="1120" height="580" rx="14" fill="#0d091e"/>
      <rect x="36" y="32" width="150" height="26" rx="13" fill="#241544"/>
      <text x="111" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#c084fc">UI/UX Case Study</text>
      <text x="36" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="32" font-weight="800" fill="#ffffff">Designing a KYC</text>
      <text x="36" y="136" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="32" font-weight="800" fill="#ffffff">Onboarding Flow</text>

      <rect x="24" y="540" width="1072" height="4" fill="#33333a"/>
      <rect x="24" y="540" width="320" height="4" fill="#ef4444"/>
    </g>

    <!-- Dimmed Right Sidebar Placeholder Stacks -->
    <g transform="translate(1220, 110)">
      <rect width="140" height="85" rx="8" fill="#18132c"/>
      <rect y="105" width="140" height="85" rx="8" fill="#18132c"/>
      <rect y="210" width="140" height="85" rx="8" fill="#18132c"/>
      <rect y="315" width="140" height="85" rx="8" fill="#18132c"/>
    </g>
  </g>

  <!-- ========================================================= -->
  <!-- ACTIVE BOTTOM BUTTON: ✨ Saved to Reyo -->
  <!-- ========================================================= -->
  <g transform="translate(865, 785)">
    <rect width="186" height="46" rx="23" fill="#201140" stroke="#7c3aed" stroke-width="1.8"/>
    <g transform="translate(24, 13)">
      <path d="M7 2 L8.5 6 L12.5 7.5 L8.5 9 L7 13 L5.5 9 L1.5 7.5 L5.5 6 Z" fill="#c084fc"/>
      <circle cx="12" cy="3" r="1" fill="#c084fc"/>
    </g>
    <text x="52" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Saved to Reyo</text>
  </g>

  <!-- ========================================================= -->
  <!-- CENTER MODAL DIALOG: "Saved to Reyo" -->
  <!-- ========================================================= -->
  <g transform="translate(680, 260)" filter="url(#modalShadow)">
    <!-- Dialog Background Box -->
    <rect width="560" height="440" rx="28" fill="url(#modalCardBg)" stroke="#372466" stroke-width="1.8"/>

    <!-- Top Gradient Checkmark Circle -->
    <g transform="translate(280, 85)">
      <circle cx="0" cy="0" r="38" fill="url(#checkCircleGrad)"/>
      <!-- Checkmark (✓) -->
      <path d="M-12 1 L-3 10 L13 -8" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <!-- Headline: Saved to Reyo -->
    <text x="280" y="175" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
      Saved to Reyo
    </text>

    <!-- Subheading description -->
    <text x="280" y="220" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" fill="#cbd5e1" font-weight="400">
      We'll organize and make it easy to find later.
    </text>

    <!-- Primary Action Button: [ View in Reyo ] -->
    <g transform="translate(56, 268)">
      <rect width="448" height="60" rx="16" fill="url(#modalBtnGrad)"/>
      <text x="224" y="37" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#ffffff">
        View in Reyo
      </text>
    </g>

    <!-- Secondary Link: Continue browsing -->
    <text x="280" y="372" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15.5" font-weight="500" fill="#94a3b8" cursor="pointer">
      Continue browsing
    </text>
  </g>
</svg>`;

// -------------------------------------------------------------
// 3. REYO HOME SCREEN (Organize Section)
// Dimensions: 2100 x 980
// -------------------------------------------------------------
const renderReyoHomeSvg = () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="2100" height="980" viewBox="0 0 2100 980" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mainBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090614"/>
      <stop offset="50%" stop-color="#0b0718"/>
      <stop offset="100%" stop-color="#070412"/>
    </linearGradient>

    <linearGradient id="heroCardBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#140d2b"/>
      <stop offset="100%" stop-color="#0f0921"/>
    </linearGradient>

    <linearGradient id="circleNodeBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#150c2f" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0f0824" stop-opacity="0.95"/>
    </linearGradient>

    <linearGradient id="purpleBtn" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>

    <linearGradient id="pBarGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>

  <rect width="2100" height="980" fill="url(#mainBg)"/>

  <g opacity="0.45">
    <circle cx="280" cy="180" r="1.5" fill="#a855f7"/>
    <circle cx="580" cy="240" r="1.2" fill="#ffffff"/>
    <circle cx="920" cy="150" r="1.5" fill="#a855f7"/>
    <circle cx="1280" cy="220" r="1.2" fill="#ffffff"/>
    <circle cx="1560" cy="170" r="1.5" fill="#a855f7"/>
    <circle cx="340" cy="780" r="1.5" fill="#ffffff"/>
    <circle cx="720" cy="860" r="1.5" fill="#a855f7"/>
    <circle cx="1180" cy="800" r="1.2" fill="#ffffff"/>
    <circle cx="1440" cy="910" r="1.5" fill="#a855f7"/>
    <circle cx="500" cy="620" r="1.5" fill="#a855f7"/>
    <circle cx="1100" cy="640" r="1.5" fill="#a855f7"/>
  </g>

  <!-- 1. LEFT NAVIGATION RAIL -->
  <g transform="translate(0, 0)">
    <line x1="80" y1="0" x2="80" y2="980" stroke="#1c1438" stroke-width="1.5" opacity="0.6"/>

    <g transform="translate(28, 40)">
      <g transform="translate(0, 8)">
        <circle cx="8" cy="8" r="7" fill="none" stroke="#a855f7" stroke-width="1.8"/>
        <circle cx="8" cy="8" r="2.5" fill="#c084fc"/>
        <circle cx="5" cy="5" r="1.2" fill="#ffffff"/>
        <circle cx="11" cy="6" r="1.2" fill="#ffffff"/>
        <circle cx="10" cy="11" r="1.2" fill="#ffffff"/>
      </g>
      <text x="24" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#ffffff" letter-spacing="-0.3">Reyo</text>
    </g>

    <g transform="translate(20, 320)">
      <rect width="42" height="230" rx="14" fill="#130c2b" stroke="#251747" stroke-width="1.5"/>

      <g transform="translate(6, 12)">
        <rect width="30" height="30" rx="8" fill="#24154a"/>
        <path d="M7 16 L15 9 L23 16 V23 C23 23.5 22.5 24 22 24 H8 C7.5 24 7 23.5 7 23 Z" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 24 V18 H18 V24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linejoin="round"/>
      </g>

      <g transform="translate(6, 68)">
        <path d="M6 10 C6 9 7 8 8 8 H12 L14 10 H22 C23 10 24 11 24 12 V22 C24 23 23 24 22 24 H8 C7 24 6 23 6 22 Z" fill="none" stroke="#71717a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <g transform="translate(6, 124)">
        <path d="M15 6 L16.5 11.5 L22 13 L16.5 14.5 L15 20 L13.5 14.5 L8 13 L13.5 11.5 Z" fill="none" stroke="#71717a" stroke-width="1.8" stroke-linejoin="round"/>
        <circle cx="21" cy="7" r="1" fill="#71717a"/>
      </g>

      <g transform="translate(6, 180)">
        <polygon points="15,6 18,12 24,13 20,17 21,23 15,20 9,23 10,17 6,13 12,12" fill="none" stroke="#71717a" stroke-width="1.8" stroke-linejoin="round"/>
      </g>
    </g>
  </g>

  <!-- 2. TOP APP BAR -->
  <g transform="translate(130, 36)">
    <circle cx="22" cy="22" r="21" fill="#7c3aed"/>
    <text x="22" y="29" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="700" fill="#ffffff">R</text>

    <g transform="translate(56, 0)">
      <text x="0" y="19" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#ffffff">
        Good morning, Reshma <tspan fill="#f59e0b">&#x2728;</tspan>
      </text>
      <text x="0" y="39" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="400" fill="#8e8a9f">
        Here's what's happening in your library
      </text>
    </g>

    <g transform="translate(540, 2)">
      <rect width="520" height="42" rx="21" fill="#140e28" stroke="#251847" stroke-width="1.5"/>
      <circle cx="24" cy="21" r="5.5" fill="none" stroke="#8e8a9f" stroke-width="1.8"/>
      <line x1="28" y1="25" x2="33" y2="30" stroke="#8e8a9f" stroke-width="1.8" stroke-linecap="round"/>
      <text x="44" y="26" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#8e8a9f">Search for packaging...</text>
    </g>

    <g transform="translate(1110, 10)">
      <path d="M12 5 A5 5 0 0 1 22 5 L22 13 L25 16 L9 16 L12 13 Z M14 18 A3 3 0 0 0 20 18" fill="none" stroke="#8e8a9f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="23" cy="5" r="3" fill="#a855f7"/>
    </g>
  </g>

  <!-- 3. HERO RIGHT NOW BANNER CARD -->
  <g transform="translate(130, 115)">
    <rect width="1240" height="210" rx="18" fill="url(#heroCardBg)" stroke="#381c70" stroke-width="1.5"/>

    <g transform="translate(36, 32)">
      <text x="0" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#818cf8" letter-spacing="1.5">
        RIGHT NOW
      </text>

      <text x="0" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#ffffff">
        You're working on <tspan fill="#c084fc">bottle-label-concept</tspan>
      </text>

      <text x="0" y="80" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" font-weight="400" fill="#94a3b8">
        I found 7 saves from 3 sources that match this project
      </text>

      <g transform="translate(0, 104)">
        <rect width="160" height="38" rx="10" fill="url(#purpleBtn)"/>
        <text x="80" y="24" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">
          View matches &#x2192;
        </text>
      </g>
    </g>

    <g transform="translate(850, 22)">
      <clipPath id="heroStackClip">
        <rect width="360" height="166" rx="12"/>
      </clipPath>
      <g clip-path="url(#heroStackClip)">
        <rect x="0" y="0" width="120" height="166" fill="#e2d4c0"/>
        <g transform="translate(15, 20)">
          <rect width="80" height="24" rx="3" fill="#ffffff" opacity="0.9"/>
          <line x1="10" y1="12" x2="70" y2="12" stroke="#475569" stroke-width="1.5"/>
          <rect y="40" width="90" height="30" rx="3" fill="#f8fafc" opacity="0.9"/>
          <line x1="10" y1="52" x2="80" y2="52" stroke="#475569" stroke-width="1.5"/>
          <rect y="85" width="75" height="22" rx="3" fill="#cbd5e1" opacity="0.9"/>
        </g>

        <rect x="110" y="0" width="130" height="166" fill="#78350f"/>
        <ellipse cx="170" cy="60" rx="55" ry="90" fill="#b45309" transform="rotate(-25 170 60)"/>
        <rect x="130" y="80" width="90" height="70" rx="4" fill="#fef3c7" opacity="0.9"/>
        <line x1="140" y1="100" x2="200" y2="100" stroke="#78350f" stroke-width="2"/>
        <line x1="140" y1="115" x2="190" y2="115" stroke="#78350f" stroke-width="1.5"/>
        <line x1="140" y1="130" x2="175" y2="130" stroke="#78350f" stroke-width="1.5"/>
        <circle cx="160" cy="140" r="12" fill="#fb7185" opacity="0.8"/>
        <circle cx="178" cy="148" r="10" fill="#f43f5e" opacity="0.8"/>

        <rect x="230" y="0" width="130" height="166" fill="#cbd5e1"/>
        <g transform="translate(245, 15)">
          <rect width="45" height="30" rx="3" fill="#ffffff"/>
          <line x1="6" y1="15" x2="38" y2="15" stroke="#64748b" stroke-width="1.5"/>
          <rect x="55" y="10" width="50" height="40" rx="3" fill="#94a3b8"/>
          <rect x="0" y="60" width="60" height="35" rx="3" fill="#64748b"/>
          <rect x="40" y="105" width="65" height="35" rx="3" fill="#475569"/>
        </g>
      </g>
      <rect width="360" height="166" rx="12" fill="none" stroke="#4c2889" stroke-width="1.5"/>
    </g>
  </g>

  <!-- 4. TABS: Topics | All -->
  <g transform="translate(130, 360)">
    <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#ffffff">Topics</text>
    <rect x="0" y="32" width="56" height="3" rx="1.5" fill="#a855f7"/>

    <text x="84" y="24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="500" fill="#71717a">All</text>
  </g>

  <!-- 5. KNOWLEDGE GRAPH CONSTELLATION WITH CIRCLE NODES -->
  <g transform="translate(130, 420)">
    <line x1="650" y1="280" x2="330" y2="140" stroke="#3d1d73" stroke-width="1.8"/>
    <line x1="650" y1="280" x2="980" y2="140" stroke="#3d1d73" stroke-width="1.8"/>
    <line x1="650" y1="280" x2="220" y2="340" stroke="#3d1d73" stroke-width="1.8"/>
    <line x1="650" y1="280" x2="380" y2="460" stroke="#3d1d73" stroke-width="1.8"/>
    <line x1="650" y1="280" x2="950" y2="460" stroke="#3d1d73" stroke-width="1.8"/>
    <line x1="330" y1="140" x2="980" y2="140" stroke="#2a1552" stroke-width="1.2"/>
    <line x1="330" y1="140" x2="220" y2="340" stroke="#2a1552" stroke-width="1.2"/>
    <line x1="220" y1="340" x2="380" y2="460" stroke="#2a1552" stroke-width="1.2"/>
    <line x1="380" y1="460" x2="950" y2="460" stroke="#2a1552" stroke-width="1.2"/>

    <circle cx="510" cy="210" r="2.5" fill="#c084fc"/>
    <circle cx="820" cy="205" r="2.5" fill="#c084fc"/>
    <circle cx="430" cy="305" r="2.5" fill="#c084fc"/>
    <circle cx="490" cy="385" r="2.5" fill="#c084fc"/>
    <circle cx="800" cy="375" r="2.5" fill="#c084fc"/>
    <circle cx="620" cy="140" r="2" fill="#a855f7"/>
    <circle cx="680" cy="460" r="2" fill="#a855f7"/>

    <!-- NODE 1 (CENTER): Packaging Design (14 saves) -->
    <g transform="translate(650, 280)">
      <circle cx="0" cy="0" r="115" fill="url(#circleNodeBg)" stroke="#8b5cf6" stroke-width="1.8"/>
      <text x="0" y="-14" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="700" fill="#ffffff">
        Packaging Design
      </text>
      <text x="0" y="16" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#c084fc">
        14 saves
      </text>
      <g transform="translate(0, 42)">
        <g transform="translate(-32, 0)">
          <circle cx="0" cy="0" r="9" fill="none" stroke="#a855f7" stroke-width="1.2"/>
          <polygon points="-3,-4 4,0 -3,4" fill="#a855f7"/>
        </g>
        <g transform="translate(0, 0)">
          <circle cx="0" cy="0" r="9" fill="none" stroke="#a855f7" stroke-width="1.2"/>
          <rect x="-4.5" y="-4.5" width="9" height="9" rx="2.5" fill="none" stroke="#a855f7" stroke-width="1"/>
          <circle cx="0" cy="0" r="2" fill="none" stroke="#a855f7" stroke-width="0.8"/>
        </g>
        <g transform="translate(32, 0)">
          <circle cx="0" cy="0" r="9" fill="none" stroke="#a855f7" stroke-width="1.2"/>
          <path d="M-6 0 C-2 3, 2 3, 6 0 M0 -6 C0 0, 4 4, 6 5 M-5 -3 C-1 -1, 3 -4, 4 -6" fill="none" stroke="#a855f7" stroke-width="0.9"/>
        </g>
      </g>
    </g>

    <!-- NODE 2 (TOP-LEFT): Typography (9 saves) -->
    <g transform="translate(330, 140)">
      <circle cx="0" cy="0" r="90" fill="url(#circleNodeBg)" stroke="#8b5cf6" stroke-width="1.8"/>
      <text x="0" y="-12" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#ffffff">
        Typography
      </text>
      <text x="0" y="14" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#c084fc">
        9 saves
      </text>
      <g transform="translate(0, 36)">
        <g transform="translate(-16, 0)">
          <circle cx="0" cy="0" r="8" fill="none" stroke="#a855f7" stroke-width="1.2"/>
          <rect x="-3.5" y="-3.5" width="7" height="7" rx="2" fill="none" stroke="#a855f7" stroke-width="1"/>
        </g>
        <g transform="translate(16, 0)">
          <circle cx="0" cy="0" r="8" fill="none" stroke="#a855f7" stroke-width="1.2"/>
          <rect x="-3.5" y="-3.5" width="7" height="7" rx="1.5" fill="none" stroke="#a855f7" stroke-width="0.9"/>
          <circle cx="-1" cy="-1" r="1" fill="#a855f7"/>
        </g>
      </g>
    </g>

    <!-- NODE 3 (TOP-RIGHT): Branding (11 saves) -->
    <g transform="translate(980, 140)">
      <circle cx="0" cy="0" r="90" fill="url(#circleNodeBg)" stroke="#8b5cf6" stroke-width="1.8"/>
      <text x="0" y="-12" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#ffffff">
        Branding
      </text>
      <text x="0" y="14" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#c084fc">
        11 saves
      </text>
      <g transform="translate(0, 36)">
        <g transform="translate(-16, 0)">
          <circle cx="0" cy="0" r="8" fill="none" stroke="#a855f7" stroke-width="1.2"/>
          <rect x="-3.5" y="-3.5" width="7" height="7" rx="1.5" fill="none" stroke="#a855f7" stroke-width="0.9"/>
        </g>
        <g transform="translate(16, 0)">
          <circle cx="0" cy="0" r="8" fill="none" stroke="#a855f7" stroke-width="1.2"/>
          <path d="M-5 0 C-1 2, 1 2, 5 0" fill="none" stroke="#a855f7" stroke-width="0.9"/>
        </g>
      </g>
    </g>

    <!-- NODE 4 (LEFT-BOTTOM): Illustration (4 saves) -->
    <g transform="translate(220, 340)">
      <circle cx="0" cy="0" r="64" fill="url(#circleNodeBg)" stroke="#8b5cf6" stroke-width="1.8"/>
      <text x="0" y="-8" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#ffffff">
        Illustration
      </text>
      <text x="0" y="14" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#c084fc">
        4 saves
      </text>
      <g transform="translate(0, 30)">
        <g transform="translate(-12, 0)">
          <circle cx="0" cy="0" r="7" fill="none" stroke="#a855f7" stroke-width="1"/>
        </g>
        <g transform="translate(12, 0)">
          <circle cx="0" cy="0" r="7" fill="none" stroke="#a855f7" stroke-width="1"/>
        </g>
      </g>
    </g>

    <!-- NODE 5 (BOTTOM-LEFT-CENTER): Motion Design (7 saves) -->
    <g transform="translate(380, 460)">
      <circle cx="0" cy="0" r="72" fill="url(#circleNodeBg)" stroke="#8b5cf6" stroke-width="1.8"/>
      <text x="0" y="-8" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="15.5" font-weight="700" fill="#ffffff">
        Motion Design
      </text>
      <text x="0" y="14" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#c084fc">
        7 saves
      </text>
      <g transform="translate(0, 32)">
        <g transform="translate(-14, 0)">
          <circle cx="0" cy="0" r="7.5" fill="none" stroke="#a855f7" stroke-width="1"/>
          <polygon points="-2.5,-3 3,0 -2.5,3" fill="#a855f7"/>
        </g>
        <g transform="translate(14, 0)">
          <circle cx="0" cy="0" r="7.5" fill="none" stroke="#a855f7" stroke-width="1"/>
        </g>
      </g>
    </g>

    <!-- NODE 6 (BOTTOM-RIGHT-CENTER): UI/UX Design (5 saves) -->
    <g transform="translate(950, 460)">
      <circle cx="0" cy="0" r="68" fill="url(#circleNodeBg)" stroke="#8b5cf6" stroke-width="1.8"/>
      <text x="0" y="-8" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="15.5" font-weight="700" fill="#ffffff">
        UI/UX Design
      </text>
      <text x="0" y="14" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#c084fc">
        5 saves
      </text>
      <g transform="translate(0, 32)">
        <g transform="translate(-14, 0)">
          <circle cx="0" cy="0" r="7.5" fill="none" stroke="#a855f7" stroke-width="1"/>
        </g>
        <g transform="translate(14, 0)">
          <circle cx="0" cy="0" r="7.5" fill="none" stroke="#a855f7" stroke-width="1"/>
          <polygon points="-2.5,-3 3,0 -2.5,3" fill="#a855f7"/>
        </g>
      </g>
    </g>
  </g>

  <!-- 6. RIGHT SIDEBAR -->
  <g transform="translate(1640, 36)">
    <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#ffffff">
      Learning Progress
    </text>

    <!-- Section 1: Progress Items Card -->
    <g transform="translate(0, 46)">
      <rect width="380" height="260" rx="16" fill="#130c2b" stroke="#251747" stroke-width="1.5"/>

      <!-- Progress Item 1: Packaging Design -->
      <g transform="translate(24, 24)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="600" fill="#ffffff">Packaging Design</text>
        <text x="0" y="36" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#94a3b8">14 saves &#xB7; going deep</text>
        <rect x="0" y="48" width="332" height="6" rx="3" fill="#20153f"/>
        <rect x="0" y="48" width="275" height="6" rx="3" fill="url(#pBarGrad)"/>
      </g>

      <!-- Progress Item 2: Typography -->
      <g transform="translate(24, 104)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="600" fill="#ffffff">Typography</text>
        <text x="0" y="36" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#94a3b8">6 saves &#xB7; exploring</text>
        <rect x="0" y="48" width="332" height="6" rx="3" fill="#20153f"/>
        <rect x="0" y="48" width="140" height="6" rx="3" fill="url(#pBarGrad)"/>
      </g>

      <!-- Progress Item 3: Motion Design -->
      <g transform="translate(24, 184)">
        <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="600" fill="#ffffff">Motion Design</text>
        <text x="0" y="36" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" fill="#94a3b8">2 saves &#xB7; just started</text>
        <rect x="0" y="48" width="332" height="6" rx="3" fill="#20153f"/>
        <rect x="0" y="48" width="55" height="6" rx="3" fill="url(#pBarGrad)"/>
      </g>
    </g>

    <!-- Section 2: This Week Card -->
    <g transform="translate(0, 330)">
      <rect width="380" height="190" rx="16" fill="#130c2b" stroke="#251747" stroke-width="1.5"/>
      <g transform="translate(24, 28)">
        <text x="0" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" fill="#ffffff">
          &#x2728; This Week
        </text>

        <text x="0" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#cbd5e1" font-weight="400">
          You saved 8 things across 3 topics. Your
        </text>
        <text x="0" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#cbd5e1" font-weight="400">
          deepest dive was Packaging Design (5
        </text>
        <text x="0" y="96" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#cbd5e1" font-weight="400">
          saves).
        </text>

        <text x="0" y="134" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="600" fill="#c084fc">
          See weekly summary &#x2192;
        </text>
      </g>
    </g>

    <!-- Section 3: Need your help Card -->
    <g transform="translate(0, 544)">
      <rect width="380" height="165" rx="16" fill="#130c2b" stroke="#251747" stroke-width="1.5"/>
      <g transform="translate(24, 28)">
        <text x="0" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700" fill="#ffffff">
          Need your help
        </text>

        <text x="0" y="52" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#cbd5e1" font-weight="400">
          I found 3 saves I'm not sure about &#x2014;
        </text>
        <text x="0" y="74" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#cbd5e1" font-weight="400">
          help me place them?
        </text>

        <text x="0" y="112" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="600" fill="#c084fc">
          Sort now &#x2192;
        </text>
      </g>
    </g>
  </g>
</svg>`;

// -------------------------------------------------------------
// 4. REYO OVERLAY SCREEN (Find Section)
// Dimensions: 1920 x 1080
// -------------------------------------------------------------
const renderReyoOverlaySvg = () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="overlayBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080612"/>
      <stop offset="50%" stop-color="#0b0818"/>
      <stop offset="100%" stop-color="#06040f"/>
    </linearGradient>
    <linearGradient id="btnGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#overlayBg)"/>

  <g opacity="0.2">
    <circle cx="300" cy="200" r="2" fill="#ffffff"/>
    <circle cx="650" cy="180" r="1.5" fill="#a855f7"/>
    <circle cx="1200" cy="260" r="2" fill="#ffffff"/>
    <circle cx="1600" cy="190" r="1.5" fill="#a855f7"/>
    <circle cx="400" cy="800" r="2" fill="#ffffff"/>
    <circle cx="950" cy="880" r="1.5" fill="#a855f7"/>
    <circle cx="1500" cy="780" r="2" fill="#ffffff"/>
    <line x1="300" y1="200" x2="650" y2="180" stroke="#7c3aed" stroke-width="0.8"/>
    <line x1="1200" y1="260" x2="1600" y2="190" stroke="#7c3aed" stroke-width="0.8"/>
    <line x1="400" y1="800" x2="950" y2="880" stroke="#7c3aed" stroke-width="0.8"/>
    <line x1="950" y1="880" x2="1500" y2="780" stroke="#7c3aed" stroke-width="0.8"/>
  </g>

  <g transform="translate(1840, 40)" opacity="0.7">
    <line x1="0" y1="0" x2="20" y2="20" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="20" y1="0" x2="0" y2="20" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
  </g>

  <g transform="translate(480, 160)">
    <g transform="translate(370, 0)">
      <rect width="220" height="38" rx="19" fill="#1e153a" stroke="#4c337d" stroke-width="1.5"/>
      <text x="30" y="24" font-size="14">&#x2728;</text>
      <text x="56" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#c084fc" letter-spacing="1.5">ONE STEP AWAY</text>
    </g>

    <g transform="translate(480, 110)">
      <text x="0" y="0" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-0.8">
        Reyo will find your exact saves in 5 seconds
      </text>
      <text x="0" y="58" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-0.8">
        &#x2014; by understanding what you're working on
      </text>
      <text x="0" y="116" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-0.8">
        right now.
      </text>
    </g>

    <text x="480" y="280" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" fill="#94a3b8" font-weight="400">
      Just a quick permission so I can scan your workspace context.
    </text>

    <g transform="translate(50, 330)">
      <g transform="translate(0, 0)">
        <rect width="410" height="130" rx="18" fill="#130e26" stroke="#251b47" stroke-width="1.5"/>
        <text x="28" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="700" fill="#22c55e">&#x2713;  Reads:</text>
        <text x="28" y="84" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#cbd5e1">Tab title &#xB7; Active file name &#xB7; Workspace context</text>
      </g>

      <g transform="translate(450, 0)">
        <rect width="410" height="130" rx="18" fill="#130e26" stroke="#251b47" stroke-width="1.5"/>
        <text x="28" y="44" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="700" fill="#ef4444">&#x2715;  Won't read:</text>
        <text x="28" y="78" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#cbd5e1">File contents &#xB7; Personal data &#xB7; Browsing</text>
        <text x="28" y="102" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#cbd5e1">history</text>
      </g>
    </g>

    <g transform="translate(180, 510)">
      <rect width="600" height="74" rx="37" fill="url(#btnGrad)"/>
      <text x="300" y="46" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700" fill="#ffffff">Sure, take a look &#x2192;</text>
    </g>

    <g transform="translate(480, 630)">
      <text x="0" y="0" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="500" fill="#94a3b8">Skip this</text>
      <text x="0" y="38" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#64748b">You can change this anytime in settings</text>
    </g>
  </g>
</svg>`;

// -------------------------------------------------------------
// 5. REYO TIMESTAMP SCREEN (Retrieve Section)
// Dimensions: 1920 x 1080
// -------------------------------------------------------------
const renderReyoTimestampSvg = () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tsBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090614"/>
      <stop offset="50%" stop-color="#0d091e"/>
      <stop offset="100%" stop-color="#080512"/>
    </linearGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#tsBg)"/>

  <!-- TOP HEADER -->
  <g transform="translate(60, 36)">
    <text x="0" y="24" font-family="-apple-system, sans-serif" font-size="24" font-weight="600" fill="#cbd5e1">&#x2190;</text>

    <g transform="translate(48, 0)">
      <circle cx="16" cy="16" r="15" fill="#1c1438" stroke="#6d28d9" stroke-width="1.5"/>
      <circle cx="16" cy="16" r="5" fill="#c084fc"/>
      <text x="40" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#ffffff">Reyo</text>
    </g>

    <g transform="translate(500, -4)">
      <rect width="700" height="44" rx="22" fill="#140e28" stroke="#2a1e4d" stroke-width="1.5"/>
      <circle cx="24" cy="22" r="6" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <line x1="28" y1="26" x2="34" y2="32" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <text x="48" y="27" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#cbd5e1">Search for fintech onboarding...</text>
    </g>

    <g transform="translate(1660, -4)">
      <circle cx="22" cy="22" r="20" fill="#3b0764"/>
      <text x="22" y="28" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#e9d5ff">R</text>

      <text x="100" y="28" font-family="-apple-system, sans-serif" font-size="22" fill="#94a3b8">&#x2715;</text>
    </g>
  </g>

  <!-- VIDEO TOOLBAR STRIP PREVIEW -->
  <g transform="translate(60, 105)">
    <rect width="1800" height="52" rx="8" fill="#171926" stroke="#2a2e40" stroke-width="1"/>
    <g transform="translate(720, 8)">
      <rect width="360" height="36" rx="6" fill="#0f172a"/>
      <text x="30" y="24" font-size="16" fill="#94a3b8">&#x2756;</text>
      <text x="75" y="24" font-size="16" fill="#94a3b8">#</text>
      <text x="120" y="24" font-size="16" fill="#94a3b8">&#x25CB;</text>
      <text x="165" y="24" font-size="16" fill="#94a3b8">&#x270E;</text>
      <text x="210" y="24" font-size="16" fill="#94a3b8">T</text>
      <text x="255" y="24" font-size="16" fill="#94a3b8">&#x1F4AC;</text>
    </g>
  </g>

  <!-- TITLE & ACTIONS -->
  <g transform="translate(60, 195)">
    <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff">
      Designing a KYC Onboarding Flow &#x2014; Full UX Case Study
    </text>

    <g transform="translate(0, 52)">
      <rect width="34" height="22" rx="11" fill="#334155"/>
      <text x="17" y="15" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff">MI</text>
      
      <text x="44" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="600" fill="#e2e8f0">Mizko</text>
      <rect x="96" y="3" width="18" height="14" rx="3" fill="#ef4444"/>
      <polygon points="102,6 109,10 102,14" fill="#ffffff"/>

      <text x="0" y="46" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#94a3b8">Saved 1 month ago</text>
    </g>

    <g transform="translate(1590, 0)">
      <rect width="210" height="46" rx="23" fill="#18132e" stroke="#3d2a63" stroke-width="1.5"/>
      <text x="105" y="28" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" font-weight="700" fill="#ffffff">Watch Original &#x2197;</text>
    </g>
  </g>

  <!-- TIMESTAMPS LIST -->
  <g transform="translate(60, 335)">
    <text x="0" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700" fill="#ffffff">Timestamps</text>

    <!-- Item 1 (0:00) -->
    <g transform="translate(0, 48)">
      <text x="12" y="28" font-family="ui-monospace, monospace" font-size="15" font-weight="700" fill="#c084fc">0:00</text>
      <text x="120" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15.5" font-weight="600" fill="#cbd5e1">Introduction and project brief</text>
      <line x1="0" y1="46" x2="1800" y2="46" stroke="#1c1630" stroke-width="1"/>
    </g>

    <!-- Item 2 (1:45) -->
    <g transform="translate(0, 104)">
      <text x="12" y="28" font-family="ui-monospace, monospace" font-size="15" font-weight="700" fill="#c084fc">1:45</text>
      <text x="120" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15.5" font-weight="600" fill="#cbd5e1">Competitor analysis of existing KYC flows</text>
      <line x1="0" y1="46" x2="1800" y2="46" stroke="#1c1630" stroke-width="1"/>
    </g>

    <!-- Item 3 (3:20) -->
    <g transform="translate(0, 160)">
      <text x="12" y="28" font-family="ui-monospace, monospace" font-size="15" font-weight="700" fill="#c084fc">3:20</text>
      <text x="120" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15.5" font-weight="600" fill="#cbd5e1">User pain points in verification processes</text>
      <line x1="0" y1="46" x2="1800" y2="46" stroke="#1c1630" stroke-width="1"/>
    </g>

    <!-- Item 4: HIGHLIGHTED KEY RESULT (5:38) -->
    <g transform="translate(0, 222)">
      <rect width="1800" height="130" rx="14" fill="#1b1236" stroke="#7c3aed" stroke-width="2"/>
      <rect x="0" y="0" width="8" height="130" rx="4" fill="#a855f7"/>

      <text x="36" y="44" font-family="ui-monospace, monospace" font-size="17" font-weight="800" fill="#c084fc">5:38</text>
      <text x="120" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#ffffff">Document upload screen design decisions</text>
      
      <text x="120" y="78" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#e2e8f0" font-weight="400">
        Breaks down the exact layout choices for the ID upload card &#x2014; camera trigger vs gallery upload, progress indicator placement, and
      </text>
      <text x="120" y="104" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#e2e8f0" font-weight="400">
        error state handling. Directly maps to the ID Upload Screen V3 frame you're designing.
      </text>

      <g transform="translate(1520, 28)">
        <text x="0" y="16" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" font-weight="700" fill="#c084fc">&#x2726; Relevant to your project</text>
      </g>
    </g>

    <!-- Item 5 (8:12) -->
    <g transform="translate(0, 370)">
      <text x="12" y="28" font-family="ui-monospace, monospace" font-size="15" font-weight="700" fill="#c084fc">8:12</text>
      <text x="120" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15.5" font-weight="600" fill="#cbd5e1">Selfie verification and liveness check UX</text>
      <line x1="0" y1="46" x2="1800" y2="46" stroke="#1c1630" stroke-width="1"/>
    </g>

    <!-- Item 6 (11:30) -->
    <g transform="translate(0, 426)">
      <text x="12" y="28" font-family="ui-monospace, monospace" font-size="15" font-weight="700" fill="#c084fc">11:30</text>
      <text x="120" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15.5" font-weight="600" fill="#cbd5e1">Error handling and retry flows</text>
      <line x1="0" y1="46" x2="1800" y2="46" stroke="#1c1630" stroke-width="1"/>
    </g>

    <!-- Item 7 (14:05) -->
    <g transform="translate(0, 482)">
      <text x="12" y="28" font-family="ui-monospace, monospace" font-size="15" font-weight="700" fill="#c084fc">14:05</text>
      <text x="120" y="28" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15.5" font-weight="600" fill="#cbd5e1">Trust signals and microcopy for data safety</text>
    </g>
  </g>
</svg>`;

console.log('Writing high-definition Reyo UI SVG files...');
fs.writeFileSync(path.join(OUTPUT_DIR, 'reyo-yt.svg'), renderReyoYtSvg());
fs.writeFileSync(path.join(OUTPUT_DIR, 'reyo-save.svg'), renderReyoSaveSvg());
fs.writeFileSync(path.join(OUTPUT_DIR, 'reyo-home.svg'), renderReyoHomeSvg());
fs.writeFileSync(path.join(OUTPUT_DIR, 'reyo-overlay.svg'), renderReyoOverlaySvg());
fs.writeFileSync(path.join(OUTPUT_DIR, 'reyo-timestamp.svg'), renderReyoTimestampSvg());

console.log('Converting SVGs to high-resolution PNGs via ffmpeg...');
execSync(`ffmpeg -y -i "${path.join(OUTPUT_DIR, 'reyo-yt.svg')}" -vf "scale=1920:1080" "${path.join(OUTPUT_DIR, 'reyo-yt.png')}"`, { stdio: 'inherit' });
execSync(`ffmpeg -y -i "${path.join(OUTPUT_DIR, 'reyo-save.svg')}" -vf "scale=1920:1080" "${path.join(OUTPUT_DIR, 'reyo-save.png')}"`, { stdio: 'inherit' });
execSync(`ffmpeg -y -i "${path.join(OUTPUT_DIR, 'reyo-home.svg')}" -vf "scale=2100:980" "${path.join(OUTPUT_DIR, 'reyo-home.png')}"`, { stdio: 'inherit' });
execSync(`ffmpeg -y -i "${path.join(OUTPUT_DIR, 'reyo-overlay.svg')}" -vf "scale=1920:1080" "${path.join(OUTPUT_DIR, 'reyo-overlay.png')}"`, { stdio: 'inherit' });
execSync(`ffmpeg -y -i "${path.join(OUTPUT_DIR, 'reyo-timestamp.svg')}" -vf "scale=1920:1080" "${path.join(OUTPUT_DIR, 'reyo-timestamp.png')}"`, { stdio: 'inherit' });

console.log('✅ Generated all Reyo UI images successfully: reyo-save.png, reyo-yt.png, reyo-home.png, reyo-overlay.png, reyo-timestamp.png');

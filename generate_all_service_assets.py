#!/usr/bin/env python3
import os
import subprocess

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Check if in applet root
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
if not os.path.exists(PUBLIC_DIR):
    PUBLIC_DIR = "/app/applet/public"

OUT_DIR = os.path.join(PUBLIC_DIR, "images", "services")
ICON_DIR = os.path.join(OUT_DIR, "icons")

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(ICON_DIR, exist_ok=True)

print(f"Target directories:\n  {OUT_DIR}\n  {ICON_DIR}")

# ----------------- ICONS (256x256) -----------------
icons = {
    "static-web-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FBBF24"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#F59E0B" stroke-width="4" stroke-opacity="0.5"/>
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <rect x="36" y="44" width="184" height="40" rx="24" fill="#1E293B"/>
      <circle cx="62" cy="64" r="7" fill="#EF4444"/>
      <circle cx="82" cy="64" r="7" fill="#F59E0B"/>
      <circle cx="102" cy="64" r="7" fill="#10B981"/>
      <rect x="130" y="56" width="70" height="16" rx="8" fill="#334155" fill-opacity="0.6"/>
      <path d="M142 96 L98 152 H134 L114 204 L168 136 H126 Z" fill="url(#amberGrad)"/>
      <circle cx="190" cy="180" r="16" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="2"/>
      <path d="M184 180 L188 184 L196 176" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>""",

    "dynamic-web-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#090D16"/>
        </linearGradient>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#2563EB"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#38BDF8" stroke-width="4" stroke-opacity="0.5"/>
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <ellipse cx="128" cy="80" rx="50" ry="16" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
      <path d="M78 80 V110 C78 120 100 126 128 126 C156 126 178 120 178 110 V80" fill="none" stroke="#38BDF8" stroke-width="3"/>
      <path d="M78 110 V140 C78 150 100 156 128 156 C156 156 178 150 178 140 V110" fill="none" stroke="#38BDF8" stroke-width="3"/>
      <circle cx="70" cy="180" r="16" fill="#2563EB"/>
      <circle cx="186" cy="180" r="16" fill="#38BDF8"/>
      <line x1="86" y1="180" x2="170" y2="180" stroke="#38BDF8" stroke-width="4" stroke-dasharray="6 4"/>
      <path d="M128 156 V180" stroke="#38BDF8" stroke-width="3"/>
    </svg>""",

    "ecommerce-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FB923C"/>
          <stop offset="100%" stop-color="#EA580C"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#FB923C" stroke-width="4" stroke-opacity="0.5"/>
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <path d="M104 90 C104 74 114 62 128 62 C142 62 152 74 152 90" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
      <rect x="80" y="86" width="96" height="106" rx="16" fill="url(#orangeGrad)"/>
      <text x="128" y="156" font-family="DejaVu Sans, Arial, sans-serif" font-size="48" font-weight="bold" fill="#FFFFFF" text-anchor="middle">₹</text>
      <circle cx="186" cy="80" r="18" fill="#10B981" stroke="#0F172A" stroke-width="3"/>
      <text x="186" y="86" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">%</text>
    </svg>""",

    "mobile-app-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E1B4B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A855F7"/>
          <stop offset="100%" stop-color="#6366F1"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#8B5CF6" stroke-width="4" stroke-opacity="0.5"/>
      <rect x="76" y="38" width="104" height="180" rx="22" fill="#090D16" stroke="url(#purpleGrad)" stroke-width="4"/>
      <rect x="110" y="48" width="36" height="8" rx="4" fill="#334155"/>
      <rect x="92" y="70" width="32" height="32" rx="8" fill="#8B5CF6"/>
      <rect x="132" y="70" width="32" height="32" rx="8" fill="#38BDF8"/>
      <rect x="92" y="112" width="32" height="32" rx="8" fill="#F59E0B"/>
      <rect x="132" y="112" width="32" height="32" rx="8" fill="#10B981"/>
      <rect x="108" y="202" width="40" height="4" rx="2" fill="#94A3B8"/>
    </svg>""",

    "business-web-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34D399"/>
          <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#10B981" stroke-width="4" stroke-opacity="0.5"/>
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <rect x="66" y="140" width="22" height="46" rx="4" fill="#334155"/>
      <rect x="98" y="116" width="22" height="70" rx="4" fill="#3B82F6"/>
      <rect x="130" y="94" width="22" height="92" rx="4" fill="#F59E0B"/>
      <rect x="162" y="70" width="22" height="116" rx="4" fill="url(#emeraldGrad)"/>
      <path d="M60 146 L100 110 L136 122 L178 64" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round"/>
      <polygon points="174,62 186,62 186,74" fill="#10B981"/>
    </svg>""",

    "deployment-hosting-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#06B6D4" stroke-width="4" stroke-opacity="0.5"/>
      <rect x="48" y="52" width="160" height="42" rx="10" fill="#0B132B" stroke="#06B6D4" stroke-width="3"/>
      <circle cx="70" cy="73" r="5" fill="#10B981"/>
      <circle cx="86" cy="73" r="5" fill="#06B6D4"/>
      <rect x="110" y="69" width="78" height="8" rx="4" fill="#334155"/>
      <rect x="48" y="106" width="160" height="42" rx="10" fill="#0B132B" stroke="#06B6D4" stroke-width="3"/>
      <circle cx="70" cy="127" r="5" fill="#10B981"/>
      <circle cx="86" cy="127" r="5" fill="#06B6D4"/>
      <rect x="110" y="123" width="78" height="8" rx="4" fill="#334155"/>
      <rect x="48" y="160" width="160" height="42" rx="10" fill="#0B132B" stroke="#06B6D4" stroke-width="3"/>
      <circle cx="70" cy="181" r="5" fill="#10B981"/>
      <circle cx="86" cy="181" r="5" fill="#F59E0B"/>
      <rect x="110" y="177" width="78" height="8" rx="4" fill="#334155"/>
    </svg>""",

    "digital-marketing-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FB7185"/>
          <stop offset="100%" stop-color="#E11D48"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#F43F5E" stroke-width="4" stroke-opacity="0.5"/>
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <path d="M72 110 L132 86 V158 L72 134 Z" fill="url(#roseGrad)"/>
      <ellipse cx="132" cy="122" rx="12" ry="36" fill="#FB7185"/>
      <path d="M92 134 L96 166 H80 L76 134 Z" fill="#94A3B8"/>
      <path d="M158 100 C172 110 172 134 158 144" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
      <path d="M174 86 C196 102 196 142 174 158" fill="none" stroke="#F43F5E" stroke-width="5" stroke-linecap="round"/>
    </svg>""",

    "coaching-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D"/>
          <stop offset="100%" stop-color="#D97706"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#F59E0B" stroke-width="4" stroke-opacity="0.5"/>
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <polygon points="128,70 196,96 128,122 60,96" fill="url(#goldGrad)"/>
      <path d="M86 112 V142 C86 156 105 166 128 166 C151 166 170 156 170 142 V112" fill="none" stroke="#D97706" stroke-width="4"/>
      <path d="M184 102 V138" stroke="#FDE68A" stroke-width="3" stroke-linecap="round"/>
      <circle cx="184" cy="142" r="4" fill="#FDE68A"/>
      <text x="128" y="198" font-family="monospace" font-size="20" font-weight="bold" fill="#38BDF8" text-anchor="middle">&lt;CODE /&gt;</text>
    </svg>"""
}

for name, svg in icons.items():
    svg_file = f"/tmp/{name}.svg"
    png_file = f"{ICON_DIR}/{name}.png"
    with open(svg_file, "w") as f:
        f.write(svg)
    subprocess.run(["convert", "-background", "none", svg_file, png_file], check=True)
    print(f"Created icon: {png_file}")

# ----------------- SHOWCASE PREVIEWS (1280x720 16:9) -----------------
previews = {
    "static-web-preview": """<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0B0F19"/>
          <stop offset="50%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#060910"/>
        </linearGradient>
        <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#EA580C"/>
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10B981"/>
          <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <!-- Grid pattern -->
      <g stroke="#1E293B" stroke-width="1" stroke-opacity="0.4">
        <line x1="0" y1="120" x2="1280" y2="120"/>
        <line x1="0" y1="240" x2="1280" y2="240"/>
        <line x1="0" y1="360" x2="1280" y2="360"/>
        <line x1="0" y1="480" x2="1280" y2="480"/>
        <line x1="0" y1="600" x2="1280" y2="600"/>
        <line x1="160" y1="0" x2="160" y2="720"/>
        <line x1="320" y1="0" x2="320" y2="720"/>
        <line x1="480" y1="0" x2="480" y2="720"/>
        <line x1="640" y1="0" x2="640" y2="720"/>
        <line x1="800" y1="0" x2="800" y2="720"/>
        <line x1="960" y1="0" x2="960" y2="720"/>
        <line x1="1120" y1="0" x2="1120" y2="720"/>
      </g>
      <!-- Glow sphere -->
      <circle cx="980" cy="240" r="280" fill="#F59E0B" fill-opacity="0.08"/>
      
      <!-- Main Browser Window -->
      <g transform="translate(80, 70)">
        <rect width="1120" height="580" rx="20" fill="#0C1322" stroke="#334155" stroke-width="2"/>
        <!-- Window Chrome -->
        <rect width="1120" height="46" rx="20" fill="#1E293B"/>
        <circle cx="28" cy="23" r="6" fill="#EF4444"/>
        <circle cx="48" cy="23" r="6" fill="#F59E0B"/>
        <circle cx="68" cy="23" r="6" fill="#10B981"/>
        <rect x="220" y="10" width="680" height="26" rx="8" fill="#0F172A" stroke="#334155" stroke-width="1"/>
        <text x="560" y="27" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">https://techsasi.com/services/static-web  (SSL Verified A+)</text>
        
        <!-- Left Hero Content inside Mockup -->
        <g transform="translate(50, 80)">
          <!-- Pill badge -->
          <rect width="210" height="28" rx="14" fill="#F59E0B" fill-opacity="0.15" stroke="#F59E0B" stroke-width="1"/>
          <text x="105" y="18" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" font-weight="bold" fill="#FBBF24" text-anchor="middle">LIGHTHOUSE 100 PERFORMANCE</text>
          
          <text x="0" y="75" font-family="DejaVu Sans, Arial, sans-serif" font-size="34" font-weight="bold" fill="#FFFFFF">Ultra-Fast Static Websites</text>
          <text x="0" y="115" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" fill="#94A3B8">Engineered for sub-second loads, 0 server maintenance, and maximum SEO.</text>
          
          <!-- Mock CTA Buttons -->
          <rect x="0" y="145" width="180" height="42" rx="10" fill="url(#primaryGrad)"/>
          <text x="90" y="171" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A" text-anchor="middle">Get Instant Scope</text>
          <rect x="195" y="145" width="150" height="42" rx="10" fill="#1E293B" stroke="#475569" stroke-width="1"/>
          <text x="270" y="171" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#E2E8F0" text-anchor="middle">WhatsApp Chat</text>
          
          <!-- Feature cards row -->
          <g transform="translate(0, 220)">
            <rect width="180" height="150" rx="12" fill="#151D2F" stroke="#334155" stroke-width="1"/>
            <text x="20" y="35" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">Global Edge CDN</text>
            <text x="20" y="60" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Vercel &amp; Cloudflare</text>
            <text x="20" y="80" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Distributed caching</text>
            <text x="20" y="125" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" fill="#10B981">&lt;0.8s FCP</text>
            
            <g transform="translate(195, 0)">
              <rect width="180" height="150" rx="12" fill="#151D2F" stroke="#334155" stroke-width="1"/>
              <text x="20" y="35" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">SEO Optimized</text>
              <text x="20" y="60" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">OpenGraph &amp; Schema</text>
              <text x="20" y="80" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">JSON-LD Metadata</text>
              <text x="20" y="125" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" fill="#38BDF8">100/100</text>
            </g>
            
            <g transform="translate(390, 0)">
              <rect width="180" height="150" rx="12" fill="#151D2F" stroke="#334155" stroke-width="1"/>
              <text x="20" y="35" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#A855F7">Zero Downtime</text>
              <text x="20" y="60" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">No database exploits</text>
              <text x="20" y="80" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Auto-renew SSL</text>
              <text x="20" y="125" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" fill="#A855F7">99.99%</text>
            </g>
          </g>
        </g>
        
        <!-- Right Telemetry Showcase inside Window -->
        <g transform="translate(680, 80)">
          <!-- Lighthouse Score Box -->
          <rect width="380" height="200" rx="16" fill="#111A2E" stroke="#10B981" stroke-width="2" stroke-opacity="0.5"/>
          <text x="30" y="40" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">Google Lighthouse Audit</text>
          <!-- Circular gauge -->
          <circle cx="90" cy="120" r="50" fill="none" stroke="#1E293B" stroke-width="10"/>
          <circle cx="90" cy="120" r="50" fill="none" stroke="#10B981" stroke-width="10" stroke-dasharray="290 314" stroke-linecap="round"/>
          <text x="90" y="128" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" font-weight="bold" fill="#10B981" text-anchor="middle">100</text>
          <!-- Score items -->
          <g transform="translate(170, 70)">
            <text x="0" y="15" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">Performance:</text>
            <text x="130" y="15" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">100/100</text>
            <text x="0" y="40" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">Accessibility:</text>
            <text x="130" y="40" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">100/100</text>
            <text x="0" y="65" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">Best Practices:</text>
            <text x="130" y="65" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">100/100</text>
            <text x="0" y="90" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">SEO Index:</text>
            <text x="130" y="90" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">100/100</text>
          </g>
          
          <!-- Code snippet card -->
          <g transform="translate(0, 220)">
            <rect width="380" height="150" rx="16" fill="#0A0E1A" stroke="#334155" stroke-width="1"/>
            <rect width="380" height="30" rx="16" fill="#151D2F"/>
            <circle cx="20" cy="15" r="4" fill="#EF4444"/>
            <circle cx="34" cy="15" r="4" fill="#F59E0B"/>
            <circle cx="48" cy="15" r="4" fill="#10B981"/>
            <text x="70" y="19" font-family="monospace" font-size="11" fill="#94A3B8">StaticProductionBuild.tsx</text>
            <text x="20" y="60" font-family="monospace" font-size="12" fill="#38BDF8">export const WebPage = () =&gt; &#123;</text>
            <text x="35" y="82" font-family="monospace" font-size="12" fill="#F59E0B">  return &lt;Hero speed="0.8s" edge="global" /&gt;;</text>
            <text x="20" y="104" font-family="monospace" font-size="12" fill="#38BDF8">&#125;;</text>
            <text x="20" y="130" font-family="monospace" font-size="11" fill="#10B981">// Output: 0kb Client Runtime Overhead</text>
          </g>
        </g>
      </g>
    </svg>""",

    "dynamic-web-preview": """<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080E1A"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#2563EB"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <circle cx="980" cy="300" r="300" fill="#38BDF8" fill-opacity="0.08"/>
      
      <g transform="translate(80, 70)">
        <rect width="1120" height="580" rx="20" fill="#0C1322" stroke="#334155" stroke-width="2"/>
        <rect width="1120" height="46" rx="20" fill="#1E293B"/>
        <circle cx="28" cy="23" r="6" fill="#EF4444"/>
        <circle cx="48" cy="23" r="6" fill="#F59E0B"/>
        <circle cx="68" cy="23" r="6" fill="#10B981"/>
        <text x="560" y="27" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">https://app.techsasi.com/portal/dashboard (PostgreSQL + REST API)</text>
        
        <!-- Left Dashboard UI -->
        <g transform="translate(40, 70)">
          <!-- Metrics Row -->
          <rect width="160" height="80" rx="12" fill="#151D2F" stroke="#334155" stroke-width="1"/>
          <text x="18" y="30" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Active Users</text>
          <text x="18" y="60" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" fill="#38BDF8">14,892</text>
          
          <g transform="translate(180, 0)">
            <rect width="160" height="80" rx="12" fill="#151D2F" stroke="#334155" stroke-width="1"/>
            <text x="18" y="30" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">API Latency</text>
            <text x="18" y="60" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" fill="#10B981">18ms avg</text>
          </g>

          <g transform="translate(360, 0)">
            <rect width="160" height="80" rx="12" fill="#151D2F" stroke="#334155" stroke-width="1"/>
            <text x="18" y="30" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Database Sync</text>
            <text x="18" y="60" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" fill="#F59E0B">Real-Time</text>
          </g>

          <!-- Interactive Table Mockup -->
          <g transform="translate(0, 100)">
            <rect width="520" height="290" rx="14" fill="#0E1626" stroke="#334155" stroke-width="1"/>
            <rect width="520" height="40" rx="14" fill="#182338"/>
            <text x="25" y="25" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#E2E8F0">Live Relational Data Stream</text>
            
            <!-- Table rows -->
            <g transform="translate(25, 65)">
              <text x="0" y="0" font-family="monospace" font-size="12" fill="#94A3B8">USER ID</text>
              <text x="120" y="0" font-family="monospace" font-size="12" fill="#94A3B8">ROLE</text>
              <text x="240" y="0" font-family="monospace" font-size="12" fill="#94A3B8">STATUS</text>
              <text x="360" y="0" font-family="monospace" font-size="12" fill="#94A3B8">ACTIONS</text>

              <line x1="0" y1="12" x2="470" y2="12" stroke="#334155" stroke-width="1"/>

              <text x="0" y="40" font-family="monospace" font-size="12" fill="#FFFFFF">#USR-8921</text>
              <text x="120" y="40" font-family="monospace" font-size="12" fill="#38BDF8">Super Admin</text>
              <text x="240" y="40" font-family="monospace" font-size="12" fill="#10B981">Online</text>
              <text x="360" y="40" font-family="monospace" font-size="12" fill="#F59E0B">Manage</text>

              <line x1="0" y1="55" x2="470" y2="55" stroke="#334155" stroke-width="1"/>

              <text x="0" y="80" font-family="monospace" font-size="12" fill="#FFFFFF">#USR-8922</text>
              <text x="120" y="80" font-family="monospace" font-size="12" fill="#E2E8F0">Org Manager</text>
              <text x="240" y="80" font-family="monospace" font-size="12" fill="#10B981">Active</text>
              <text x="360" y="80" font-family="monospace" font-size="12" fill="#F59E0B">Manage</text>

              <line x1="0" y1="95" x2="470" y2="95" stroke="#334155" stroke-width="1"/>

              <text x="0" y="120" font-family="monospace" font-size="12" fill="#FFFFFF">#USR-8923</text>
              <text x="120" y="120" font-family="monospace" font-size="12" fill="#E2E8F0">Staff User</text>
              <text x="240" y="120" font-family="monospace" font-size="12" fill="#94A3B8">Idle</text>
              <text x="360" y="120" font-family="monospace" font-size="12" fill="#F59E0B">Manage</text>

              <line x1="0" y1="135" x2="470" y2="135" stroke="#334155" stroke-width="1"/>

              <text x="0" y="160" font-family="monospace" font-size="12" fill="#FFFFFF">#USR-8924</text>
              <text x="120" y="160" font-family="monospace" font-size="12" fill="#E2E8F0">API Client</text>
              <text x="240" y="160" font-family="monospace" font-size="12" fill="#10B981">Verified</text>
              <text x="360" y="160" font-family="monospace" font-size="12" fill="#F59E0B">Manage</text>
            </g>
          </g>
        </g>
        
        <!-- Right Backend Architecture Diagram -->
        <g transform="translate(600, 70)">
          <rect width="480" height="390" rx="16" fill="#0A0F1D" stroke="#38BDF8" stroke-width="1.5" stroke-opacity="0.4"/>
          <text x="30" y="40" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" font-weight="bold" fill="#38BDF8">Full-Stack Cloud Architecture</text>
          
          <!-- Architecture Boxes -->
          <g transform="translate(30, 70)">
            <!-- Box 1: Client Layer -->
            <rect width="420" height="60" rx="10" fill="#162238" stroke="#38BDF8" stroke-width="1"/>
            <text x="20" y="26" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Frontend Presentation Layer</text>
            <text x="20" y="46" font-family="monospace" font-size="11" fill="#38BDF8">React 19 SPA · TypeScript · Tailwind CSS · TanStack Query</text>

            <!-- Down Arrow -->
            <path d="M210 65 V85" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4 2"/>

            <!-- Box 2: Node.js API -->
            <rect y="90" width="420" height="60" rx="10" fill="#162238" stroke="#10B981" stroke-width="1"/>
            <text x="20" y="116" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Express API &amp; Auth Middleware</text>
            <text x="20" y="136" font-family="monospace" font-size="11" fill="#10B981">JWT Tokens · Role-Based Guard (RBAC) · Rate Limiting</text>

            <!-- Down Arrow -->
            <path d="M210 155 V175" stroke="#10B981" stroke-width="2" stroke-dasharray="4 2"/>

            <!-- Box 3: PostgreSQL Database -->
            <rect y="180" width="420" height="60" rx="10" fill="#162238" stroke="#F59E0B" stroke-width="1"/>
            <text x="20" y="206" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">PostgreSQL Relational DB &amp; Cache</text>
            <text x="20" y="226" font-family="monospace" font-size="11" fill="#F59E0B">ACID Transactions · Redis In-Memory · Automated Backups</text>
          </g>
          
          <!-- Bottom Security Badge -->
          <rect x="30" y="335" width="420" height="34" rx="8" fill="#1E293B"/>
          <text x="240" y="357" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">End-to-End Encrypted SSL &amp; OWASP Top 10 Protected</text>
        </g>
      </g>
    </svg>""",

    "ecommerce-preview": """<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#110A05"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FB923C"/>
          <stop offset="100%" stop-color="#EA580C"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <circle cx="1020" cy="280" r="300" fill="#EA580C" fill-opacity="0.08"/>
      
      <g transform="translate(80, 70)">
        <rect width="1120" height="580" rx="20" fill="#0C1322" stroke="#334155" stroke-width="2"/>
        <rect width="1120" height="46" rx="20" fill="#1E293B"/>
        <circle cx="28" cy="23" r="6" fill="#EF4444"/>
        <circle cx="48" cy="23" r="6" fill="#F59E0B"/>
        <circle cx="68" cy="23" r="6" fill="#10B981"/>
        <text x="560" y="27" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">https://shop.yourbrand.in/store (Razorpay UPI, Cashfree &amp; GST)</text>

        <!-- Left Product Showcase Cards -->
        <g transform="translate(40, 70)">
          <!-- Product Card 1 -->
          <rect width="240" height="380" rx="16" fill="#151D2F" stroke="#EA580C" stroke-width="1.5"/>
          <rect width="240" height="170" rx="16" fill="#1E293B"/>
          <!-- Product visual badge -->
          <circle cx="120" cy="85" r="45" fill="#FB923C" fill-opacity="0.2"/>
          <text x="120" y="95" font-family="DejaVu Sans, Arial, sans-serif" font-size="32" font-weight="bold" fill="#FB923C" text-anchor="middle">STORE</text>
          
          <rect x="20" y="20" width="60" height="22" rx="6" fill="#10B981"/>
          <text x="50" y="35" font-family="DejaVu Sans, Arial, sans-serif" font-size="10" font-weight="bold" fill="#0F172A" text-anchor="middle">IN STOCK</text>
          
          <text x="20" y="205" font-family="DejaVu Sans, Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Premium Retail Item</text>
          <text x="20" y="225" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Instant Delivery &amp; Warranty</text>
          
          <text x="20" y="260" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" fill="#FB923C">₹2,499</text>
          <text x="110" y="260" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#64748B" text-decoration="line-through">₹3,999</text>
          
          <rect x="20" y="300" width="200" height="42" rx="10" fill="url(#orangeGrad)"/>
          <text x="120" y="326" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A" text-anchor="middle">+ Add to Cart</text>

          <!-- Product Card 2 -->
          <g transform="translate(260, 0)">
            <rect width="240" height="380" rx="16" fill="#151D2F" stroke="#334155" stroke-width="1"/>
            <rect width="240" height="170" rx="16" fill="#1E293B"/>
            <circle cx="120" cy="85" r="45" fill="#38BDF8" fill-opacity="0.2"/>
            <text x="120" y="95" font-family="DejaVu Sans, Arial, sans-serif" font-size="32" font-weight="bold" fill="#38BDF8" text-anchor="middle">ITEM 2</text>
            <text x="20" y="205" font-family="DejaVu Sans, Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Direct D2C Product</text>
            <text x="20" y="225" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Variant Selector: S / M / L / XL</text>
            <text x="20" y="260" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" fill="#38BDF8">₹1,199</text>
            <rect x="20" y="300" width="200" height="42" rx="10" fill="#1E293B" stroke="#475569" stroke-width="1"/>
            <text x="120" y="326" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#E2E8F0" text-anchor="middle">+ Add to Cart</text>
          </g>
        </g>
        
        <!-- Right Checkout & Payment Drawer Showcase -->
        <g transform="translate(580, 70)">
          <rect width="500" height="380" rx="18" fill="#0A0E1A" stroke="#EA580C" stroke-width="2"/>
          <rect width="500" height="45" rx="18" fill="#1A1829"/>
          <text x="30" y="28" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#FB923C">Frictionless 1-Step Checkout Funnel</text>

          <g transform="translate(30, 65)">
            <text x="0" y="15" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#E2E8F0">1. Select Payment Method:</text>
            
            <!-- Payment Badges -->
            <rect y="30" width="135" height="45" rx="8" fill="#162238" stroke="#10B981" stroke-width="1.5"/>
            <text x="67" y="58" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981" text-anchor="middle">UPI / QR Code</text>

            <rect x="150" y="30" width="135" height="45" rx="8" fill="#162238" stroke="#334155" stroke-width="1"/>
            <text x="217" y="58" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#E2E8F0" text-anchor="middle">Cards / EMI</text>

            <rect x="300" y="30" width="135" height="45" rx="8" fill="#162238" stroke="#334155" stroke-width="1"/>
            <text x="367" y="58" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#E2E8F0" text-anchor="middle">NetBanking</text>
            
            <!-- Automated Order Breakdown -->
            <rect y="95" width="440" height="110" rx="10" fill="#111A2E" stroke="#334155" stroke-width="1"/>
            <g transform="translate(20, 115)">
              <text x="0" y="10" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Subtotal (2 Items):</text>
              <text x="320" y="10" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#FFFFFF">₹3,698.00</text>
              <text x="0" y="32" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">GST Tax Invoiced (18%):</text>
              <text x="320" y="32" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#FFFFFF">₹665.64</text>
              <text x="0" y="54" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Standard Shipping:</text>
              <text x="320" y="54" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" font-weight="bold" fill="#10B981">FREE</text>
              <line x1="0" y1="65" x2="400" y2="65" stroke="#334155" stroke-width="1"/>
              <text x="0" y="85" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Total Payable:</text>
              <text x="320" y="85" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" font-weight="bold" fill="#FB923C">₹4,363.64</text>
            </g>

            <rect y="225" width="440" height="46" rx="10" fill="url(#orangeGrad)"/>
            <text x="220" y="254" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0F172A" text-anchor="middle">Pay Now via UPI QR / Razorpay (Instant Receipt)</text>
          </g>
        </g>
      </g>
    </svg>""",

    "mobile-app-preview": """<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0E0A1E"/>
          <stop offset="100%" stop-color="#070913"/>
        </linearGradient>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C084FC"/>
          <stop offset="100%" stop-color="#7C3AED"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <circle cx="640" cy="360" r="320" fill="#8B5CF6" fill-opacity="0.08"/>
      
      <!-- Center Phone 1: iOS Interface -->
      <g transform="translate(240, 60)">
        <rect width="260" height="520" rx="36" fill="#000000" stroke="#7C3AED" stroke-width="3"/>
        <rect x="6" y="6" width="248" height="508" rx="32" fill="#0D111E"/>
        <!-- Dynamic Island -->
        <rect x="85" y="16" width="90" height="22" rx="11" fill="#000000"/>
        
        <!-- App Header -->
        <text x="25" y="65" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Delivery Live Tracker</text>
        
        <!-- Map Mockup Container -->
        <rect x="18" y="80" width="212" height="180" rx="16" fill="#162238" stroke="#334155" stroke-width="1"/>
        <path d="M40 220 Q120 120 200 130" stroke="#8B5CF6" stroke-width="4" fill="none"/>
        <circle cx="200" cy="130" r="8" fill="#10B981"/>
        
        <!-- Driver Status Card -->
        <rect x="18" y="275" width="212" height="75" rx="14" fill="#1C273E"/>
        <circle cx="45" cy="312" r="18" fill="#8B5CF6"/>
        <text x="45" y="318" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">S</text>
        <text x="75" y="306" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">Order En Route</text>
        <text x="75" y="324" font-family="DejaVu Sans, Arial, sans-serif" font-size="10" fill="#10B981">ETA: 12 Mins (Live GPS)</text>
        
        <!-- App Action -->
        <rect x="18" y="370" width="212" height="42" rx="12" fill="url(#purpleGrad)"/>
        <text x="124" y="396" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Contact Courier / Call</text>
        
        <!-- Bottom Home Bar -->
        <rect x="90" y="490" width="80" height="4" rx="2" fill="#94A3B8"/>
      </g>

      <!-- Center Phone 2: Android Interface -->
      <g transform="translate(540, 100)">
        <rect width="250" height="500" rx="30" fill="#000000" stroke="#38BDF8" stroke-width="3"/>
        <rect x="6" y="6" width="238" height="488" rx="26" fill="#0B132B"/>
        <!-- Punch Hole Camera -->
        <circle cx="125" cy="22" r="5" fill="#000000"/>
        
        <text x="25" y="55" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Analytics Mobile Feed</text>
        
        <!-- Feed Card 1 -->
        <rect x="18" y="70" width="202" height="90" rx="12" fill="#15213D"/>
        <text x="32" y="98" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Today's Revenue</text>
        <text x="32" y="128" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" fill="#38BDF8">₹42,850</text>
        
        <!-- Feed Card 2 -->
        <rect x="18" y="175" width="202" height="90" rx="12" fill="#15213D"/>
        <text x="32" y="203" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Total Orders Completed</text>
        <text x="32" y="233" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" fill="#10B981">138 Orders</text>
        
        <!-- Feed Card 3 -->
        <rect x="18" y="280" width="202" height="85" rx="12" fill="#15213D"/>
        <text x="32" y="308" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Push Notifications Sent</text>
        <text x="32" y="338" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" fill="#F59E0B">4,200</text>
        
        <!-- Bottom bar -->
        <rect x="85" y="475" width="80" height="4" rx="2" fill="#94A3B8"/>
      </g>
      
      <!-- Right Highlights Box -->
      <g transform="translate(830, 140)">
        <rect width="370" height="420" rx="20" fill="#0C1322" stroke="#7C3AED" stroke-width="1.5"/>
        <text x="30" y="45" font-family="DejaVu Sans, Arial, sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF">Cross-Platform Architecture</text>
        
        <g transform="translate(30, 80)">
          <text x="0" y="15" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#A855F7">✓ 1 Single Codebase (iOS &amp; Android)</text>
          <text x="20" y="35" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Flutter &amp; React Native high performance.</text>

          <text x="0" y="80" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#38BDF8">✓ Offline SQLite Database Sync</text>
          <text x="20" y="100" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Works without internet; syncs on reconnect.</text>

          <text x="0" y="145" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#10B981">✓ Hardware Sensor Integrations</text>
          <text x="20" y="165" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Camera, GPS, Bluetooth, Push Notifications.</text>

          <text x="0" y="210" font-family="DejaVu Sans, Arial, sans-serif" font-size="14" font-weight="bold" fill="#F59E0B">✓ 100% App Store &amp; Play Store Approval</text>
          <text x="20" y="230" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">We handle full compliance, signing &amp; publishing.</text>
        </g>
      </g>
    </svg>""",

    "business-web-preview": """<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06120D"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <circle cx="980" cy="240" r="280" fill="#10B981" fill-opacity="0.08"/>

      <g transform="translate(80, 70)">
        <rect width="1120" height="580" rx="20" fill="#0C1322" stroke="#334155" stroke-width="2"/>
        <rect width="1120" height="46" rx="20" fill="#1E293B"/>
        <circle cx="28" cy="23" r="6" fill="#EF4444"/>
        <circle cx="48" cy="23" r="6" fill="#F59E0B"/>
        <circle cx="68" cy="23" r="6" fill="#10B981"/>
        <text x="560" y="27" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">https://erp.enterprisename.com (Custom Business ERP &amp; Billing)</text>
        
        <!-- Left Side: ERP Control Center -->
        <g transform="translate(40, 70)">
          <!-- Top KPI stats -->
          <rect width="220" height="90" rx="14" fill="#152233" stroke="#10B981" stroke-width="1.5"/>
          <text x="20" y="32" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Monthly Gross Volume</text>
          <text x="20" y="65" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="bold" fill="#10B981">₹18,45,200</text>
          
          <g transform="translate(240, 0)">
            <rect width="220" height="90" rx="14" fill="#152233" stroke="#334155" stroke-width="1"/>
            <text x="20" y="32" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Pending Invoices</text>
            <text x="20" y="65" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="bold" fill="#F59E0B">42 (₹3.2L)</text>
          </g>

          <g transform="translate(480, 0)">
            <rect width="220" height="90" rx="14" fill="#152233" stroke="#334155" stroke-width="1"/>
            <text x="20" y="32" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Warehouse Stock Level</text>
            <text x="20" y="65" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="bold" fill="#38BDF8">98.4% Nominal</text>
          </g>
          
          <!-- Bottom ERP modules list -->
          <g transform="translate(0, 115)">
            <rect width="700" height="280" rx="16" fill="#0C1524" stroke="#334155" stroke-width="1"/>
            <rect width="700" height="40" rx="16" fill="#15233A"/>
            <text x="25" y="25" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#E2E8F0">Active Business Operations Hub</text>

            <g transform="translate(25, 60)">
              <rect width="195" height="90" rx="10" fill="#141E30" stroke="#10B981" stroke-width="1"/>
              <text x="15" y="28" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">GST Invoicing</text>
              <text x="15" y="50" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Auto B2B &amp; B2C tax</text>
              <text x="15" y="70" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Instant PDF downloads</text>

              <g transform="translate(220, 0)">
                <rect width="195" height="90" rx="10" fill="#141E30" stroke="#38BDF8" stroke-width="1"/>
                <text x="15" y="28" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">Inventory &amp; POs</text>
                <text x="15" y="50" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Barcode scanning</text>
                <text x="15" y="70" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Low-stock alerts</text>
              </g>

              <g transform="translate(440, 0)">
                <rect width="195" height="90" rx="10" fill="#141E30" stroke="#F59E0B" stroke-width="1"/>
                <text x="15" y="28" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#F59E0B">CRM &amp; Inquiries</text>
                <text x="15" y="50" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Lead stages pipeline</text>
                <text x="15" y="70" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">WhatsApp outreach</text>
              </g>
            </g>

            <g transform="translate(25, 175)">
              <rect width="640" height="75" rx="10" fill="#162238"/>
              <text x="20" y="30" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Audit Trail &amp; Role-Based Access Control</text>
              <text x="20" y="52" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Strict separation: Super Admin, Accountants, Sales Execs, Warehouse Staff. Complete timestamp log of all changes.</text>
            </g>
          </g>
        </g>
        
        <!-- Right side summary -->
        <g transform="translate(770, 70)">
          <rect width="310" height="395" rx="16" fill="#0E1626" stroke="#10B981" stroke-width="1.5"/>
          <text x="25" y="40" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" font-weight="bold" fill="#10B981">Zero Recurring SaaS Fees</text>
          
          <g transform="translate(25, 75)">
            <text x="0" y="15" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">✓ 100% Code Ownership</text>
            <text x="0" y="35" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">No monthly user per-seat charges.</text>

            <text x="0" y="80" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">✓ On-Premise or Cloud</text>
            <text x="0" y="100" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Runs on your AWS / VPS servers securely.</text>

            <text x="0" y="145" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">✓ Custom Workflows</text>
            <text x="0" y="165" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Tailored specifically to your business rules.</text>

            <text x="0" y="210" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">✓ Local Support in Salem</text>
            <text x="0" y="230" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Direct in-person training &amp; handover.</text>
          </g>
        </g>
      </g>
    </svg>""",

    "deployment-hosting-preview": """<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#04101A"/>
          <stop offset="100%" stop-color="#080E1C"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <circle cx="980" cy="300" r="300" fill="#06B6D4" fill-opacity="0.08"/>

      <g transform="translate(80, 70)">
        <rect width="1120" height="580" rx="20" fill="#0C1322" stroke="#334155" stroke-width="2"/>
        <rect width="1120" height="46" rx="20" fill="#1E293B"/>
        <circle cx="28" cy="23" r="6" fill="#EF4444"/>
        <circle cx="48" cy="23" r="6" fill="#F59E0B"/>
        <circle cx="68" cy="23" r="6" fill="#10B981"/>
        <text x="560" y="27" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">https://console.cloudops.internal (Docker, Nginx &amp; Automated CI/CD)</text>

        <!-- Left Server Telemetry -->
        <g transform="translate(40, 70)">
          <rect width="480" height="400" rx="16" fill="#0A111F" stroke="#06B6D4" stroke-width="1.5"/>
          <rect width="480" height="40" rx="16" fill="#13213A"/>
          <text x="25" y="25" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#22D3EE">Production Node Health &amp; Telemetry</text>
          
          <g transform="translate(25, 65)">
            <text x="0" y="15" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">Cluster Status:</text>
            <text x="200" y="15" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">● 99.99% Uptime (All Healthy)</text>

            <text x="0" y="50" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">CPU Utilization:</text>
            <text x="200" y="50" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#22D3EE">14.2% across 8 cores</text>

            <text x="0" y="85" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">Memory Allocation:</text>
            <text x="200" y="85" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#22D3EE">3.8 GB / 16 GB</text>

            <text x="0" y="120" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">SSL / TLS Certificate:</text>
            <text x="200" y="120" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">Valid 280 Days (Auto-Renew)</text>

            <text x="0" y="155" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#94A3B8">DDoS Defenses:</text>
            <text x="200" y="155" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">Cloudflare Edge Shield Active</text>

            <!-- Server unit mock -->
            <rect y="190" width="430" height="120" rx="10" fill="#152136" stroke="#334155" stroke-width="1"/>
            <text x="20" y="225" font-family="monospace" font-size="12" fill="#38BDF8">docker ps -a --format "table &#123;&#123;.Names&#125;&#125; &#123;&#123;.Status&#125;&#125;"</text>
            <text x="20" y="250" font-family="monospace" font-size="11" fill="#10B981">techsasi_web_prod    Up 42 days (healthy)</text>
            <text x="20" y="270" font-family="monospace" font-size="11" fill="#10B981">techsasi_api_prod    Up 42 days (healthy)</text>
            <text x="20" y="290" font-family="monospace" font-size="11" fill="#10B981">postgres_db_cluster  Up 42 days (healthy)</text>
          </g>
        </g>
        
        <!-- Right CI/CD Pipeline Flow -->
        <g transform="translate(560, 70)">
          <rect width="520" height="400" rx="16" fill="#0A111F" stroke="#334155" stroke-width="1"/>
          <rect width="520" height="40" rx="16" fill="#13213A"/>
          <text x="25" y="25" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Zero-Downtime Automated CI/CD Pipeline</text>
          
          <g transform="translate(25, 65)">
            <!-- Pipeline Step 1 -->
            <rect width="470" height="60" rx="10" fill="#152136" stroke="#10B981" stroke-width="1"/>
            <circle cx="35" cy="30" r="14" fill="#10B981"/>
            <text x="35" y="35" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">✓</text>
            <text x="65" y="26" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">1. Git Commit &amp; PR Push</text>
            <text x="65" y="44" font-family="monospace" font-size="11" fill="#94A3B8">GitHub Webhook triggered automatically</text>

            <!-- Pipeline Step 2 -->
            <rect y="75" width="470" height="60" rx="10" fill="#152136" stroke="#10B981" stroke-width="1"/>
            <circle cx="35" cy="105" r="14" fill="#10B981"/>
            <text x="35" y="110" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">✓</text>
            <text x="65" y="101" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">2. Automated Tests &amp; Docker Build</text>
            <text x="65" y="119" font-family="monospace" font-size="11" fill="#94A3B8">Typecheck passed · 0 vulnerabilities</text>

            <!-- Pipeline Step 3 -->
            <rect y="150" width="470" height="60" rx="10" fill="#152136" stroke="#22D3EE" stroke-width="1.5"/>
            <circle cx="35" cy="180" r="14" fill="#22D3EE"/>
            <text x="35" y="185" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">3</text>
            <text x="65" y="176" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">3. Blue-Green Production Rollout</text>
            <text x="65" y="194" font-family="monospace" font-size="11" fill="#22D3EE">Zero second downtime traffic switch</text>

            <!-- Pipeline Step 4 -->
            <rect y="225" width="470" height="60" rx="10" fill="#152136" stroke="#10B981" stroke-width="1"/>
            <circle cx="35" cy="255" r="14" fill="#10B981"/>
            <text x="35" y="260" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">✓</text>
            <text x="65" y="251" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">4. Live Monitoring &amp; Alerts</text>
            <text x="65" y="269" font-family="monospace" font-size="11" fill="#94A3B8">Discord / Telegram uptime alerts configured</text>
          </g>
        </g>
      </g>
    </svg>""",

    "digital-marketing-preview": """<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18080C"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <circle cx="980" cy="280" r="280" fill="#F43F5E" fill-opacity="0.08"/>

      <g transform="translate(80, 70)">
        <rect width="1120" height="580" rx="20" fill="#0C1322" stroke="#334155" stroke-width="2"/>
        <rect width="1120" height="46" rx="20" fill="#1E293B"/>
        <circle cx="28" cy="23" r="6" fill="#EF4444"/>
        <circle cx="48" cy="23" r="6" fill="#F59E0B"/>
        <circle cx="68" cy="23" r="6" fill="#10B981"/>
        <text x="560" y="27" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">https://marketing.google.com/search-console (Organic SEO &amp; Local Salem #1)</text>

        <!-- Left Google Search Rank 1 Card -->
        <g transform="translate(40, 70)">
          <rect width="500" height="390" rx="16" fill="#0E1626" stroke="#F43F5E" stroke-width="1.5"/>
          <rect width="500" height="40" rx="16" fill="#1B1C2E"/>
          <text x="25" y="25" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FB7185">Google Search Result: Position #1</text>
          
          <g transform="translate(25, 60)">
            <text x="0" y="15" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">https://yourbusiness.com › services</text>
            <text x="0" y="42" font-family="DejaVu Sans, Arial, sans-serif" font-size="18" font-weight="bold" fill="#38BDF8">Your Business Name - Top Rated Service in Salem</text>
            <text x="0" y="68" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">★★★★★ 4.9 (148 Google Reviews) · Open 24/7</text>
            <text x="0" y="90" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#CBD5E1">Premium reliable software and services. Certified ISO standards and direct WhatsApp support in Salem &amp; Tamil Nadu.</text>

            <!-- Organic Growth Chart Box -->
            <rect y="125" width="450" height="175" rx="12" fill="#141E30" stroke="#334155" stroke-width="1"/>
            <text x="20" y="152" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Organic Clicks: +284% Month-Over-Month</text>
            
            <!-- Growth line graph -->
            <path d="M20 260 L90 240 L160 245 L230 200 L300 190 L370 150 L420 130" stroke="#10B981" stroke-width="4" fill="none"/>
            <circle cx="420" cy="130" r="6" fill="#10B981"/>
            <text x="320" y="275" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#10B981">Target Keywords #1</text>
          </g>
        </g>
        
        <!-- Right Meta Ads & WhatsApp Lead Pipeline -->
        <g transform="translate(580, 70)">
          <rect width="500" height="390" rx="16" fill="#0E1626" stroke="#334155" stroke-width="1"/>
          <rect width="500" height="40" rx="16" fill="#1B1C2E"/>
          <text x="25" y="25" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Paid Ads &amp; WhatsApp Lead Funnel</text>

          <g transform="translate(25, 65)">
            <rect width="210" height="85" rx="12" fill="#162238" stroke="#10B981" stroke-width="1"/>
            <text x="18" y="28" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Meta Ads ROAS</text>
            <text x="18" y="60" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="bold" fill="#10B981">4.2x ROI</text>

            <g transform="translate(230, 0)">
              <rect width="210" height="85" rx="12" fill="#162238" stroke="#F59E0B" stroke-width="1"/>
              <text x="18" y="28" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8">Cost Per Qualified Lead</text>
              <text x="18" y="60" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="bold" fill="#F59E0B">₹38 / lead</text>
            </g>
            
            <g transform="translate(0, 110)">
              <rect width="450" height="180" rx="14" fill="#141E30" stroke="#334155" stroke-width="1"/>
              <text x="20" y="32" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#E2E8F0">Inbound Lead Automation</text>
              <text x="20" y="55" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">1. User clicks targeted Instagram / Google Ad</text>
              <text x="20" y="80" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">2. Lands on ultra-fast sub-second mobile landing page</text>
              <text x="20" y="105" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">3. Taps direct 1-click WhatsApp chat</text>
              <text x="20" y="130" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#10B981">4. Pre-populated quote message sent to your business phone</text>
            </g>
          </g>
        </g>
      </g>
    </svg>""",

    "coaching-preview": """<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#140D04"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <circle cx="980" cy="280" r="280" fill="#F59E0B" fill-opacity="0.08"/>

      <g transform="translate(80, 70)">
        <rect width="1120" height="580" rx="20" fill="#0C1322" stroke="#334155" stroke-width="2"/>
        <rect width="1120" height="46" rx="20" fill="#1E293B"/>
        <circle cx="28" cy="23" r="6" fill="#EF4444"/>
        <circle cx="48" cy="23" r="6" fill="#F59E0B"/>
        <circle cx="68" cy="23" r="6" fill="#10B981"/>
        <text x="560" y="27" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">https://academy.techsasi.com (Hands-On Production Codebase Mentorship)</text>

        <!-- Left Real VS Code Mockup -->
        <g transform="translate(40, 70)">
          <rect width="520" height="390" rx="14" fill="#0D1117" stroke="#F59E0B" stroke-width="1.5"/>
          <rect width="520" height="35" rx="14" fill="#161B22"/>
          <text x="25" y="22" font-family="monospace" font-size="12" fill="#FBBF24">student_project.tsx - TechSasi Academy</text>
          
          <g transform="translate(25, 60)">
            <text x="0" y="0" font-family="monospace" font-size="12" fill="#7EE787">// Week 4: Building a Commercial Full-Stack Application</text>
            <text x="0" y="24" font-family="monospace" font-size="12" fill="#FF7B72">import</text>
            <text x="55" y="24" font-family="monospace" font-size="12" fill="#FFA657">&#123; useState, useEffect &#125;</text>
            <text x="220" y="24" font-family="monospace" font-size="12" fill="#FF7B72">from</text>
            <text x="260" y="24" font-family="monospace" font-size="12" fill="#A5D6FF">"react"</text>

            <text x="0" y="55" font-family="monospace" font-size="12" fill="#FF7B72">export function</text>
            <text x="120" y="55" font-family="monospace" font-size="12" fill="#D2A8FF">BillingDashboard</text>
            <text x="250" y="55" font-family="monospace" font-size="12" fill="#FFA657">() &#123;</text>

            <text x="20" y="80" font-family="monospace" font-size="12" fill="#79C0FF">  const [invoices, setInvoices] = useState([]);</text>
            <text x="20" y="105" font-family="monospace" font-size="12" fill="#79C0FF">  // Real PostgreSQL API integration</text>
            <text x="20" y="130" font-family="monospace" font-size="12" fill="#FFA657">  return (</text>
            <text x="40" y="155" font-family="monospace" font-size="12" fill="#7EE787">    &lt;ProductionUI data=&#123;invoices&#125; mentor="Sasi Kumar" /&gt;</text>
            <text x="20" y="180" font-family="monospace" font-size="12" fill="#FFA657">  );</text>
            <text x="0" y="205" font-family="monospace" font-size="12" fill="#FFA657">&#125;</text>
            
            <rect y="230" width="470" height="70" rx="8" fill="#1C2128" stroke="#30363D" stroke-width="1"/>
            <text x="15" y="255" font-family="monospace" font-size="12" fill="#58A6FF">Terminal: Git Push origin main</text>
            <text x="15" y="278" font-family="monospace" font-size="11" fill="#7EE787">✓ Pull Request #14 Approved by Senior Mentor (Sasi Kumar)</text>
          </g>
        </g>
        
        <!-- Right Mentorship Outcomes Box -->
        <g transform="translate(600, 70)">
          <rect width="480" height="390" rx="16" fill="#0E1626" stroke="#334155" stroke-width="1"/>
          <rect width="480" height="40" rx="16" fill="#1A2030"/>
          <text x="25" y="25" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#FBBF24">Verified Developer Career Outcomes</text>

          <g transform="translate(25, 65)">
            <rect width="430" height="70" rx="10" fill="#152136" stroke="#10B981" stroke-width="1"/>
            <text x="20" y="28" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#10B981">1. Live GitHub Commercial Portfolio</text>
            <text x="20" y="48" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Students graduate with 3+ live deployed production apps, not empty certificates.</text>

            <rect y="85" width="430" height="70" rx="10" fill="#152136" stroke="#38BDF8" stroke-width="1"/>
            <text x="20" y="113" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">2. 1-on-1 Direct Senior Mentorship</text>
            <text x="20" y="133" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Direct code reviews from Sasi Kumar. Overcome bugs and learn clean design patterns.</text>

            <rect y="170" width="430" height="70" rx="10" fill="#152136" stroke="#F59E0B" stroke-width="1"/>
            <text x="20" y="198" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" font-weight="bold" fill="#F59E0B">3. Salem In-Person &amp; Online Hybrid</text>
            <text x="20" y="218" font-family="DejaVu Sans, Arial, sans-serif" font-size="11" fill="#94A3B8">Flexible class timings for college students, job seekers, and career switchers.</text>

            <rect y="255" width="430" height="50" rx="10" fill="#152136"/>
            <text x="20" y="285" font-family="DejaVu Sans, Arial, sans-serif" font-size="12" font-weight="bold" fill="#E2E8F0">Interview Prep, Resume Optimization &amp; Placement Support</text>
          </g>
        </g>
      </g>
    </svg>"""
}

for name, svg in previews.items():
    svg_file = f"/tmp/{name}.svg"
    png_file = f"{OUT_DIR}/{name}.png"
    with open(svg_file, "w") as f:
        f.write(svg)
    subprocess.run(["convert", svg_file, png_file], check=True)
    print(f"Created showcase preview: {png_file}")

print("All PNG icons and showcase previews created successfully!")

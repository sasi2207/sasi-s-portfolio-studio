#!/usr/bin/env python3
import os
import subprocess

OUT_DIR = "/public/images/services"
ICON_DIR = "/public/images/services/icons"

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(ICON_DIR, exist_ok=True)

# 1. GENERATE ICONS (256x256 high-resolution PNG with transparent background and rich styling)
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
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#F59E0B" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#F59E0B" stroke-width="4" stroke-opacity="0.4"/>
      <!-- Window Frame -->
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <rect x="36" y="44" width="184" height="40" rx="24" fill="#1E293B"/>
      <circle cx="62" cy="64" r="7" fill="#EF4444"/>
      <circle cx="82" cy="64" r="7" fill="#F59E0B"/>
      <circle cx="102" cy="64" r="7" fill="#10B981"/>
      <rect x="130" y="56" width="70" height="16" rx="8" fill="#334155" fill-opacity="0.6"/>
      <!-- Lightning bolt & Speed -->
      <path d="M142 96 L98 152 H134 L114 204 L168 136 H126 Z" fill="url(#amberGrad)" filter="url(#glow)"/>
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
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#38BDF8" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#38BDF8" stroke-width="4" stroke-opacity="0.4"/>
      <!-- Database & Gear Nodes -->
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <!-- Dynamic Database cylinders -->
      <ellipse cx="128" cy="80" rx="50" ry="16" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
      <path d="M78 80 V110 C78 120 100 126 128 126 C156 126 178 120 178 110 V80" fill="none" stroke="#38BDF8" stroke-width="3"/>
      <path d="M78 110 V140 C78 150 100 156 128 156 C156 156 178 150 178 140 V110" fill="none" stroke="#38BDF8" stroke-width="3"/>
      <!-- API Node connectors -->
      <circle cx="70" cy="180" r="16" fill="#2563EB" filter="url(#glow)"/>
      <circle cx="186" cy="180" r="16" fill="#38BDF8" filter="url(#glow)"/>
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
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#EA580C" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#FB923C" stroke-width="4" stroke-opacity="0.4"/>
      <!-- Shopping Cart & Bag -->
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <!-- Bag handle -->
      <path d="M104 90 C104 74 114 62 128 62 C142 62 152 74 152 90" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
      <!-- Bag body -->
      <rect x="80" y="86" width="96" height="106" rx="16" fill="url(#orangeGrad)" filter="url(#glow)"/>
      <!-- Rupee symbol / checkmark -->
      <text x="128" y="152" font-family="Arial, sans-serif" font-size="44" font-weight="bold" fill="#FFFFFF" text-anchor="middle">₹</text>
      <!-- Small floating tag -->
      <circle cx="186" cy="80" r="18" fill="#10B981" stroke="#0F172A" stroke-width="3"/>
      <text x="186" y="86" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">%</text>
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
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#8B5CF6" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#8B5CF6" stroke-width="4" stroke-opacity="0.4"/>
      <!-- Smartphone silhouette -->
      <rect x="76" y="38" width="104" height="180" rx="22" fill="#090D16" stroke="url(#purpleGrad)" stroke-width="4" filter="url(#glow)"/>
      <!-- Dynamic Island / Speaker -->
      <rect x="110" y="48" width="36" height="8" rx="4" fill="#334155"/>
      <!-- App Grid UI inside phone -->
      <rect x="92" y="70" width="32" height="32" rx="8" fill="#8B5CF6"/>
      <rect x="132" y="70" width="32" height="32" rx="8" fill="#38BDF8"/>
      <rect x="92" y="112" width="32" height="32" rx="8" fill="#F59E0B"/>
      <rect x="132" y="112" width="32" height="32" rx="8" fill="#10B981"/>
      <!-- Home indicator -->
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
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#10B981" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#10B981" stroke-width="4" stroke-opacity="0.4"/>
      <!-- Enterprise Dashboard & Chart -->
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <!-- Growth Bars -->
      <rect x="66" y="140" width="22" height="46" rx="4" fill="#334155"/>
      <rect x="98" y="116" width="22" height="70" rx="4" fill="#3B82F6"/>
      <rect x="130" y="94" width="22" height="92" rx="4" fill="#F59E0B"/>
      <rect x="162" y="70" width="22" height="116" rx="4" fill="url(#emeraldGrad)" filter="url(#glow)"/>
      <!-- Trendline arrow -->
      <path d="M60 146 L100 110 L136 122 L178 64" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round"/>
      <polygon points="174,62 186,62 186,74" fill="#10B981"/>
    </svg>""",

    "deployment-hosting-icon": """<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#22D3EE"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#06B6D4" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#06B6D4" stroke-width="4" stroke-opacity="0.4"/>
      <!-- Server Rack Unit -->
      <rect x="48" y="52" width="160" height="42" rx="10" fill="#0B132B" stroke="#06B6D4" stroke-width="3" filter="url(#glow)"/>
      <circle cx="70" cy="73" r="5" fill="#10B981"/>
      <circle cx="86" cy="73" r="5" fill="#06B6D4"/>
      <rect x="110" y="69" width="78" height="8" rx="4" fill="#334155"/>

      <rect x="48" y="106" width="160" height="42" rx="10" fill="#0B132B" stroke="#06B6D4" stroke-width="3" filter="url(#glow)"/>
      <circle cx="70" cy="127" r="5" fill="#10B981"/>
      <circle cx="86" cy="127" r="5" fill="#06B6D4"/>
      <rect x="110" y="123" width="78" height="8" rx="4" fill="#334155"/>

      <rect x="48" y="160" width="160" height="42" rx="10" fill="#0B132B" stroke="#06B6D4" stroke-width="3" filter="url(#glow)"/>
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
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#F43F5E" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#F43F5E" stroke-width="4" stroke-opacity="0.4"/>
      <!-- Megaphone / Growth Rocket -->
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <!-- Megaphone Body -->
      <path d="M72 110 L132 86 V158 L72 134 Z" fill="url(#roseGrad)" filter="url(#glow)"/>
      <ellipse cx="132" cy="122" rx="12" ry="36" fill="#FB7185"/>
      <path d="M92 134 L96 166 H80 L76 134 Z" fill="#94A3B8"/>
      <!-- Sound waves -->
      <path d="M158 100 C172 110 172 134 158 144" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
      <path d="M174 86 C196 102 196 142 174 158" fill="none" stroke="#F43F5E" stroke-width="5" stroke-linecap="round"/>
      <circle cx="186" cy="74" r="8" fill="#10B981"/>
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
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#F59E0B" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect width="256" height="256" rx="56" fill="url(#bgGrad)" stroke="#F59E0B" stroke-width="4" stroke-opacity="0.4"/>
      <!-- Graduation Cap & Terminal Code -->
      <rect x="36" y="44" width="184" height="168" rx="24" fill="#0A0F1D" stroke="#334155" stroke-width="3"/>
      <!-- Graduation Cap Diamond -->
      <polygon points="128,70 196,96 128,122 60,96" fill="url(#goldGrad)" filter="url(#glow)"/>
      <path d="M86 112 V142 C86 156 105 166 128 166 C151 166 170 156 170 142 V112" fill="none" stroke="#D97706" stroke-width="4"/>
      <!-- Tassel -->
      <path d="M184 102 V138" stroke="#FDE68A" stroke-width="3" stroke-linecap="round"/>
      <circle cx="184" cy="142" r="4" fill="#FDE68A"/>
      <!-- Terminal Tag: < / > -->
      <text x="128" y="198" font-family="monospace" font-size="20" font-weight="bold" fill="#38BDF8" text-anchor="middle">&lt;CODE /&gt;</text>
    </svg>"""
}

for name, svg_content in icons.items():
    svg_path = f"/tmp/{name}.svg"
    png_path = f"{ICON_DIR}/{name}.png"
    with open(svg_path, "w") as f:
        f.write(svg_content)
    subprocess.run(["convert", "-background", "none", svg_path, png_path], check=True)
    print(f"Generated icon: {png_path}")

print("All icons successfully created!")

#!/usr/bin/env python3
import os
import subprocess

TARGET_DIR = "/app/applet/public/images/services"
ICON_DIR = os.path.join(TARGET_DIR, "icons")

os.makedirs(TARGET_DIR, exist_ok=True)
os.makedirs(ICON_DIR, exist_ok=True)

print("Generating 8 High-Res PNG Icons (256x256)...")

# 1. STATIC WEB ICON
cmd_static_icon = [
    "convert", "-size", "256x256", "xc:none",
    "-fill", "#0F172A", "-stroke", "#F59E0B", "-strokewidth", "4", "-draw", "roundrectangle 10,10 246,246 40,40",
    "-fill", "#1E293B", "-stroke", "none", "-draw", "roundrectangle 30,30 226,72 15,15",
    "-fill", "#EF4444", "-draw", "circle 50,51 50,57",
    "-fill", "#F59E0B", "-draw", "circle 70,51 70,57",
    "-fill", "#10B981", "-draw", "circle 90,51 90,57",
    "-fill", "#334155", "-draw", "roundrectangle 110,43 210,59 6,6",
    "-fill", "#F59E0B", "-stroke", "#EA580C", "-strokewidth", "2", "-draw", "polygon 145,80 90,150 135,150 115,215 175,135 125,135",
    "-fill", "#10B981", "-draw", "circle 195,190 195,205",
    "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "south", "-annotate", "+0+18", "STATIC WEB",
    os.path.join(ICON_DIR, "static-web.png")
]
subprocess.run(cmd_static_icon, check=True)

# 2. DYNAMIC WEB ICON
cmd_dynamic_icon = [
    "convert", "-size", "256x256", "xc:none",
    "-fill", "#090D16", "-stroke", "#38BDF8", "-strokewidth", "4", "-draw", "roundrectangle 10,10 246,246 40,40",
    "-fill", "#1E293B", "-stroke", "#38BDF8", "-strokewidth", "2", "-draw", "ellipse 128,75 55,18 0,360",
    "-fill", "none", "-stroke", "#38BDF8", "-strokewidth", "3", "-draw", "line 73,75 73,115 line 183,75 183,115",
    "-fill", "none", "-stroke", "#38BDF8", "-strokewidth", "3", "-draw", "ellipse 128,115 55,18 0,180",
    "-fill", "none", "-stroke", "#38BDF8", "-strokewidth", "3", "-draw", "line 73,115 73,155 line 183,115 183,155",
    "-fill", "none", "-stroke", "#38BDF8", "-strokewidth", "3", "-draw", "ellipse 128,155 55,18 0,180",
    "-fill", "#2563EB", "-stroke", "#38BDF8", "-strokewidth", "2", "-draw", "circle 70,195 70,210",
    "-fill", "#38BDF8", "-stroke", "#2563EB", "-strokewidth", "2", "-draw", "circle 186,195 186,210",
    "-fill", "none", "-stroke", "#38BDF8", "-strokewidth", "3", "-draw", "line 85,195 171,195",
    "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "south", "-annotate", "+0+18", "DYNAMIC WEB",
    os.path.join(ICON_DIR, "dynamic-web.png")
]
subprocess.run(cmd_dynamic_icon, check=True)

# 3. ECOMMERCE ICON
cmd_ecommerce_icon = [
    "convert", "-size", "256x256", "xc:none",
    "-fill", "#110A05", "-stroke", "#FB923C", "-strokewidth", "4", "-draw", "roundrectangle 10,10 246,246 40,40",
    "-fill", "none", "-stroke", "#F59E0B", "-strokewidth", "5", "-draw", "ellipse 128,88 26,22 180,360",
    "-fill", "#EA580C", "-stroke", "#FB923C", "-strokewidth", "2", "-draw", "roundrectangle 75,85 181,195 16,16",
    "-fill", "#FFFFFF", "-pointsize", "44", "-gravity", "center", "-annotate", "+0+10", "₹",
    "-fill", "#10B981", "-stroke", "#0F172A", "-strokewidth", "3", "-draw", "circle 190,80 190,95",
    "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "south", "-annotate", "+0+18", "E-COMMERCE",
    os.path.join(ICON_DIR, "ecommerce.png")
]
subprocess.run(cmd_ecommerce_icon, check=True)

# 4. MOBILE APP ICON
cmd_mobile_icon = [
    "convert", "-size", "256x256", "xc:none",
    "-fill", "#120B24", "-stroke", "#8B5CF6", "-strokewidth", "4", "-draw", "roundrectangle 10,10 246,246 40,40",
    "-fill", "#090D16", "-stroke", "#A855F7", "-strokewidth", "3", "-draw", "roundrectangle 76,35 180,218 22,22",
    "-fill", "#334155", "-stroke", "none", "-draw", "roundrectangle 108,45 148,53 4,4",
    "-fill", "#8B5CF6", "-draw", "roundrectangle 92,68 124,100 8,8",
    "-fill", "#38BDF8", "-draw", "roundrectangle 132,68 164,100 8,8",
    "-fill", "#F59E0B", "-draw", "roundrectangle 92,108 124,140 8,8",
    "-fill", "#10B981", "-draw", "roundrectangle 132,108 164,140 8,8",
    "-fill", "#94A3B8", "-draw", "roundrectangle 108,202 148,206 2,2",
    "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "south", "-annotate", "+0+18", "MOBILE APPS",
    os.path.join(ICON_DIR, "mobile-app.png")
]
subprocess.run(cmd_mobile_icon, check=True)

# 5. BUSINESS WEB ICON
cmd_business_icon = [
    "convert", "-size", "256x256", "xc:none",
    "-fill", "#06130D", "-stroke", "#10B981", "-strokewidth", "4", "-draw", "roundrectangle 10,10 246,246 40,40",
    "-fill", "#1E293B", "-stroke", "none", "-draw", "roundrectangle 60,150 86,196 4,4",
    "-fill", "#3B82F6", "-draw", "roundrectangle 96,125 122,196 4,4",
    "-fill", "#F59E0B", "-draw", "roundrectangle 132,95 158,196 4,4",
    "-fill", "#10B981", "-stroke", "#34D399", "-strokewidth", "1", "-draw", "roundrectangle 168,65 194,196 4,4",
    "-fill", "none", "-stroke", "#10B981", "-strokewidth", "4", "-draw", "line 60,155 100,120 line 100,120 135,130 line 135,130 185,60",
    "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "south", "-annotate", "+0+18", "CUSTOM ERP",
    os.path.join(ICON_DIR, "business-web.png")
]
subprocess.run(cmd_business_icon, check=True)

# 6. DEPLOYMENT & HOSTING ICON
cmd_hosting_icon = [
    "convert", "-size", "256x256", "xc:none",
    "-fill", "#06101F", "-stroke", "#06B6D4", "-strokewidth", "4", "-draw", "roundrectangle 10,10 246,246 40,40",
    "-fill", "#0B132B", "-stroke", "#06B6D4", "-strokewidth", "2", "-draw", "roundrectangle 45,48 211,92 10,10",
    "-fill", "#10B981", "-stroke", "none", "-draw", "circle 68,70 68,75",
    "-fill", "#06B6D4", "-draw", "circle 86,70 86,75",
    "-fill", "#334155", "-draw", "roundrectangle 110,66 190,74 4,4",
    "-fill", "#0B132B", "-stroke", "#06B6D4", "-strokewidth", "2", "-draw", "roundrectangle 45,102 211,146 10,10",
    "-fill", "#10B981", "-stroke", "none", "-draw", "circle 68,124 68,129",
    "-fill", "#06B6D4", "-draw", "circle 86,124 86,129",
    "-fill", "#334155", "-draw", "roundrectangle 110,120 190,128 4,4",
    "-fill", "#0B132B", "-stroke", "#06B6D4", "-strokewidth", "2", "-draw", "roundrectangle 45,156 211,200 10,10",
    "-fill", "#10B981", "-stroke", "none", "-draw", "circle 68,178 68,183",
    "-fill", "#F59E0B", "-draw", "circle 86,178 86,183",
    "-fill", "#334155", "-draw", "roundrectangle 110,174 190,182 4,4",
    "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "south", "-annotate", "+0+18", "DEVOPS CLOUD",
    os.path.join(ICON_DIR, "deployment-hosting.png")
]
subprocess.run(cmd_hosting_icon, check=True)

# 7. DIGITAL MARKETING ICON
cmd_marketing_icon = [
    "convert", "-size", "256x256", "xc:none",
    "-fill", "#19080E", "-stroke", "#F43F5E", "-strokewidth", "4", "-draw", "roundrectangle 10,10 246,246 40,40",
    "-fill", "#E11D48", "-stroke", "#FB7185", "-strokewidth", "2", "-draw", "polygon 68,105 135,78 135,160 68,133",
    "-fill", "#FB7185", "-stroke", "none", "-draw", "ellipse 135,119 12,41 0,360",
    "-fill", "#94A3B8", "-draw", "polygon 90,133 94,170 76,170 72,133",
    "-fill", "none", "-stroke", "#F59E0B", "-strokewidth", "4", "-draw", "bezier 155,95 168,105 168,135 155,145",
    "-fill", "none", "-stroke", "#F43F5E", "-strokewidth", "4", "-draw", "bezier 172,80 192,100 192,140 172,160",
    "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "south", "-annotate", "+0+18", "SEO & ADS",
    os.path.join(ICON_DIR, "digital-marketing.png")
]
subprocess.run(cmd_marketing_icon, check=True)

# 8. COACHING & ACADEMY ICON
cmd_coaching_icon = [
    "convert", "-size", "256x256", "xc:none",
    "-fill", "#140C04", "-stroke", "#F59E0B", "-strokewidth", "4", "-draw", "roundrectangle 10,10 246,246 40,40",
    "-fill", "#D97706", "-stroke", "#FCD34D", "-strokewidth", "2", "-draw", "polygon 128,65 198,92 128,119 58,92",
    "-fill", "none", "-stroke", "#D97706", "-strokewidth", "4", "-draw", "line 84,108 84,138 line 172,108 172,138",
    "-fill", "none", "-stroke", "#D97706", "-strokewidth", "4", "-draw", "ellipse 128,138 44,18 0,180",
    "-fill", "none", "-stroke", "#FDE68A", "-strokewidth", "3", "-draw", "line 186,98 186,134",
    "-fill", "#FDE68A", "-stroke", "none", "-draw", "circle 186,137 186,141",
    "-fill", "#38BDF8", "-pointsize", "18", "-gravity", "center", "-annotate", "+0+58", "<CODE />",
    "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "south", "-annotate", "+0+18", "IT COACHING",
    os.path.join(ICON_DIR, "coaching.png")
]
subprocess.run(cmd_coaching_icon, check=True)

print("Icons created successfully! Now generating 8 16:9 Showcase Banner PNGs (1280x720)...")

# Helper to build a showcase banner
def build_showcase(filename, title, subtitle, color_accent, badge_text, metric1, metric1_val, metric2, metric2_val, tech_pills):
    out_file = os.path.join(TARGET_DIR, filename)
    cmd = [
        "convert", "-size", "1280x720", "xc:#090D16",
        # Main browser window
        "-fill", "#0C1322", "-stroke", "#334155", "-strokewidth", "2", "-draw", "roundrectangle 70,50 1210,670 20,20",
        # Window Chrome bar
        "-fill", "#1E293B", "-stroke", "none", "-draw", "roundrectangle 70,50 1210,98 20,20",
        "-fill", "#EF4444", "-draw", "circle 100,74 100,80",
        "-fill", "#F59E0B", "-draw", "circle 122,74 122,80",
        "-fill", "#10B981", "-draw", "circle 144,74 144,80",
        # Chrome URL bar
        "-fill", "#0F172A", "-stroke", "#334155", "-strokewidth", "1", "-draw", "roundrectangle 240,60 960,88 8,8",
        "-fill", "#94A3B8", "-pointsize", "13", "-gravity", "north", "-annotate", "+0+67", f"https://techsasi.com/services/{filename.replace('-preview.png','')} (Verified A+)",
        
        # Left Content Section
        "-fill", color_accent, "-stroke", "none", "-draw", "roundrectangle 110,130 330,160 15,15",
        "-fill", "#090D16", "-pointsize", "12", "-gravity", "northwest", "-annotate", "+125+138", badge_text,
        "-fill", "#FFFFFF", "-pointsize", "34", "-gravity", "northwest", "-annotate", "+110+180", title,
        "-fill", "#94A3B8", "-pointsize", "16", "-gravity", "northwest", "-annotate", "+110+230", subtitle,

        # Metrics Panels
        "-fill", "#151D2F", "-stroke", "#334155", "-strokewidth", "1", "-draw", "roundrectangle 110,290 320,380 14,14",
        "-fill", "#94A3B8", "-pointsize", "13", "-gravity", "northwest", "-annotate", "+130+310", metric1,
        "-fill", color_accent, "-pointsize", "28", "-gravity", "northwest", "-annotate", "+130+335", metric1_val,

        "-fill", "#151D2F", "-stroke", "#334155", "-strokewidth", "1", "-draw", "roundrectangle 340,290 550,380 14,14",
        "-fill", "#94A3B8", "-pointsize", "13", "-gravity", "northwest", "-annotate", "+360+310", metric2,
        "-fill", "#10B981", "-pointsize", "28", "-gravity", "northwest", "-annotate", "+360+335", metric2_val,

        # Right Showcase Terminal / Blueprint Container
        "-fill", "#090D18", "-stroke", color_accent, "-strokewidth", "2", "-draw", "roundrectangle 600,130 1170,630 18,18",
        "-fill", "#172136", "-stroke", "none", "-draw", "roundrectangle 600,130 1170,175 18,18",
        "-fill", "#EF4444", "-draw", "circle 625,152 625,157",
        "-fill", "#F59E0B", "-draw", "circle 643,152 643,157",
        "-fill", "#10B981", "-draw", "circle 661,152 661,157",
        "-fill", "#FFFFFF", "-pointsize", "14", "-gravity", "northwest", "-annotate", "+685+144", f"Production Spec: {title}",

        # Tech Stack Tag badges
        "-fill", "#152033", "-stroke", "#38BDF8", "-strokewidth", "1", "-draw", "roundrectangle 630,200 1140,260 10,10",
        "-fill", "#38BDF8", "-pointsize", "14", "-gravity", "northwest", "-annotate", "+650+222", f"Core Stack:  {tech_pills}",

        # Spec Checklist Row 1
        "-fill", "#10B981", "-pointsize", "16", "-gravity", "northwest", "-annotate", "+630+295", "● 100% Production Ready Source Code & Free Full Handover",
        # Spec Checklist Row 2
        "-fill", "#10B981", "-pointsize", "16", "-gravity", "northwest", "-annotate", "+630+345", "● Mobile & Tablet Responsive Fluid Layouts (60 FPS Native Touch)",
        # Spec Checklist Row 3
        "-fill", "#10B981", "-pointsize", "16", "-gravity", "northwest", "-annotate", "+630+395", "● Zero Security Vulnerabilities & Edge SSL Included",
        # Spec Checklist Row 4
        "-fill", "#10B981", "-pointsize", "16", "-gravity", "northwest", "-annotate", "+630+445", "● Instant WhatsApp Chat, Lead Forms & Contact Integration",
        # Spec Checklist Row 5
        "-fill", "#10B981", "-pointsize", "16", "-gravity", "northwest", "-annotate", "+630+495", "● Salem Local Engineering Support with Guaranteed Fast Turnaround",

        # Bottom Left CTA Pill
        "-fill", color_accent, "-stroke", "none", "-draw", "roundrectangle 110,420 330,470 12,12",
        "-fill", "#090D16", "-pointsize", "14", "-gravity", "northwest", "-annotate", "+140+437", "Get Instant Scope",
        
        "-fill", "#1E293B", "-stroke", "#475569", "-strokewidth", "1", "-draw", "roundrectangle 350,420 550,470 12,12",
        "-fill", "#E2E8F0", "-pointsize", "14", "-gravity", "northwest", "-annotate", "+380+437", "WhatsApp Chat",

        out_file
    ]
    subprocess.run(cmd, check=True)
    print(f"Generated preview: {out_file}")

build_showcase(
    "static-web-preview.png",
    "Static Website Development",
    "Engineered for sub-second loads, 0 maintenance, and 98+ Google Lighthouse.",
    "#F59E0B",
    "LIGHTHOUSE 100 / SUB-SECOND",
    "First Paint:", "<0.8s FCP",
    "Google Score:", "99/100",
    "React 19  ·  Next.js  ·  Tailwind CSS  ·  Cloudflare Edge CDN"
)

build_showcase(
    "dynamic-web-preview.png",
    "Dynamic Web Applications",
    "Data-driven portals, real-time sync, and scalable full-stack relational APIs.",
    "#38BDF8",
    "FULL-STACK REACT & NODE.JS",
    "API Latency:", "18ms avg",
    "Database Sync:", "Real-Time",
    "React SPA  ·  Express API  ·  PostgreSQL  ·  Redis  ·  TypeScript"
)

build_showcase(
    "ecommerce-preview.png",
    "E-Commerce Solutions",
    "High-converting storefronts with 1-click checkout, UPI QR, and GST invoices.",
    "#FB923C",
    "RAZORPAY & PHONEPE INTEGRATED",
    "Checkout Steps:", "< 3 Steps",
    "GST Tax Invoicing:", "Automated",
    "Next.js  ·  Razorpay UPI  ·  Stripe  ·  PostgreSQL  ·  Shiprocket"
)

build_showcase(
    "mobile-app-preview.png",
    "Mobile App Development",
    "Native iOS & Android apps with 60 FPS smooth gestures and offline sync.",
    "#A855F7",
    "IOS & ANDROID SINGLE CODEBASE",
    "Framerate:", "60 FPS Fluid",
    "Store Status:", "100% Ready",
    "Flutter  ·  React Native  ·  Expo  ·  SQLite  ·  Firebase  ·  REST"
)

build_showcase(
    "business-web-preview.png",
    "Custom Business ERP & CRM",
    "Streamline daily billing, stock, and CRM workflows without recurring SaaS fees.",
    "#10B981",
    "ENTERPRISE ERP & GST BILLING",
    "Monthly Volume:", "Unlimited",
    "Code Ownership:", "100% Client",
    "Custom ERP  ·  Role-Based RBAC  ·  Audit Trail  ·  PostgreSQL"
)

build_showcase(
    "deployment-hosting-preview.png",
    "DevOps Deployment & Hosting",
    "High-availability server infrastructure with Docker, CI/CD, and SSL.",
    "#06B6D4",
    "ZERO-DOWNTIME CI/CD DEPLOYMENT",
    "Server Uptime:", "99.99%",
    "SSL Security:", "A+ Grade",
    "AWS EC2  ·  Docker  ·  Nginx  ·  GitHub Actions  ·  Cloudflare"
)

build_showcase(
    "digital-marketing-preview.png",
    "Digital Marketing & Local SEO",
    "Rank #1 on Google in Salem, drive high-intent WhatsApp leads with targeted ads.",
    "#F43F5E",
    "TOP GOOGLE RANKING IN SALEM",
    "Organic Growth:", "+280%",
    "Meta Ads ROAS:", "4.2x ROI",
    "Technical SEO  ·  Google Search Console  ·  Meta Ads  ·  GMB #1"
)

build_showcase(
    "coaching-preview.png",
    "IT Coaching & Mentorship",
    "Master React, TypeScript, and full-stack coding through production code reviews.",
    "#FBBF24",
    "1-ON-1 PRODUCTION CODE REVIEW",
    "Practical Coding:", "100%",
    "GitHub PRs:", "Verified",
    "React 19  ·  TypeScript  ·  Node.js  ·  PostgreSQL  ·  Salem Campus"
)

print("All 8 icons and 8 showcase banners generated successfully!")

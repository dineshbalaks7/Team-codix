# Team Codix — Software Studio

> **WE BUILD DIGITAL PRODUCTS**  
> Premium, production-ready website for **Team Codix**, an elite software studio crafting high-converting websites, autonomous AI chatbots, custom software, and mobile apps.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Sora / Plus Jakarta Sans & Inter via `next/font`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Delivery**: [Resend](https://resend.com/)
- **Optimization**: `next/image` and standard SEO meta & Open Graph cards

---

## 📦 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+ / v22+
- **npm** (or pnpm / yarn)

### 2. Installation
```bash
git clone https://github.com/your-org/team-codix.git
cd team-codix
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local` and configure your keys:
```bash
cp .env.example .env.local
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL for metadata & sitemap | `https://teamcodix.com` |
| `RESEND_API_KEY` | Resend API key for contact form emails | `re_...` |
| `CONTACT_TO_EMAIL` | Recipient email for form inquiries | `codix.team26@gmail.com` |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend | `Team Codix <onboarding@resend.dev>` |

> *Note: If `RESEND_API_KEY` is omitted during local development, form submissions will gracefully log inquiry details to the console.*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

This repository is pre-configured for zero-configuration deployment on Vercel:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Team Codix studio website"
   git remote add origin https://github.com/<your-username>/team-codix.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New Project** and select your `team-codix` repository.
   - Framework Preset will automatically detect **Next.js**.

3. **Configure Environment Variables in Vercel**:
   - In the project settings, add the following variables:
     - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com` (or your Vercel deployment URL)
     - `RESEND_API_KEY`: Your Resend API key (`re_...`)
     - `CONTACT_TO_EMAIL`: `codix.team26@gmail.com`
     - `CONTACT_FROM_EMAIL`: `Team Codix <onboarding@resend.dev>` (or your verified domain address)

4. **Deploy**:
   - Click **Deploy**. Vercel will run `npm run build` and launch the project globally on edge network.

---

## 🎨 Brand Identity Guidelines

- **Primary Colors**:
  - Deep Navy: `#12264F`
  - Royal Blue: `#0B6BE6`
  - Dark Navy: `#06357A`
  - Light Blue: `#C5DAF8`
  - White: `#FFFFFF`
  - Cool Gray: `#F8FAFC`, `#F1F5F9`, `#E2E8F0`, `#CBD5E1`
- **Contact Details**:
  - Email: `codix.team26@gmail.com`
  - Phone / WhatsApp: `+91 91595 40314`
  - WhatsApp Link: `https://wa.me/919159540314`
  - Instagram: `@team.codix` (`https://www.instagram.com/team.codix`)
- **Logo Assets**:
  - Hero & Footer: Full logo (`/public/logo.png` & `/public/logo-horizontal-white.png`)
  - Navbar: Horizontal logo (`/public/logo-horizontal.png`)
  - Favicon: C mark (`/public/favicon.ico`, `/public/favicon.png`, `/public/icon.png`)

---

## 📄 License
© Team Codix. All rights reserved.

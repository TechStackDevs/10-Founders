# Deployment Guide - Vercel

This guide will help you deploy the Tech Stack Devs website to Vercel with your custom domain.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (easiest)

2. **Import Your Repository**

   - Click "Add New..." → "Project"
   - Import your GitHub repository: `schlajo/10-Founders`
   - Vercel will auto-detect it's an Astro project

3. **Configure Project Settings**

   - **Framework Preset:** Astro (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (~1-2 minutes)
   - You'll get a URL like: `10-founders-xyz.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No (first time)
# - Project name? tech-stack-devs (or your choice)
# - Directory? ./
```

## 🌐 Adding Your Custom Domain (TechStackDevs.com)

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Domains**
3. Enter your domain: `techstackdevs.com`
4. Click **Add**

### Step 2: Configure DNS Records

Vercel will show you the DNS records you need to add. You'll need to add these at your domain registrar (where you bought TechStackDevs.com):

**Option A: Using Apex Domain (techstackdevs.com)**

Add these DNS records at your registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: A
Name: @
Value: 76.223.126.88
```

**Option B: Using www subdomain (www.techstackdevs.com)**

Add this DNS record:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Recommended:** Add both! This way both `techstackdevs.com` and `www.techstackdevs.com` work.

### Step 3: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate (usually much faster)
- Vercel will show the status in the dashboard
- Once it shows "Valid Configuration", you're done!

### Step 4: SSL Certificate (Automatic)

Vercel automatically provisions SSL certificates for your domain. No action needed - it happens automatically once DNS is configured.

## 🔄 Continuous Deployment

Once connected, every push to `main` branch will automatically:

1. Trigger a new build
2. Deploy to production
3. Update your live site

**No manual deployment needed!**

## 📝 Environment Variables (if needed later)

If you add environment variables:

1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy for changes to take effect

## 🐛 Troubleshooting

**Build fails?**

- Check build logs in Vercel dashboard
- Make sure `npm install` works locally
- Verify Node.js version (Vercel uses Node 18+ by default)

**Domain not working?**

- Check DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)
- Verify domain is added in Vercel dashboard

**Need help?**

- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Astro deployment: [docs.astro.build/en/guides/deploy/vercel](https://docs.astro.build/en/guides/deploy/vercel)

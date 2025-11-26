# Deployment Guide for Csouth Technologies Landing Page

This guide will help you deploy the landing page to your server and set up the GitHub repository.

## 📋 Prerequisites

Before deploying, ensure you have:

- [ ] GitHub account with repository access
- [ ] Server access (SSH credentials)
- [ ] Domain name (optional but recommended)
- [ ] Node.js 18+ installed on the server

---

## 1️⃣ GitHub Repository Setup

### Step 1: Initialize Git (if not already done)

The project already has a git repository initialized. Verify:

```bash
cd "d:\hur\projects\victor\CSouth-Landing Page\csouth-landing"
git status
```

### Step 2: Add All Files

```bash
git add .
git commit -m "Initial commit: Csouth Technologies landing page"
```

### Step 3: Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## 2️⃣ Server Deployment Options

### Option A: Deploy to Vercel (Recommended - Easiest)

Vercel is the fastest way to deploy Next.js applications:

1. **Sign up/Login to Vercel**: https://vercel.com
2. **Import GitHub Repository**:
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
3. **Deploy**: Click "Deploy"
4. **Done!** Your site will be live in 2-3 minutes

**Custom Domain Setup**:
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### Option B: Deploy to Your Own Server (VPS/Dedicated)

#### Prerequisites on Server:
- Ubuntu/Debian Linux
- Node.js 18+ installed
- Nginx (for reverse proxy)
- PM2 (for process management)

#### Step 1: Connect to Your Server

```bash
ssh user@your-server-ip
```

#### Step 2: Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

#### Step 3: Clone Repository on Server

```bash
cd /var/www
sudo mkdir csouth-landing
sudo chown $USER:$USER csouth-landing
cd csouth-landing

# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git .
```

#### Step 4: Install Dependencies and Build

```bash
npm install
npm run build
```

#### Step 5: Start with PM2

```bash
pm2 start npm --name "csouth-landing" -- start
pm2 save
pm2 startup
```

#### Step 6: Configure Nginx

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/csouth-landing
```

Add this configuration (replace `your-domain.com`):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/csouth-landing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 7: Setup SSL with Let's Encrypt (Optional but Recommended)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

---

## 3️⃣ Environment Variables (If Needed Later)

Create a `.env.local` file for environment variables:

```bash
# Example variables (add as needed)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=info@csouth.tech
```

---

## 4️⃣ Continuous Deployment

### Automatic Updates from GitHub:

Create a deployment script on your server:

```bash
nano /var/www/csouth-landing/deploy.sh
```

Add this content:

```bash
#!/bin/bash
cd /var/www/csouth-landing
git pull origin main
npm install
npm run build
pm2 restart csouth-landing
```

Make it executable:

```bash
chmod +x deploy.sh
```

To update the site:

```bash
./deploy.sh
```

---

## 5️⃣ Custom Logo Setup

1. Place your logo file in `public/images/logo.png`
2. Update `components/layout/Header.tsx`:

Replace the placeholder div with:

```tsx
<Image
  src="/images/logo.png"
  alt="Csouth Technologies"
  width={48}
  height={48}
  priority
/>
```

3. Commit and push changes:

```bash
git add .
git commit -m "Add company logo"
git push
```

---

## 6️⃣ Making the Contact Form Functional

### Option 1: Using Email API (Recommended)

1. Sign up for an email service (Resend, SendGrid, or Mailgun)
2. Create API route:

```bash
mkdir -p app/api/contact
```

Create `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  
  // Add your email sending logic here
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'info@csouth.tech',
  //   subject: `New Contact: ${name}`,
  //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`
  // });

  return NextResponse.json({ success: true });
}
```

3. Update `components/sections/Contact.tsx` to call this API

---

## 7️⃣ Performance Monitoring

Monitor your application:

```bash
pm2 logs csouth-landing      # View logs
pm2 monit                     # Monitor resources
pm2 restart csouth-landing    # Restart app
```

---

## 🔧 Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 Already in Use
Change port in `package.json`:
```json
"start": "next start -p 3001"
```

### PM2 Not Starting
```bash
pm2 delete csouth-landing
pm2 start npm --name "csouth-landing" -- start
```

---

## 📞 Need Help?

If you encounter any issues during deployment:
- Check the logs: `pm2 logs csouth-landing`
- Verify Nginx: `sudo nginx -t`
- Check firewall: `sudo ufw status`

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Server configured with Node.js
- [ ] Application built successfully
- [ ] PM2 running the application
- [ ] Nginx configured as reverse proxy
- [ ] SSL certificate installed (if using HTTPS)
- [ ] Custom logo added
- [ ] Domain DNS pointed to server
- [ ] Contact form tested
- [ ] Responsive design verified on all devices

---

**Success!** Your Csouth Technologies landing page is now live! 🎉

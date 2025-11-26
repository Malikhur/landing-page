# Csouth Technologies - Landing Page

A modern, responsive landing page for Csouth Technologies built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Smooth Animations**: Interactive UI with Framer Motion animations
- **Fast Performance**: Optimized for speed with Next.js Image optimization
- **Form Validation**: Contact form with client-side validation using Zod
- **Accessibility**: ARIA labels and semantic HTML
- **Type Safe**: Full TypeScript coverage for better development experience

## 📁 Project Structure

```
csouth-landing/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer with social links
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Technologies.tsx # Technologies showcase
│       └── Contact.tsx     # Contact form
├── lib/
│   ├── constants.ts        # App constants
│   ├── utils.ts            # Utility functions
│   └── validations.ts      # Form validation schemas
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/
    └── images/             # Static images and assets
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Icons** - Icon library

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Brand Colors

The primary brand color is blue, extracted from the Csouth Technologies logo. Update colors in components using Tailwind's color utilities:

- Primary: `blue-600`, `blue-700`, `blue-800`
- Backgrounds: `blue-50`, `gray-50`

### Adding Logo

Place your logo image in `public/images/logo.png` and update the Header component to use it instead of the placeholder.

### Contact Form

The contact form currently simulates submission. To make it functional:

1. Create an API route in `app/api/contact/route.ts`
2. Update the `onSubmit` function in `Contact.tsx` to call your API
3. Integrate with your email service (SendGrid, Resend, etc.)

## 🌐 SEO Configuration

Update SEO metadata in `app/layout.tsx`:

- Site title and description
- OpenGraph tags
- Twitter Card data
- Keywords

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy to Your Server

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

3. Use a process manager like PM2 to keep it running

## 📄 License

© 2025 Csouth Technologies. All rights reserved.

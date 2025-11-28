import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://csouthint.com"),
  title: "Csouth Technologies | Modern Technology Solutions",
  description: "Csouth Technologies is a modern US-based technology company providing secure, scalable digital solutions. Blockchain & Tokenization, AI-assisted tools, Web technologies, Cloud-based systems, and software development.",
  keywords: [
    "Csouth Technologies",
    "CSouthInt.com",
    "technology company",
    "digital solutions",
    "blockchain",
    "tokenization",
    "AI tools",
    "web development",
    "cloud systems",
    "software development",
    "modern technology",
    "secure digital solutions",
    "scalable solutions",
  ],
  authors: [{ name: "Csouth Technologies" }],
  creator: "Csouth Technologies",
  publisher: "Csouth Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://csouthint.com",
    siteName: "Csouth Technologies",
    title: "Csouth Technologies | Modern Technology Solutions",
    description: "Building secure and scalable digital solutions for the modern world",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Csouth Technologies - Modern Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Csouth Technologies | Modern Technology Solutions",
    description: "Building secure and scalable digital solutions for the modern world",
    images: ["/og-image.png"],
    creator: "@csouthint",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://csouthint.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a6a8a" />
      </head>
      <body 
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`} 
        style={{ backgroundColor: '#0a1b29' }}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Nandi Caterers | Traditional Catering",
  description:
    "Premium catering services for weddings, celebrations, and corporate events in Mangalore. Authentic flavours, professional service, unforgettable occasions.",
  keywords: [
    "Nandi Caterers",
    "Catering in Mangalore",
    "Wedding caterers Mangalore",
    "Luxury catering coastal Karnataka",
    "Authentic Indian catering",
    "Corporate event catering",
    "Vegetarian catering Mangalore",
    "Non-veg catering Mangalore",
  ],
  authors: [{ name: "Nandi Caterers" }],
  creator: "Nandi Caterers",
  metadataBase: new URL("https://nandicaterers.com"),
  alternates: {
    canonical: "https://nandicaterers.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nandi Caterers | Traditional Catering",
    description:
      "Premium catering for weddings, celebrations, and corporate events in Mangalore. Authentic flavours, professional service, unforgettable occasions.",
    url: "https://nandicaterers.com",
    siteName: "Nandi Caterers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nandi Caterers Premium Feast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandi Caterers | Traditional Catering",
    description: "Premium catering for weddings and celebrations across Mangalore.",
    images: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAF7F0",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nandi Caterers",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    description: "Premium catering services for weddings, celebrations, and corporate events across Mangalore.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mangalore",
      addressLocality: "Mangalore",
      addressRegion: "Karnataka",
      postalCode: "575001",
      addressCountry: "IN",
    },
    telephone: "+917338488083",
    url: "https://nandicaterers.com",
    sameAs: ["https://instagram.com/nandi_caterers"],
    priceRange: "$$",
    serviceType: "Catering",
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-nandi-ivory text-nandi-charcoal">
        {children}
      </body>
    </html>
  );
}

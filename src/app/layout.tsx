import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raihan Mufthahul — Web Developer Indonesia",
  description:
    "Portofolio Raihan Mufthahul, web developer asal Indonesia. Spesialis web untuk UMKM, aplikasi web, dan eksplorasi Python.",
  keywords: [
    "web developer",
    "Indonesia",
    "freelance",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "Raihan Mufthahul",
  ],
  authors: [{ name: "Raihan Mufthahul" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Raihan Mufthahul — Web Developer Indonesia",
    description:
      "Portofolio Raihan Mufthahul, web developer asal Indonesia. Spesialis web untuk UMKM, aplikasi web, dan eksplorasi Python.",
    siteName: "Raihan Mufthahul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Mufthahul — Web Developer Indonesia",
    description:
      "Portofolio web developer asal Indonesia. Spesialis web UMKM, aplikasi web, Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        {/* Subtle noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

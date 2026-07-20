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
  title: {
    default: "Raihan Mufthahul — Web Developer",
    template: "%s | Raihan Mufthahul",
  },
  description:
    "Portofolio Raihan Mufthahul, web developer asal Indonesia. Berisi project, skill, dan pengalaman di JavaScript, TypeScript, Node.js, Python, dan pengembangan web.",
  metadataBase: new URL("https://raihanmufthahul.vercel.app/"),
  keywords: ["Raihan Mufthahul", "web developer", "portofolio", "frontend developer", "backend developer"],
  authors: [{ name: "Raihan Mufthahul", url: "https://github.com/RaihanMufthahul223" }],
  openGraph: {
    type: "website",
    title: "Raihan Mufthahul — Web Developer",
    description: "Portofolio dan project-project Raihan Mufthahul.",
    url: "https://raihanmufthahul.vercel.app/",
    siteName: "Raihan Mufthahul",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Mufthahul — Web Developer",
    description: "Portofolio dan project-project Raihan Mufthahul.",
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
  verification: {
    google: "2EuT6PE_SAYi08wfpT37rGu5RxpZaCcypySeQqbG9fU",
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

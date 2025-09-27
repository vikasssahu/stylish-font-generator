import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StylishNames - Stylish Name Generator",
  description: "Generate stylish names for Instagram, Facebook, Free Fire, BGMI, and more! Create unique usernames with fancy fonts, symbols & decorations instantly.",
  keywords: "stylish names, font generator, instagram names, facebook names, free fire names, bgmi names, gaming usernames, social media names",
  authors: [{ name: "StylishNames" }],
  creator: "StylishNames",
  openGraph: {
    title: "StylishNames - Stylish Name Generator",
    description: "Generate stylish names for Instagram, Facebook, Free Fire, BGMI, and more!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "StylishNames - Stylish Name Generator",
    description: "Generate stylish names for Instagram, Facebook, Free Fire, BGMI, and more!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${geist.variable} ${instrument.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

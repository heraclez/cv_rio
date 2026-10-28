import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cv-rio.vercel.app"),
  title: "Reunard Rio E.K — Personal Desktop & Interactive CV (Windows 98)",
  description:
    "Portofolio dan CV interaktif bertema Windows 98 dari Reunard Rio E.K. Web Core Banking Developer, Backend Programmer & IT Specialist.",
  keywords: [
    "Reunard Rio",
    "Rio CV",
    "Web Core Banking",
    "Backend Developer",
    "CodeIgniter",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Linux Ubuntu CentOS",
    "LSP Telematika",
    "Windows 98 Portfolio",
  ],
  authors: [{ name: "Reunard Rio E.K" }],
  openGraph: {
    title: "Reunard Rio E.K — Personal Desktop & Interactive CV",
    description:
      "Jelajahi pengalaman kerja, portofolio proyek core banking, keahlian, dan sertifikasi Reunard Rio E.K dalam desktop interaktif Windows 98.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/rio-avatar.png",
        width: 260,
        height: 290,
        alt: "Reunard Rio E.K",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#008080",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect x='2' y='2' width='5' height='5' fill='%23FF0000'/><rect x='8' y='2' width='6' height='5' fill='%2300AA00'/><rect x='2' y='8' width='5' height='6' fill='%230000AA'/><rect x='8' y='8' width='6' height='6' fill='%23FFAA00'/></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}

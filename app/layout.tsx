import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entrain Labs - Best Digital Marketing Academy in Kerala",
  description: "Learn digital marketing with hands-on projects and expert mentorship. Courses in Performance Marketing, SEO, Social Media, Web Development, Content Creation & Email Marketing.",
  keywords: ["digital marketing course", "digital marketing academy Kerala", "SEO training", "social media marketing course", "performance marketing", "web development course", "content creation training", "email marketing course"],
  authors: [{ name: "Entrain Labs" }],
  creator: "Entrain Labs",
  publisher: "Entrain Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://entrainlabs.com",
    title: "Entrain Labs - Best Digital Marketing Academy in Kerala",
    description: "Learn digital marketing with hands-on projects and expert mentorship. Build real-world skills that get you hired.",
    siteName: "Entrain Labs",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Entrain Labs - Digital Marketing Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrain Labs - Best Digital Marketing Academy in Kerala",
    description: "Learn digital marketing with hands-on projects and expert mentorship.",
    images: ["/Logo.png"],
  },
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
  metadataBase: new URL('https://entrainlabs.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

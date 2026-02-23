import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandramouli Bhandaru | QA Automation Engineer Portfolio",
  description: "Detail-oriented Software Test Engineer with 1 year of experience in Manual and Automation Testing. Specialized in Rest Assured, Ready API, Selenium, Playwright, and Jenkins.",
  keywords: ["QA Automation", "Software Testing", "Rest Assured", "Selenium", "Playwright", "Jenkins", "Portfolio", "Chandramouli Bhandaru"],
  authors: [{ name: "Chandramouli Bhandaru" }],
  creator: "Chandramouli Bhandaru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chandramouli-portfolio.com",
    title: "Chandramouli Bhandaru | QA Automation Engineer Portfolio",
    description: "Detail-oriented Software Test Engineer with experience in Manual and Automation Testing.",
    siteName: "Chandramouli Bhandaru Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandramouli Bhandaru | QA Automation Engineer Portfolio",
    description: "Detail-oriented Software Test Engineer with experience in Manual and Automation Testing.",
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
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
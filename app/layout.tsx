import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import 'swiper/css';
// import Swiper bundle with all modules installed
// import styles bundle
import 'swiper/css/bundle';
import PrimaryHeader from "./components/PrimaryHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: {
    template: 'عربي | %s',
    default: 'عربي', // a default is required when creating a template
  },
  description: 'مرحباً بكم في منصة عربي الإخبارية، منصتكم الشاملة لاستكشاف جمال وتنوع الوطن العربي. نقدم لكم دليلًا متكاملاً لأهم وأجمل الأماكن في مختلف الدول العربية، من معالم سياحية وثقافية إلى أماكن خفية تستحق الزيارة'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const pages = [
    {
      pageName: "السعودية",
      pageUrl: "/saudi"
    },
    {
      pageName: "الامارات",
      pageUrl: "/uae"
    },
    {
      pageName: "الكويت",
      pageUrl: "/kuwait"
    },
    {
      pageName: "مصر",
      pageUrl: "/egypt"
    },
  ]

  return (
    <html lang="ar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="container flex-grow">
          <PrimaryHeader pages={pages} />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

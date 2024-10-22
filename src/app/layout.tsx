import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Providers } from '../components/Providers';


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
// seo 최적화를 위해
export const metadata: Metadata = {
  title: "3줄 요약 news",
  description: "뉴스를 한눈에 요약해서 보여주는 확장 프로그램. 중요한 정보만 빠르게 확인하고 시간을 절약하세요."
,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

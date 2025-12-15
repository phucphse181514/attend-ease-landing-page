import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AttendEase",
  description:
    "Nền tảng quản lý nhân sự hiện đại với công nghệ AI, giúp doanh nghiệp tối ưu hóa quy trình chấm công, tính lương, tuyển dụng và quản lý hợp đồng",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/a-logo.jpg",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/a-logo.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/a-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

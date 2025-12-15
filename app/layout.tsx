import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AttendEase",
  description:
    "Nền tảng quản lý nhân sự hiện đại với công nghệ AI, giúp doanh nghiệp tối ưu hóa quy trình chấm công, tuyển dụng và quản lý nhân viên",
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

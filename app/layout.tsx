import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack爸爸学数学 - 打印纸玩具",
  description: "数学思维训练打印纸玩具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

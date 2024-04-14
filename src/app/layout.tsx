import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trevor Rowland::Portfolio",
  description: "Trevor Rowland's Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-cBg'>{children}</body>
    </html>
  );
}

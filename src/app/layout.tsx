import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Head from "./head";
import Foot from "./foot";

export const metadata: Metadata = {
  title: "Trevor Rowland :: Portfolio",
  description: "Trevor Rowland's Professional Portfolio",
  icons: {
    icon: [
      {
        url: "/images/icon.png", // /public path
        href: "/images/icon.png", // /public path
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className='bg-cBg'>{children}</body>
    </html>
  );
}

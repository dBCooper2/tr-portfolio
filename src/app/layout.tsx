import type { Metadata } from "next";
import "./globals.css";

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
      <body className='bg-cBg'>{children}</body>
    </html>
  );
}

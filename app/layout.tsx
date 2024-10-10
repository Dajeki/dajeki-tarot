import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dajeki Tarot",
  description: "Read your fortune, or seek some guidance from the cards!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-screen h-screen p-4`}
      >
        {children}
      </body>
    </html>
  );
}

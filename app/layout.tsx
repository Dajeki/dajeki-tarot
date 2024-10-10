import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
//${geistSans.variable} ${geistMono.variable}

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
        className={`antialiased w-screen h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

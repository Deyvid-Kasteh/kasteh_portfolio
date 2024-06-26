import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`bg-customGrayBG ${inter.className} p-4 sm:p-6 md:p-8 lg:px-10 xl:px-12 pt-6`}
      >
        {children}
      </body>
    </html>
  );
}

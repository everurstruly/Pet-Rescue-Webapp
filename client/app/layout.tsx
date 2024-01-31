import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import App from "@/components/app";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetRescue",
  description: "Created by Puppeteer.id",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("bg-amber-100", inter.className)}>
        <App>{children}</App>
      </body>
    </html>
  );
}

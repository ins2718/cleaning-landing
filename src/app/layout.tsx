import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import options from "./options";

export const metadata: Metadata = {
  title: options.title,
  description: options.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

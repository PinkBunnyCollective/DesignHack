import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DesignHack",
    template: "%s | DesignHack"
  },
  description:
    "DesignHack is a gamified learning platform for IGCSE and IB DP Design Technology."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

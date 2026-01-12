import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Explorer Dashboard",
  description: "Browse, search, filter, and favorite products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

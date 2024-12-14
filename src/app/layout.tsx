import { Quicksand } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

// Load the Google font globally
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "700"],  // Include necessary weights
  variable: "--font-quicksand",    // CSS variable for easy usage
});

export const metadata: Metadata = {
  title: "Restoran Makanan",
  description: "by Reza Pebriawan M",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

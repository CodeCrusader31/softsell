
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbarr";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "SoftSell - Sell Your Software Licenses",
  description: "Get instant valuation and fast payouts for unused software licenses.",
  keywords: [
    "sell software license",
    "unused software resale",
    "license marketplace",
    "sell license fast",
    "SoftSell"
  ],
  authors: [{ name: "SoftSell Team", url: "https://softsell.com" }],
  creator: "SoftSell",
  metadataBase: new URL("https://softsell.com"),
  openGraph: {
    title: "SoftSell - Sell Your Software Licenses",
    description: "Turn unused software licenses into cash with instant quotes and secure transfer.",
    url: "https://softsell.com",
    siteName: "SoftSell",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://softsell.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sell Software Licenses with SoftSell",
      },
    ],
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
         
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

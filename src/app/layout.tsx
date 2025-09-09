import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Yemen Al-Saeed Restaurant",
  description:
    "Authentic Yemeni cuisine with traditional dishes like Mandi, Madfoon, and Kabsa, served with rich flavors and warm hospitality.",
    // openGraph: {
    //   title: "Yemen Al-Saeed Restaurant",
    //   description:
    //     "Experience the best of Yemeni food – Mandi, Madfoon, and more with authentic taste.",
    //   url: "https://your-domain.com",
    //   siteName: "Yemen Al-Saeed",
    //   images: [
    //     {
    //       url: "assets/logo.jpg",
    //       width: 1200,
    //       height: 630,
    //       alt: "Yemeni Mandi and traditional food",
    //     },
    //   ],
    //   locale: "en_US",
    //   type: "website",
    // },
    icons :'assets/logo.jpg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}

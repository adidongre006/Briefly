import type { Metadata } from "next";
import { Geist, Geist_Mono, Protest_Revolution } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const protRev = Protest_Revolution({
  variable: "--font-protest-revolution",
  weight: "400",
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Briefly - The Note-Taking App",
  description:
    "Briefly is a digital notebook that allows you to take notes, create notebooks, and more.",
    icons:{
      icon:"/felon.png",
    }
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${protRev.variable}  antialiased`}
      >
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </NuqsAdapter>
        <Analytics />
      </body>
    </html>
  );
}

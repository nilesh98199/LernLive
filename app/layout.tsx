import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter as InterFont } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { JSX } from "react";
import { StreamVideoProvider } from '@/components/providers/StreamVideoProvider';
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = InterFont({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LERNLIVE",
  description: "Video lecturing app",
  icons:{
    icon: '/icons/Camera.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <ClerkProvider 
        appearance={{
          layout: {
            logoImageUrl: '/icons/Camera.svg',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorText:'#fff',
            colorPrimary:'#0E78F9',
            colorBackground:'#1c1f2e',
            colorInputBackground:'#252a41',
            colorInputText:'#fff'
          }
        }}   
      >
        <StreamVideoProvider>
          <body className={`${inter.className} bg-dark-2`}>
            {children}
            <Toaster />
          </body>
        </StreamVideoProvider>
      </ClerkProvider>
    </html>
  );
}

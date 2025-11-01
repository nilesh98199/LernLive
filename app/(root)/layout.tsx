import StreamVideoProvider from "@/providers/StreamClientProvider"
import { Metadata } from "next";
import React, { ReactNode } from "react"


export const metadata: Metadata = {
    title: "LERNLIVE",
    description: "Video lecturing app",
    icons:{
      icon: '/icons/Camera.svg'
    }
  };

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
    }

export default RootLayout
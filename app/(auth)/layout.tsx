import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import '../globals.css'

export const metadata = {
    title: "Linc'd",
    description: "A Next.js 13 Social Media App By Linc Chad"
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ 
    children 
}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )}
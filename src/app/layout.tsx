import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import Providers  from './providers';
import NavbarComponent from "@/components/navbar/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Movie app",
    description: "This is a movie app",
};

type PropType = { children: React.ReactNode; }

export default function RootLayout({children}: Readonly<PropType>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
        </head>
        <body className={inter.className}>
        <Providers>
            <HeaderComponent />
            <NavbarComponent/>
            {children}
        </Providers>
        </body>
        </html>
    );
}

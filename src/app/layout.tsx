import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';

const inter = Manrope({ 
    weight: ['600', '800'],
    subsets: ["latin"] 
});

export const metadata: Metadata = {
    title: 'Interactive Pricing Component',
    description: 'Frontend Mentor Interactive Pricing Component Challenge',
    referrer: "origin-when-cross-origin",
    authors: [{ 
        name: 'Rutwij Patankar', 
        url: 'https://github.com/rutw1j' 
    }],
    creator: 'Rutwij Patankar',
    keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'ChakraUI'],
    appLinks: {
        web: {
            url: 'https://rutw1j-interactive-pricing-component.vercel.app',
            should_fallback: true,
        }
    }
};

export default function RootLayout( {children,} : Readonly<{children: React.ReactNode;}> ) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

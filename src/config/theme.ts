import { Inter, JetBrains_Mono } from "next/font/google";

export const FontSans = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const FontMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

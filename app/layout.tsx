import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/shared/header'
import { ReactNode } from 'react'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Tasty Pizza',
}

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={nunito.className}>
		<main className="min-h-screen">
			<Header/>
			{children}
		</main>
		</body>
		</html>
	)
}

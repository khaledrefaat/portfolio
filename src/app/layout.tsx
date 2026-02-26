import type { Metadata } from 'next';
import { Lato, Raleway, Shadows_Into_Light_Two } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lato',
});

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-shadows-into-light-two',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Khaled Elkady',
  description:
    "I'm a full-stack developer who writes code that doesn't just run, it solves problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${shadowsIntoLightTwo.variable} ${raleway.variable} antialiased relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Lato, Raleway, Shadows_Into_Light_Two } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
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

const description =
  "I'm a full-stack developer who writes code that doesn't just run, it solves problems";

export const metadata: Metadata = {
  title: 'Khaled Elkady',
  description,
  alternates: {
    canonical: 'https://khaledelkady.com',
  },
  openGraph: {
    title: 'Khaled Elkady',
    description,
    url: 'https://khaledelkady.com',
    siteName: 'Khaled Elkady',
    images: [
      {
        url: 'https://khaledelkady.com/me.jpeg',
        width: 1200,
        height: 630,
        alt: 'Khaled Elkady',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khaled Elkady',
    description,
    images: ['https://khaledelkady.com/me.jpeg'],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  other: {
    'google-site-verification': 'google-site-verification-code',
    'yandex-verification': 'yandex-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-131X0EQ5WD"
      />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-131X0EQ5WD');
        `}
      </Script>
      <body
        className={`${lato.variable} ${shadowsIntoLightTwo.variable} ${raleway.variable} antialiased relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

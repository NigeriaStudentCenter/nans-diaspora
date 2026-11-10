import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from "react-router";
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import HomepageSameAsJsonLd from '@/components/HomepageSameAsJsonLd';
import Website from '@/layouts/Website';

/**
 * Root layout component that wraps all pages with consistent header and footer.
 *
 * To customize the header or footer, directly edit the Header.tsx and Footer.tsx
 * files in the layouts/parts directory.
 *
 * Site-wide <title> and <meta> live in the <Helmet> below. Individual pages can
 * override them by rendering their own <Helmet> — last-mounted wins.
 */
interface RootLayoutProps {
  children: ReactElement;
}
export default function RootLayout({
  children
}: RootLayoutProps) {
  return <Website>
      <Helmet>
        <title>NANS Diaspora — The Voice of Nigerian Students Abroad</title>
        <meta name="description" content="NANS Diaspora is the official body representing Nigerian students studying abroad — advocating, connecting, and empowering a generation of global leaders." />
      </Helmet>
      <HomepageSameAsJsonLd />
      <ScrollRestoration />
      <Header />
      <div className="pt-16 md:pt-[5.25rem]">
        {children}
      </div>
      <Footer />
    </Website>;
}

import DynamicChatBubble from '@/components/common/DynamicChatBubble';
import Footer from '@/components/common/Footer';
import { SiteHeader } from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <SiteHeader />
              {children}
              <OnekoCat />
              <Footer />
              <DynamicChatBubble />
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}

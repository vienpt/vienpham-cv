import React from "react";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Vien Pham',
  description: 'About Vien resume information',
  alternates: {
    canonical: 'https://vienresume.netlify.app'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Copy index.html into here
  return (
    <html lang="en">
      <head>
        {/*<meta charSet="UTF-8" /> Nextjs support by default*/}
        {/*<link rel="icon" type="image/svg+xml" href="/cat.svg" /> Nextjs support by default*/}
        {/*<meta name="viewport" content="width=device-width, initial-scale=1.0" /> Nextjs support by default*/}
        {/*<title>Vien The Pham CV</title> Move to metadata*/}
        {/*<meta name="description" content="About Vien resume information." /> Move to metadata*/}
        {/*<link rel="canonical" href="https://vienresume.netlify.app" /> Move to metadata*/}
        {/*End lighthouse report*/}
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
                                     __html: `
                                     (function(c,l,a,r,i,t,y){
                                     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                     })(window, document, "clarity", "script", "hvftj73zn5")
                                     `
                                     }}
        />
        {/*Google tag (gtag.js)*/}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-11P30P6DM4"
          strategy="afterInteractive"
        />
        <Script
          id="gg-gtag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-11P30P6DM4');
            `
          }}
        />
      </head>
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  )
}
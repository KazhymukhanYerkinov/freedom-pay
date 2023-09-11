import React from 'react';
import Script from 'next/script';
import { JS_SDK } from '@/components';

export default function Home() {

  return (
    <main>
      <Script
        id="paybox-cdn"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (f, p, s, d, k) {
            d = f.createElement(p);
            k = f.getElementsByTagName(p)[0];
            d.src = 'https://cdn.paybox.money/sdk/js-sdk-1.0.0.js';
            k.parentNode.insertBefore(d, k);
          })(document, 'script');`,
        }}
      />
      <JS_SDK />
    </main>
  )
}

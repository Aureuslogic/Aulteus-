'use client';

/**
 * components/VapiWidget.tsx
 *
 * WHY THIS EXISTS
 * The Vapi embed build no longer registers <vapi-widget> as a custom element. It exposes a
 * global constructor, window.WidgetLoader, which has to be called manually. Because the
 * element is never registered, the browser treats <vapi-widget> as an unknown inline
 * element with zero width and zero height. The script returns 200, executes cleanly, and
 * throws nothing, so the widget disappears with no console error at all.
 *
 * WHAT TO CHANGE IN app/layout.tsx
 *
 * 1. Add the import at the top:
 *
 *      import VapiWidget from "@/components/VapiWidget";
 *
 * 2. DELETE the old script block (currently lines 78-82):
 *
 *      {/* Vapi Widget Script *\/}
 *      <Script
 *        src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
 *        strategy="afterInteractive"
 *      />
 *
 * 3. DELETE the old element block (currently lines 106-115), the whole
 *    {/* Vapi Widget *\/} comment and <vapi-widget ...></vapi-widget> tag.
 *
 * 4. In its place, just before </body>, put:
 *
 *      <VapiWidget />
 *
 * 5. If nothing else in the file uses next/script, remove the now-unused
 *    `import Script from "next/script";` on line 3.
 *
 * ENV VARS
 * Reads the same two variables the old markup used, so the keys stay in Netlify rather
 * than in the repo. NEXT_PUBLIC_VAPI_PUBLIC_KEY was updated on 29 Jul 2026 to the new
 * site-scoped key. NEXT_PUBLIC_VAPI_ASSISTANT_ID is unchanged.
 */

import { useEffect, useRef } from 'react';

// Pinned on purpose. An unpinned CDN URL is how this broke silently across four sites.
const WIDGET_SRC =
  'https://unpkg.com/@vapi-ai/client-sdk-react@0.1.1/dist/embed/widget.umd.js';

const CONTAINER_ID = 'vapi-widget-container';

const WIDGET_PROPS = {
  publicKey: process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY,
  assistantId: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID,
  mode: 'voice',
  mainLabel: 'Talk to Aulteus Agent',
  theme: 'light',
  accentColor: '#c5a059',
  emptyVoiceMessage: 'Click to start a voice conversation',
};

declare global {
  interface Window {
    WidgetLoader?: new (config: {
      container: string;
      component: string;
      props: Record<string, unknown>;
    }) => { destroy?: () => void };
  }
}

function loadScriptOnce(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.WidgetLoader) return resolve();

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`
    );
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('vapi script failed')), {
        once: true,
      });
      return;
    }

    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('vapi script failed'));
    document.head.appendChild(s);
  });
}

export default function VapiWidget() {
  const instanceRef = useRef<{ destroy?: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!WIDGET_PROPS.publicKey || !WIDGET_PROPS.assistantId) {
      console.error(
        '[VapiWidget] NEXT_PUBLIC_VAPI_PUBLIC_KEY or NEXT_PUBLIC_VAPI_ASSISTANT_ID is missing.'
      );
      return;
    }

    loadScriptOnce(WIDGET_SRC)
      .then(() => {
        if (cancelled || instanceRef.current) return;

        if (!window.WidgetLoader) {
          console.error(
            '[VapiWidget] script loaded but window.WidgetLoader is missing. The CDN build has changed again.'
          );
          return;
        }

        instanceRef.current = new window.WidgetLoader({
          container: `#${CONTAINER_ID}`,
          component: 'VapiWidget',
          props: WIDGET_PROPS,
        });
      })
      .catch((err) => console.error('[VapiWidget]', err));

    return () => {
      cancelled = true;
      try {
        instanceRef.current?.destroy?.();
      } catch {
        /* no-op */
      }
      instanceRef.current = null;
    };
  }, []);

  return <div id={CONTAINER_ID} />;
}

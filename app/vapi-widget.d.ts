import React from "react";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "vapi-widget": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & {
          "public-key"?: string;
          "assistant-id"?: string;
          mode?: string;
          theme?: string;
        };
      }
    }
  }
}

export {};

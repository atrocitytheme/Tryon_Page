import { BaseBlock } from "@/components/block";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <BaseBlock>
          <Main />
        </BaseBlock>
        <NextScript />
      </body>
    </Html>
  );
}

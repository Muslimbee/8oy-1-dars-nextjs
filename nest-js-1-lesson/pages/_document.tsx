import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
    <script src="https://kit.fontawesome.com/68899938a9.js"  ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/TextPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap-trial@3.12.4/ScrollTrigger.min.js"></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

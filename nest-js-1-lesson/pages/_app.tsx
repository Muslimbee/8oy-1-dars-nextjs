import type { AppProps } from 'next/app'
import '../pages/CSS/media.css'
import '../pages/CSS/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

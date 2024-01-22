// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import './Css/style.css'
// import './script'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

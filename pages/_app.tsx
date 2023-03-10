import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/Navbar/Navbar'
import { Provider } from 'react-redux';
import { store } from '../src/app/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
    <Navbar />
    <Component {...pageProps} />
    </Provider>
    </>
  )
}

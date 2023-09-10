import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { LoadingScreen } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setIsLoading(false);
    }
    , 2500);
  }, []);

  return (
    <>
      {/* {isLoading && <LoadingScreen />} Mostrar LoadingScreen solo mientras isLoading es verdadero */}
      <Component {...pageProps} />
    </>
  )
}
import React from 'react'
import { AppProps } from 'next/app'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp;
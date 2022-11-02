/*
    Explanation:
    The Core of React
    Just import the global css here
*/

import '../styles/global.css'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return <Component {...pageProps} />
}

export default MyApp

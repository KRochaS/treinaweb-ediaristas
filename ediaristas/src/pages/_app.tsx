
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core';
import theme from '../themes/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title> e-diaristas </title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
                <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )

}

export default MyApp

import React from 'react'
import Head from 'next/head'
import {CssBaseline} from "@mui/material";
import theme from "../src/theme";
import {ThemeProvider} from "@mui/system";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>My App</title>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
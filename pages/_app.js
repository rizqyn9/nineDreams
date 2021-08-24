import '../styles/globals.scss'
import Container from '../components/container/container'
import { useState, useEffect } from 'react';
import {Provider} from 'jotai'
import NavSide from '../components/Header/Nav-Side';
import Head from 'next/head'
import * as Next from "next"



function MyApp({ Component, pageProps }) {
  return (
    <Provider>
        <Head>
          <title>Ninedreams</title>
        </Head>
        <NavSide/>
        <Container >
          <Component {...pageProps} />
        </Container>
    </Provider>
  )
}

export default MyApp
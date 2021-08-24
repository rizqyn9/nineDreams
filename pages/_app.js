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
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Container >
          <NavSide/>
          <Component {...pageProps} />
        </Container>
    </Provider>
  )
}

export default MyApp
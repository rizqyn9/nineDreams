import '../styles/globals.scss'
import Container from '../components/container/container'
import { useState, useEffect } from 'react';
import {Provider} from 'jotai'
import NavSide from '../components/Header/Nav-Side';



function MyApp({ Component, pageProps }) {
  return (
    <Provider>
        <Container >
          <NavSide/>
          <Component {...pageProps} />
        </Container>
    </Provider>
  )
}

export default MyApp
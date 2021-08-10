import '../styles/globals.scss'
import Container from '../components/container/container'
import { useState, useEffect } from 'react';
import {Provider} from 'jotai'



function MyApp({ Component, pageProps }) {
  return (
    <Provider>
        <Container >
            <Component {...pageProps} />
        </Container>
    </Provider>
  )
}

export default MyApp
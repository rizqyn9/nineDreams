import '../styles/globals.scss'
import Container from '../components/container/container'
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return (
      <Container >
          <Component {...pageProps} />
      </Container>
  )
}

export default MyApp
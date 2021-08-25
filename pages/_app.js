import '../styles/globals.scss'
import Container from '../components/container/container'
import {Provider} from 'jotai'
import NavSide from '../components/Header/Nav-Side';
import Head from 'next/head'

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
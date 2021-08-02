import '../styles/globals.css'
import '../styles/globals.scss'
import Container from '../components/container/container'

function MyApp({ Component, pageProps }) {
  return (
      <Container>
          <Component {...pageProps} />
      </Container>
  )
}

export default MyApp
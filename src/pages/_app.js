import { Footer } from '@/components/footer';
import { Header } from '@/components/header'; 
import '/css/main.min.css'
import 'swiper/css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

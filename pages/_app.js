import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Navbar from '../components/Navbar'
import ModalContextProvider from '../context/Modal'
import '../styles/globals.css'
import '../styles/responsive.css'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <ModalContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </ModalContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp

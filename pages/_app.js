import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Navbar from '../components/Navbar'
import AnimationContextProvider from '../context/Animation'
import ModalContextProvider from '../context/Modal'
import ProfileContextProvider from '../context/profile'
import '../styles/globals.css'
import '../styles/responsive.css'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <ProfileContextProvider>
    <ModalContextProvider>
    <AnimationContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </AnimationContextProvider>
    </ModalContextProvider>
    </ProfileContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp

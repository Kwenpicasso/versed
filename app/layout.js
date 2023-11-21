import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Provider from './components/Provider'
import ShoppingCart from './components/ShoppingCart'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VersedSkin',
  description: 'Clean, cruelty-free products, powered by proven ingredients and tested by dermatologists.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Provider>
       <Navbar/>
       <ShoppingCart/>
        <div className='mt-[10%]'>
        {children}
        </div>
        <Footer/>
       </Provider>
        </body>
    </html>
  )
}

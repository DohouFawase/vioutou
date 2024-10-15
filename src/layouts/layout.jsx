
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navigation/nav'
import { motion } from 'framer-motion'
import Footer from '../components/navigation/footer'

export default function Layout() {
  return (
    <div
   
    className='text-white'>
     <div className="px-12 ">
     <NavBar />
     <Outlet />
     <Footer />
     </div>
    </div>
  )
}

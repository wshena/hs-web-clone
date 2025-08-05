'use client'
import { RootState, store, useAppSelector } from '@/lib/redux/store'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import Footer from './Footer'
import Navbar from './Navbar'
import MobileSidebar from './MobileSidebar'

const MainWrapper = ({children}:{children:React.ReactNode}) => {
  const sidebar = useAppSelector((state:RootState) => state.utility.sidebar);

  return (
    <>
      <main className='relative'>
        <header className="z-50 w-full top-0 left-0 fixed bg-white">
          <Navbar />
        </header>
        <section id='main-content' className=" pt-[64px]">
          {children}
        </section>
        <footer>
          <Footer />
        </footer>
      </main>

      {/* mobile sidebar for menu */}
      <MobileSidebar />
    </>
  )
}

export default MainWrapper
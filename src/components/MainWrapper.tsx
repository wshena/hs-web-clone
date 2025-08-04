'use client'
import { store } from '@/lib/redux/store'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

const MainWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <ReduxProvider store={store}>
      <main>
        {children}
      </main>
    </ReduxProvider>
  )
}

export default MainWrapper
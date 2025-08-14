'use client'
import { store } from '@/lib/redux/store'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

const AppProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}

export default AppProvider
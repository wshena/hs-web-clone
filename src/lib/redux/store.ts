import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import utilityReducer from '@/lib/redux/utilitySlice'

const allReducer = {
  utility: utilityReducer
}

export const store = configureStore({
  reducer: allReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppStore = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// custom hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
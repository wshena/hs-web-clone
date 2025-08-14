import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UtilityState {
  itemHover: {
    id: string,
    status: boolean
  },
  language: string,
  sidebar: boolean
}

const initialState: UtilityState = {
  itemHover: {
    id: '',
    status: false
  },
  language: 'id',
  sidebar: false
}

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setItemHover(state, action: PayloadAction<{id:string, status:boolean}>) {
      state.itemHover = { id: action.payload.id, status: action.payload.status }
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
    },
    setSidebar(state, action: PayloadAction<boolean>) {
      state.sidebar = action.payload
    },
  },
})

export const {
  setItemHover,
  setLanguage,
  setSidebar
} = utilitySlice.actions

export default utilitySlice.reducer
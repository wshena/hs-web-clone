import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UtilityState {
  currentEpisode: string | null
  episodeList: any[]
  isPlaying: boolean
  videoQuality: string
  subtitles: string
  favorites: string[]
  recentlyWatched: any[]
  isLoading: boolean
  error: string | null
}

const initialState: UtilityState = {
  currentEpisode: null,
  episodeList: [],
  isPlaying: false,
  videoQuality: '1080p',
  subtitles: 'Indonesia',
  favorites: [],
  recentlyWatched: [],
  isLoading: false,
  error: null,
}

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    setCurrentEpisode(state, action: PayloadAction<string>) {
      state.currentEpisode = action.payload
    },
    setEpisodeList(state, action: PayloadAction<any[]>) {
      state.episodeList = action.payload
    },
    togglePlay(state) {
      state.isPlaying = !state.isPlaying
    },
    setVideoQuality(state, action: PayloadAction<string>) {
      state.videoQuality = action.payload
    },
    setSubtitles(state, action: PayloadAction<string>) {
      state.subtitles = action.payload
    },
    addToFavorites(state, action: PayloadAction<string>) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload)
      }
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(id => id !== action.payload)
    },
    addToRecentlyWatched(state, action: PayloadAction<any>) {
      // Hindari duplikasi
      state.recentlyWatched = state.recentlyWatched.filter(
        item => item.id !== action.payload.id
      )
      state.recentlyWatched.unshift(action.payload)
      // Batasi jumlah history
      if (state.recentlyWatched.length > 10) {
        state.recentlyWatched.pop()
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const {
  setCurrentEpisode,
  setEpisodeList,
  togglePlay,
  setVideoQuality,
  setSubtitles,
  addToFavorites,
  removeFromFavorites,
  addToRecentlyWatched,
  setLoading,
  setError,
} = utilitySlice.actions

export default utilitySlice.reducer
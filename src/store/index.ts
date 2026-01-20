import { configureStore } from '@reduxjs/toolkit'
import voteReducer from './features/voteSlice'

const store = configureStore({
  reducer: {
    vote: voteReducer
  }
})

// 导出类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

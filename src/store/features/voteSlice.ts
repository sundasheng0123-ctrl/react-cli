import { createSlice, Dispatch } from '@reduxjs/toolkit'

const voteSlice = createSlice({
  name: 'vote',
  initialState: {
    supNum: 0,
    oppNum: 0
  },
  reducers: {
    support(state) {
      state.supNum++
    },
    oppose(state) {
      state.oppNum++
    }
  }
})

const delay = () => {
  return new Promise(res => {
    setTimeout(() => {
      res(true)
    }, 3000)
  })
}

// 导出 actions
export const { support, oppose } = voteSlice.actions

export const supportAsync = () => {
  return async (dispatch: Dispatch) => {
    await delay()
    dispatch(support())
  }
}

export default voteSlice.reducer


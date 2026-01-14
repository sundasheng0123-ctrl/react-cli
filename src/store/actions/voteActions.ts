import { VOTE_SUP, VOTE_OPP } from '@/utils/storeContext'
const delay = async () => {
  return new Promise(res => {
    setTimeout(() => {
      res(1)
    }, 3000)
  })
}
export const vote = {
  support() {
    return { type: VOTE_SUP }
  },
  oppose() {
    return { type: VOTE_OPP }
  },
  supportAsync() {
    return async (dispatch: any) => {
      await delay()
      return dispatch({ type: VOTE_SUP })
    }
  }
}

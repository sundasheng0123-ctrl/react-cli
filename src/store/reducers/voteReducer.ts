import { VOTE_SUP, VOTE_OPP } from '@/utils/storeContext'
interface InitialStateType {
  supNum: number;
  oppNum: number;
}
export const voteReducer = (state: InitialStateType = { supNum: 0, oppNum: 0}, action: Action) => {
  const cloneState = { ...state }
  switch(action.type) {
    case VOTE_SUP:
      cloneState.supNum++
      break
    case VOTE_OPP:
      cloneState.oppNum++
      break
    default:
  }
  return cloneState
}

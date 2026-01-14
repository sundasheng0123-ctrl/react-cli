// import { useContext, memo } from "react"
// import ThemeContext from "@/utils/useContext"
import { connect } from 'react-redux'
const VoteMain = (props: any) => {
  const { supNum, oppNum } = props
  // const { supNum, oppNum } = store.getState()
  return <div>
    <div>支持数: {supNum}</div>
    <div>反对数: {oppNum}</div>
  </div>
}

export default connect((state: any) => state.vote)(VoteMain)

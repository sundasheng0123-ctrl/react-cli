// import { useContext } from "react"
// import ThemeContext from "@/utils/useContext"
import { connect } from 'react-redux'
import { vote } from '@s/actions/voteActions'
const VoteFooter = (props: any) => {
  // const { store } = useContext(ThemeContext)!
  const { support, oppose, supportAsync } = props
  return <div>
    <button onClick={supportAsync}>支持</button>
    <button onClick={oppose}>反对</button>
  </div>
}

export default connect(null, vote)(VoteFooter)

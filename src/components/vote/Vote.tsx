import VoteMain from "@c/vote/VoteMain"
import VoteFooter from "@c/vote/VoteFooter"
// import store from '@s/index'
// import ThemeContext from "@/utils/useContext"
import { connect } from 'react-redux'

const Vote = (props: any) => {
  const { supNum, oppNum } = props
  // const { supNum, oppNum } = store.getState()
  // const [_, setNum] = useState(0)
  // const update = () => {
  //   setNum(Math.random())
  // }
  // useEffect(() => {
  //   return store.subscribe(update)
  // }, [])
  return <div>
    Vote : { supNum + oppNum }
    <VoteMain />
    <VoteFooter />
  </div>
}

export default connect((state: any) => state.vote)(Vote)

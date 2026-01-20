import { useSelector } from 'react-redux'
import VoteMain from "@c/vote/VoteMain"
import VoteFooter from "@c/vote/VoteFooter"


const Vote = (props: any) => {
  const { supNum, oppNum } = useSelector((state: any) => state.vote)
  return <div>
    Vote : { supNum + oppNum }
    <VoteMain />
    <VoteFooter />
  </div>
}

export default Vote

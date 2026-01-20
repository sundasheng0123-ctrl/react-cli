import { useSelector } from 'react-redux'
const VoteMain = (props: any) => {
  const { supNum, oppNum } = useSelector((state: any) => state.vote)
  return <div>
    <div>支持数: {supNum}</div>
    <div>反对数: {oppNum}</div>
  </div>
}

export default VoteMain

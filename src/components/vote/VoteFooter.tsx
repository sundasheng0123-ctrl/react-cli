import { useAppDispatch } from '@s/hooks'
import { support, oppose, supportAsync } from '@s/features/voteSlice'
const VoteFooter = (props: any) => {
  const dispatch = useAppDispatch()
  const handleSupport = () => dispatch(supportAsync())
  const handleOppose = () => dispatch(oppose())
  return <div>
    <button onClick={handleSupport}>支持</button>
    <button onClick={handleOppose}>反对</button>
  </div>
}

export default VoteFooter

import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// 类型安全的 hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

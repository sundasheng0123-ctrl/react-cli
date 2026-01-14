import { createContext } from 'react'
import type { Store } from 'redux'
interface StoreType {
  store: Store
}
const ThemeContext = createContext< StoreType | null >(null)

export default ThemeContext

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import ThemedContext from '@u/useContext'
import store from '@s/index'
import App from './App'
import Vote from '@c/vote/Vote'
const root = createRoot(document.querySelector('#app')!)

root.render(<Provider store={ store }>
  <Vote />
  <App />
</Provider>)

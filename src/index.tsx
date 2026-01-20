import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import ThemedContext from '@u/useContext'
import store from '@s/index'
import App from './App'
const root = createRoot(document.querySelector('#app')!)

root.render(<Provider store={ store }>
  <App />
</Provider>)

import { HashRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import RouterView from '@/router'
// import A from '@p/A'
// import B from '@p/B'
// import C from '@p/C'
// import A1 from '@p/A/A1'
// import A2 from '@p/A/A2'
// import A3 from '@p/A/A3'
const App = () => {
  return <HashRouter>
    <div>
      <div>
        <div>
          <Link to="/a">A</Link>
        </div>
        <div>
          <Link to="/b">B</Link>
        </div>
        <div>
          <Link to="/c">C</Link>
        </div>
      </div>
      <div>
        {/* <Routes>
          <Route path='/' element={
            <Navigate to='/a' />
          }></Route>
          <Route path='/a' element={<A />}>
            <Route path='/a/a1' element={<A1 />}></Route>
            <Route path='/a/a2' element={<A2 />}></Route>
            <Route path='/a/a3' element={<A3 />}></Route>
          </Route>
          <Route path='/b' element={<B />}></Route>
          <Route path='/c' element={<C />}></Route>
          <Route path='*' element={
            <Navigate to='/b' />
          }></Route>
        </Routes> */}
        <RouterView />
      </div>
    </div>
  </HashRouter>
}

export default App

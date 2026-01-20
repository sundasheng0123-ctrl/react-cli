import { Outlet, NavLink } from 'react-router-dom'
const A = () => {
  return <div>
    <div>
      <NavLink to='/a/a1'>A1</NavLink>&nbsp;
      <NavLink to='/a/a2'>A2</NavLink>&nbsp;
      <NavLink to='/a/a3'>A3</NavLink>&nbsp;
    </div>
    <div>
      <Outlet />
    </div>
  </div>
}

export default A

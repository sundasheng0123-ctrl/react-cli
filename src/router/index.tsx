import { Route, Navigate, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { routes } from './routes'
import { RouteType } from './route-types'

const isRedirect = (route: RouteType) => {
  return 'redirect' in route
}

const hasChildren = (route: RouteType) => {
  return 'children' in route
}

const hasTo = (route: RouteType) => {
  return 'to' in route
}

const RouteComponent = (route: RouteType) => {
  if (isRedirect(route) && hasTo(route)) {
    return (
      <Route
        path={ route.path }
        element={<Navigate to={route.to} replace={route.replace}/>}
      />
    )
  } else {
    let { component: Component } = route
    if (hasChildren(route)) {
      return <Route path={ route.path } element={ <Component /> }>
        { createRoutes(route.children!) }
      </Route>
    }
    return <Route path={ route.path } element={ <Component /> } />
  }
}

const createRoutes = (routes: RouteType[]) => {
  return routes.map((route, index) => {
    return RouteComponent(route)
  })
}

const RouterView = () => {
  return  <Suspense fallback={'...loading'}>
    <Routes>
      { createRoutes(routes) }
    </Routes>
  </Suspense>
}

export default RouterView

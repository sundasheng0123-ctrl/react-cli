import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteType } from './route-types'
import { aRoutes } from './aRoutes'
export const routes: RouteType[] = [
  {
    path: '/',
    redirect: true,
    to: '/a',
    replace: true,
    component: Navigate
  },
  {
    path: '/a',
    name: 'A',
    component: lazy(() => import('@p/A')),
    children: aRoutes,
    meta: {}
  },
  {
    path: '/b',
    name: 'B',
    component: lazy(() => import('@p/B')),
    meta: {}
  },
  {
    path: '/c',
    name: 'C',
    component: lazy(() => import('@p/C')),
    meta: {}
  }
]

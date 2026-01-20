import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteType } from './route-types'

export const aRoutes: RouteType[] = [
  {
    path: '/a',
    redirect: true,
    to: '/a/a1',
    replace: true,
    component: Navigate
  },
  {
    path: '/a/a1',
    name: 'A1',
    component: lazy(() => import('@p/A/A1')),
    meta: {}
  },
  {
    path: '/a/a2',
    name: 'A2',
    component: lazy(() => import('@p/A/A2')),
    meta: {}
  },
  {
    path: '/a/a3',
    name: 'A3',
    component: lazy(() => import('@p/A/A3')),
    meta: {}
  },
]

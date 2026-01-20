import { LazyExoticComponent, ReactNode, FC, ComponentType } from "react"

export interface MetaType {
  title?: string,
  iconClass?: string
}

export interface RouteReactRedirect {
  redirect?: boolean,
  to: string,
  replace?: boolean
}

export interface RouteComponentType {
  path: string,
  name?: string,
  component: LazyExoticComponent<React.ComponentType<any>> | FC<any> | ComponentType<any>,
  children?: (RouteComponentType)[],
  meta?: MetaType
}

type RouteRedirectComType = RouteReactRedirect & RouteComponentType

export type RouteType = RouteComponentType | RouteRedirectComType
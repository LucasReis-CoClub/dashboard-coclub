import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// icons
import { MdDomain, MdManageAccounts } from 'react-icons/md'
import { BsTrophyFill } from 'react-icons/bs'
import { TiChartArea } from 'react-icons/ti'
import { RiChatSettingsFill } from 'react-icons/ri'
import { HiCreditCard } from 'react-icons/hi'

// pages
import ManagePlans from './Sidebar/ManagePlans'
import CompanyProfile from './Sidebar/CompanyProfile'
import Members from './Sidebar/Members'
import Login from './Auth/Login'
import Code from './Auth/Code'
import Sidebar from './Sidebar'

import 'styles/global.scss'
import Error from './Error'

export interface RouteType {
  path: string
  element: any
  name?: string
  icon?: {
    size?: number
    component: any
  }
}

const sidebarRoutes: RouteType[] = [
  { path: '/company-profile', name: 'Company Profile', icon: { component: MdDomain }, element: <CompanyProfile/> },
  { path: '/members', name: 'Members', icon: { component: MdManageAccounts }, element: <Members/> },
  { path: '/manage-plans', name: 'Manage Plan', icon: { component: BsTrophyFill, size: 16 }, element: <ManagePlans/> },
  { path: '/analytics', name: 'Analytics', icon: { component: TiChartArea }, element: <Members/> },
  { path: '/groups', name: 'Groups', icon: { component: RiChatSettingsFill }, element: <Members/> },
  { path: '/billing', name: 'Billing', icon: { component: HiCreditCard }, element: <Members/> }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar routes={sidebarRoutes}/>,
    children: sidebarRoutes,
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/code',
    element: <Code />,
    errorElement: <Error />
  }
])

const Routes: FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes

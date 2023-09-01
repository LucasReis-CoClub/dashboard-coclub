/* imports */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React, { FC } from 'react'

/* icons */
import { MdDomain, MdManageAccounts } from 'react-icons/md'
import { RiChatSettingsFill } from 'react-icons/ri'
import { HiCreditCard } from 'react-icons/hi'
import { BsTrophyFill } from 'react-icons/bs'
import { TiChartArea } from 'react-icons/ti'

/* context */
import Strings from 'contexts/Strings'

/* pages */
import CompanyProfile from './Sidebar/CompanyProfile'
import ManagePlans from './Sidebar/ManagePlans'
import Analytics from './Sidebar/Analytics'
import Members from './Sidebar/Members'
import Login from './Auth/Login'
import Sidebar from './Sidebar'
import Code from './Auth/Code'

/* others */
import { ProtectedRoute } from 'components/ProtectedRoute'
import { RouteType } from '../dto/route'
import Error from './Error'
import 'styles/global.scss'

/* FC to define routes */
const Routes: FC = () => {
  const { translate } = Strings.useStrings()

  const sidebarRoutes: RouteType[] = [
    { path: '/company-profile', name: translate('dash-page-company_profile-title'), icon: { component: MdDomain }, element: <CompanyProfile/> },
    { path: '/members', name: translate('dash-page-members-title'), icon: { component: MdManageAccounts }, element: <Members/> },
    { path: '/manage-plans', name: translate('dash-page-manage_plan-title'), icon: { component: BsTrophyFill, size: 16 }, element: <ManagePlans/> },
    { path: '/analytics', name: translate('dash-page-analytics-title'), icon: { component: TiChartArea }, element: <Analytics/> },
    { path: '/groups', name: translate('dash-page-groups-title'), icon: { component: RiChatSettingsFill }, element: <Members/> },
    { path: '/billing', name: translate('dash-page-billing-title'), icon: { component: HiCreditCard }, element: <Members/> }
  ]

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Sidebar routes={sidebarRoutes}/>,
      children: sidebarRoutes.map((route) => ({
        ...route,
        element: <ProtectedRoute element={ route.element }/>
      })),
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

  return (
    <RouterProvider router={router}/>
  )
}

export default Routes

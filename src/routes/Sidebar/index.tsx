import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { RouteType } from 'routes'

// components
import Header from 'components/Header'
import SidebarComponent from 'components/Sidebar'

import 'styles/global.scss'

import * as S from './styles'

interface Props {
  routes: RouteType[]
}

const Sidebar: FC<Props> = ({ routes }) => {
  return (
    <S.Container>
        <Header />

        <S.Main>
          <S.SidebarContainer>
            <SidebarComponent
              routes={routes}
              company={{
                image: 'https://s3.amazonaws.com/gupy5/production/companies/1287/career/2323/images/2020-09-23_13-41_logo.jpg',
                name: 'Will Bank'
              }}
            />
          </S.SidebarContainer>

          <S.Content>
            <Outlet />
          </S.Content>
        </S.Main>
    </S.Container>
  )
}

export default Sidebar

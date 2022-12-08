import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { RouteType } from 'routes'

import Item from './Item'
import * as S from './styles'

interface Props {
  routes: RouteType[]
  company: {
    name: string
    image: string
  }
}

const Sidebar: FC<Props> = ({ company, routes }) => {
  const location = useLocation()

  return (
    <S.Container>
      <S.CompanyContainer to='/'>
        <S.CompanyImage src={company.image}/>

        {company.name}
      </S.CompanyContainer>

      <S.Content>
        {
          routes.map(item => (
            <Item
              key={item.path}
              label={item.name ?? ''}
              IconComponent={item.icon?.component}
              iconSize={item.icon?.size}
              path={item.path}
              active={item.path === location.pathname}
            />
          ))
        }
      </S.Content>
    </S.Container>
  )
}

export default Sidebar

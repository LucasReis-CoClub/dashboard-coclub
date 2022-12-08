import React, { FC } from 'react'

import * as S from './styles'

interface Props {
  label: string
  IconComponent?: any
  iconSize?: number
  path?: string
  active: boolean
}

const Item: FC<Props> = ({ label, IconComponent, iconSize, path, active }) => {
  return (
    <S.Container to={path as any} active={active ? true : undefined}>
      { !!IconComponent &&
        <S.IconContainer>
          <IconComponent fontSize={iconSize ?? 20}/>
        </S.IconContainer>
      }

      { label }
    </S.Container>
  )
}

export default Item

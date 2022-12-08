import React, { FC } from 'react'

import * as S from './styles'

interface Props {
  style?: any
}

const Input: FC<Props> = ({ style }) => {
  return (
    <S.Input style={style} placeholder='name@company.com'/>
  )
}

export default Input

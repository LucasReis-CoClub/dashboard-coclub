import React, { FC } from 'react'

import * as S from './styles'

interface Props {
  styles?: React.CSSProperties
}

const Button: FC<Props> = ({ styles }) => {
  return (
    <S.Button style={styles}>Continue</S.Button>
  )
}

export default Button

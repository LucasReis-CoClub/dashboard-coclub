import React, { FC } from 'react'

import * as S from './styles'

interface Props {
  label?: string
  styles?: React.CSSProperties
  onClick?: () => void
}

const Button: FC<Props> = ({ label, styles, onClick, ...rest }) => {
  return (
    <S.Button onClick={onClick} style={styles} {...rest}>{label}</S.Button>
  )
}

export default Button

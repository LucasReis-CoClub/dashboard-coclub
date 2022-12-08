import React, { FC } from 'react'
import { useRouteError } from 'react-router-dom'

import * as S from './styles'

const Error: FC = () => {
  const error: any = useRouteError()

  return (
    <S.Container>
      <S.Title>Oops!</S.Title>

      <S.Subtitle>Sorry, an unexpected error has occurred.</S.Subtitle>

      <S.Error>{error?.statusText || error?.message}</S.Error>
    </S.Container>
  )
}

export default Error

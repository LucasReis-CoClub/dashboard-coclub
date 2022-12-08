import React, { FC } from 'react'

import * as S from './styles'

const Login: FC = () => {
  return (
    <S.Container>
      <S.Logo />
      <S.Title>Sign in to coClub as Admin</S.Title>

      <S.InputsContainer>
        <S.Input />

        <S.Button />
      </S.InputsContainer>
    </S.Container>
  )
}

export default Login

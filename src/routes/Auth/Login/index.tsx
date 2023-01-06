import React, { FC } from 'react'

import Strings from 'contexts/Strings'

import * as S from './styles'

const Login: FC = () => {
  const { translate } = Strings.useStrings()

  return (
    <S.Container>
      <S.Logo />
      <S.Title>{translate('dash-page-login-title')}</S.Title>

      <S.InputsContainer>
        <S.Input placeholder={translate('dash-page-login-email_placeholder')}/>

        <S.Button label={translate('dash-generic-continue')}/>
      </S.InputsContainer>
    </S.Container>
  )
}

export default Login

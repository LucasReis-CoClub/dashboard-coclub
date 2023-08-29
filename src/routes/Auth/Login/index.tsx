/*eslint-disable*/
import React, { FC, useState } from 'react'

import Strings from 'contexts/Strings'
import * as S from './styles'
// import { useNavigate } from 'react-router-dom'
import { postAuthLink } from 'services/LoginApi'

const Login: FC = () => {
  const { translate } = Strings.useStrings()
  // const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleOnSubmit () {
    const sanitizedEmail = email.trim().toLowerCase();
    postAuthLink(sanitizedEmail);
  }
  
  return (
    <S.Container>
      <S.Logo />
      <S.Title>{translate('dash-page-login-title')}</S.Title>

      <S.InputsContainer>
        <S.Input
          placeholder={translate('dash-page-login-email_placeholder')}
          onChange={setEmail}
        />
        {/* temp */}
        <S.Input
          placeholder={translate('dash-page-login-password_placeholder')}
          onChange={setPassword}
        />
        <S.Button onClick={handleOnSubmit} label={translate('dash-generic-continue')} />
      </S.InputsContainer>
    </S.Container>
  )
}

export default Login

/* eslint-disable */
import React, { FC, useEffect, useState } from 'react'

import * as S from './styles'
import Strings from 'contexts/Strings'

import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { ResponseApiError } from 'dto/responseError'
import { useHandledService } from 'hooks/handledService'
import { ShowLoginErroMessage } from 'util/LoginFuncs'
import { setUserToken } from 'services/UserToken'
import { ConstLocalStorage } from 'configs/Constants'

const Login: FC = () => {
  const { translate } = Strings.useStrings()
  const navigate = useNavigate()

  /* states */
  const [flag, setFlag] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<any>('')

  /* funcs */
  async function handleOnSubmit() {
    const sanitizedEmail = email.trim().toLowerCase()

    try {
      await useHandledService('POST', '/auth/login', {
        email: sanitizedEmail,
        password,
      })
        .then(async (response: any) => {
          /* save data at local storage */
          await setUserToken(response.data.data)
          navigate('/')
        })
        .catch((err: AxiosError) => {
          setErrorMessage(ShowLoginErroMessage(err.response?.data as ResponseApiError))
          toggleErrorMessage()
        })
    } catch (e) {
      console.log(e)
    }
  }

  function toggleErrorMessage() {
    setFlag(!flag)
  }

  useEffect(() => {
    setFlag(false)
  }, [])

  return (
    <S.Container>
      <S.Logo />
      <S.Title>{translate('dash-page-login-title')}</S.Title>
      <S.TextErrorMessage>{errorMessage}</S.TextErrorMessage>
      <S.InputsContainer>
        <S.Input
          placeholder={translate('dash-page-login-email_placeholder')}
          onChange={setEmail}
        />
        {/* temp -> login sera feito com codigo de verificação */}
        <S.Input
          placeholder={'Senha' /* temp */} // translate('dash-page-login-password_placeholder')
          onChange={setPassword}
          type="password"
        />
        <S.Button
          onClick={async () => {
            await handleOnSubmit()
          }}
          label={translate('dash-generic-continue')}
        />
      </S.InputsContainer>
    </S.Container>
  )
}

export default Login

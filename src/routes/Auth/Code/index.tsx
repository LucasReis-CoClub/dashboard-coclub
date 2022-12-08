import React, { FC, useState } from 'react'
import ReactCodeInput from 'react-code-input'

import { colors } from 'styles/colors'

import * as S from './styles'

const Code: FC = () => {
  const props: any = {
    inputStyle: {
      margin: '5px',
      width: '50px',
      height: '50px',
      borderRadius: '7px',
      fontSize: '30px',
      backgroundColor: colors.lightShadow,
      color: colors.primary,
      border: `1px solid ${colors.lightGray}`,
      textAlign: 'center',
      '-webkit-appearance': 'textfield'
    }
  }
  const [code, setCode] = useState('')

  const email = 'jose@willbank.com.br'

  return (
    <S.Container>
      <S.Logo />
      <S.Title>We sent you a code</S.Title>

      <S.InputsContainer>
        <ReactCodeInput value={code} type='number' fields={6} inputMode='numeric' name='asdasd' onChange={pinCode => setCode(pinCode)} {...props} />
      </S.InputsContainer>

      <S.Subtitle>Can’t find your code on “{email}”?<br />Please, check your spam folder.</S.Subtitle>
    </S.Container>
  )
}

export default Code

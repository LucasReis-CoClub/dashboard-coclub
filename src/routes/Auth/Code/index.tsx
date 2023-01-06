import React, { FC, useState } from 'react'
import ReactCodeInput from 'react-code-input'

import Strings from 'contexts/Strings'
import { colors } from 'styles/colors'

import * as S from './styles'

const Code: FC = () => {
  const { translate } = Strings.useStrings()

  const [code, setCode] = useState('')

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
      textAlign: 'center'
    }
  }

  const email = 'jose@willbank.com.br'
  const description = translate('dash-page-code-description').replace('<email>', email)

  return (
    <S.Container>
      <S.Logo />
      <S.Title>{translate('dash-page-code-title')}</S.Title>

      <S.InputsContainer>
        <ReactCodeInput value={code} type='number' fields={6} inputMode='numeric' onChange={pinCode => setCode(pinCode)} {...props} />
      </S.InputsContainer>

      <S.Subtitle>{description.split('<br>')[0]}<br />{description.split('<br>')[1]}</S.Subtitle>
    </S.Container>
  )
}

export default Code

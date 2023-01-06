import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Strings from 'contexts/Strings'

import * as S from './styles'

const Error: FC = () => {
  const navigate = useNavigate()
  const { translate } = Strings.useStrings()

  return (
    <S.Container>
      <S.LogoIcon />

      <S.Content>
        <S.TextContainer>
          <S.Title>{translate('dash-page-error-title')}</S.Title>

          <S.Subtitle>{translate('dash-page-error-description')}</S.Subtitle>

          <S.Button label={translate('dash-page-error-button')} onClick={() => navigate('/')}/>
        </S.TextContainer>

        <S.NoPageIcon />
      </S.Content>
    </S.Container>
  )
}

export default Error

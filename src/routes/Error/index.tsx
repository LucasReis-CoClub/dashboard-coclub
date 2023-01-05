import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

const Error: FC = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.LogoIcon />

      <S.Content>
        <S.TextContainer>
          <S.Title>Oops!</S.Title>

          <S.Subtitle>{' We can\'t seem to find the page you\'re looking for.'}</S.Subtitle>

          <S.Button label='Home' onClick={() => navigate('/')}/>
        </S.TextContainer>

        <S.NoPageIcon />
      </S.Content>
    </S.Container>
  )
}

export default Error

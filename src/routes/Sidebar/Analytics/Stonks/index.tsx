import React, { FC } from 'react'

import * as S from './styles'

interface Props {
  text: string
  positive: boolean
}

const Stonks: FC<Props> = ({ text, positive }) => {
  return (
    <S.Container positive={positive}>
      <S.ArrowContainer positive={positive}>
        <S.Arrow positive={positive}/>
      </S.ArrowContainer>

      {text}
    </S.Container>
  )
}

export default Stonks

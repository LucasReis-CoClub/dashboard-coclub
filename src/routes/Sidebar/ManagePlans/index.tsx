import React, { FC } from 'react'

import Strings from 'contexts/Strings'

import * as S from './styles'

const ManagePlans: FC = () => {
  const { translate } = Strings.useStrings()

  return (
    <S.Container>
      <S.Title>{translate('dash-page-manage_plan-title')}</S.Title>
    </S.Container>
  )
}

export default ManagePlans

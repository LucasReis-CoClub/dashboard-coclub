import React, { FC } from 'react'
import { TbCameraPlus } from 'react-icons/tb'

import * as S from './styles'

const CompanyProfile: FC = () => {
  return (
    <S.Container>
      <S.Title>Company Profile</S.Title>

      <S.EditImageContainer>
        <S.EditImageButton>
          <TbCameraPlus />
        </S.EditImageButton>
        Edit
      </S.EditImageContainer>

      <S.Input label='Company Friendly Name' placeholder='Name'/>
    </S.Container>
  )
}

export default CompanyProfile

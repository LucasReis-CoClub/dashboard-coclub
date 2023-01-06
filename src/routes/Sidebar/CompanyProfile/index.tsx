import React, { FC, useRef, useState } from 'react'
import { TbCameraPlus } from 'react-icons/tb'

import Strings from 'contexts/Strings'

import * as S from './styles'

const CompanyProfile: FC = () => {
  const { translate } = Strings.useStrings()
  const hiddenFileInput = useRef<any>()

  const [image, setImage] = useState<any>()

  const onImageClick = () => {
    hiddenFileInput?.current?.click()
  }

  const handleImageChange = (event: any) => {
    const reader = new FileReader()
    reader.onload = (e: any) => {
      setImage(e.target.result)
    }
    reader.readAsDataURL(event.target.files[0])
  }

  return (
    <S.Container>
      <S.Title>{translate('dash-page-company_profile-title')}</S.Title>

      <S.EditImageContainer>
        <S.EditImageButton onClick={onImageClick}>
          {
            !image
              ? (
              <TbCameraPlus />
                )
              : (
              <S.EditImage src={image}/>
                )
          }
        </S.EditImageButton>
        {translate('dash-page-company_profile-edit')}

        <S.EditImageFileInput ref={hiddenFileInput} onChange={handleImageChange} type="file" accept=".jpg,.png" />
      </S.EditImageContainer>

      <S.Input label={translate('dash-page-company_profile-name_input_label')} placeholder={translate('dash-page-company_profile-name_input_placeholder')}/>
    </S.Container>
  )
}

export default CompanyProfile

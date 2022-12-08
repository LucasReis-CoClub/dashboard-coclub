import React, { FC } from 'react'
import { MdHelpOutline } from 'react-icons/md'
import { AiOutlineBell } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'

import { colors } from 'styles/colors'

import * as S from './styles'

const Header: FC = () => {
  return (
    <S.Container>
      <S.LogoContainer to='/'>
        <S.Logo />
      </S.LogoContainer>

      <S.RightContainer>
        <S.Button>
          <MdHelpOutline fontSize={25} color={colors.background}/>
        </S.Button>

        <S.Button>
          <AiOutlineBell fontSize={25} color={colors.background}/>
        </S.Button>

        <S.Button>
          <S.ProfileContainer>
            <BsFillPersonFill fontSize={25} color={colors.secondary}/>
          </S.ProfileContainer>
        </S.Button>
      </S.RightContainer>
    </S.Container>
  )
}

export default Header

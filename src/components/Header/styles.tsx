import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as LogoSvg } from 'assets/images/svg/logo.svg'

import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
`

export const LogoContainer = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`

export const Logo = styled(LogoSvg)`
  height: 30px;
  width: 120px;
`

export const RightContainer = styled.div`
  display: flex;
  direction: row;
`

export const Button = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 0 7px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;

  &:hover {
    cursor: pointer;
    background: #ffffff10;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  overflow: hidden;
`

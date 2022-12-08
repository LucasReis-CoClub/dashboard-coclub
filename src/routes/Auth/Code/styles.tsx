import styled from 'styled-components'

import { ReactComponent as LogoSvg } from 'assets/images/svg/logo-dark.svg'
import { colors } from 'styles/colors'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: ${colors.background};
  flex-direction: column;
  align-items: center;
  padding: 80px;
`

export const Logo = styled(LogoSvg)`
  height: 30px;
  width: 120px;
`

export const Title = styled.h1`
  margin-top: 60px;
  font-weight: 500;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

export const Subtitle = styled.p`
  margin-top: 40px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: ${colors.gray};
`

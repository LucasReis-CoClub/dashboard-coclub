import styled from 'styled-components'

import { ReactComponent as NoPage } from 'assets/images/svg/no-page.svg'
import { ReactComponent as Logo } from 'assets/images/svg/logo-dark.svg'
import B from 'components/Button'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  padding: 20px 30px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10%;
  gap: 50px;
`

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const Title = styled.h1`
  font-weight: 700;
`

export const Subtitle = styled.h2`
  font-weight: 300;
`

export const Button = styled(B)`
  width: 50%;
`

export const NoPageIcon = styled(NoPage)`
  flex: 1;
`

export const LogoIcon = styled(Logo)`
  height: 30px;
  width: 120px;
`

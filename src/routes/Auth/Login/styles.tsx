import styled from 'styled-components'

import B from 'components/Button'
import I from 'components/Input'

import { ReactComponent as LogoSvg } from 'assets/images/svg/logo-dark.svg'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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

export const Input = styled(I)``

export const Button = styled(B).attrs({
  styles: {
    marginTop: 20
  }
})``

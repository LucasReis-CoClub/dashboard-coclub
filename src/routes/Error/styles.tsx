import styled from 'styled-components'
import { colors } from 'styles/colors'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-weight: 700;
`

export const Subtitle = styled.h2`
  font-weight: 300;
  margin-top: 30px;
`

export const Error = styled.h3`
  font-weight: 500;
  color: ${colors.gray};
  margin-top: 30px;
`

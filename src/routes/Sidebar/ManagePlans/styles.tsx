import styled from 'styled-components'

import { colors } from 'styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  background-color: ${colors.background};
`

export const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
`

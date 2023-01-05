import styled from 'styled-components'

import I from 'components/Input'
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

export const EditImageContainer = styled.div`
  display: flex;
  width: 140px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const EditImageButton = styled.div`
  display: flex;
  width: 140px;
  height: 140px;
  border-radius: 70px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightShadow};
  border: 2px solid ${colors.lightGray};
  font-size: 50px;
  margin-bottom: 7px;

  &:hover {
    cursor: pointer;
  }
`

export const Input = styled(I)`
  width: 40vw;
`

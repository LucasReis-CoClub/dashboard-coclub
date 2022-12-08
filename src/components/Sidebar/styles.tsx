import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from 'styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 18vw;
  border-right: 1px solid ${colors.lightGray};
`

export const CompanyContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  padding-bottom: 10px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`

export const CompanyImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 18px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

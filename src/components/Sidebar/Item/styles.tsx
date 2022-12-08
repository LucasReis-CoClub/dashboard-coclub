import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from 'styles/colors'

const activeStyle = `
  cursor: pointer;
  background: ${colors.lightShadow};
  color: ${colors.secondary};
`

export const Container = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 20px;
  display: flex;
  background: transparent;
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;

  ${({ active }) => active ? activeStyle : ''}

  &:hover { 
    ${activeStyle} 
  }
`

export const IconContainer = styled.div`
  display: flex;
  margin-right: 20px;
`

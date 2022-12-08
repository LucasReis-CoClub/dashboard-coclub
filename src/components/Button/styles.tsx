import styled from 'styled-components'

import { colors } from 'styles/colors'

export const Button = styled.button`
  width: 100%;
  background: ${colors.secondary};
  border: 0;
  padding: 10px;
  border-radius: 12px;
  color: ${colors.background};
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }
`

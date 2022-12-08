import styled from 'styled-components'
import { colors } from 'styles/colors'

export const Input = styled.input`
  padding: 10px 15px;
  border-radius: 6px;
  border: 0.5px solid ${colors.primary};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none !important;
    border: 0.5px solid ${colors.primary};
  }
`

import styled from 'styled-components'

import { colors } from 'styles/colors'

import { CheckboxState } from '.'

export const Button = styled.button<{ state: CheckboxState }>`
  display: flex;
  background: transparent;
  border: 0;
  font-size: 22px;
  color: ${({ state }) => state === 'checked' ? colors.secondary : colors.gray};

  &:hover {
    cursor: pointer;
  }
`

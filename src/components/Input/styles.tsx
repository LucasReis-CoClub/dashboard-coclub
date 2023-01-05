import styled from 'styled-components'

import { colors } from 'styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  position: relative;
  min-height: 50px;
  align-items: center;
  padding-right: 10px;

  border: 1px solid ${colors.gray};
  border-radius: 10px;

  box-shadow: 1px 2px 9px ${colors.primary}22;

  &:hover {
    cursor: text;
  }
`

export const Label = styled.p`
  display: flex;
  margin-bottom: 8px;
  font-size: 14px;
  color: ${colors.primary};
  font-weight: 300;
`

export const Input = styled.input`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0 10px;
  font-size: 17px;
  font-weight: 300;
  background-color: transparent;
  
  border: 0;

  &:focus {
    outline: none;
  }
`

export const Placeholder = styled.p<{ hidden: boolean }>`
  display: flex;
  position: absolute;
  margin-bottom: ${({ hidden }) => hidden ? 35 : 0}px;
  font-size: ${({ hidden }) => hidden ? 10 : 16}px;
  left: 10px;
  color: ${({ hidden }) => hidden ? colors.gray : colors.primary};
  font-weight: 300;
  pointer-events: none;
  
  transition: all 0.5s;
`

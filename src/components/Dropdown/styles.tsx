import styled from 'styled-components'

import { colors } from 'styles/colors'

export const Wrapper = styled.div`
  z-index: 100;
  position: relative;
`

export const Container = styled.div<{ opened: boolean, duration: number }>`
  display: flex;
  min-height: 50px;
  min-width: 200px;
  align-items: center;
  padding: 0 10px;

  border: 1px solid ${colors.gray};
  border-radius: 10px;
  
  ${({ opened }) => opened ? 'border-bottom-left-radius: 0' : ''};
  ${({ opened }) => opened ? 'border-bottom-right-radius: 0' : ''};

  box-shadow: 1px 2px 9px ${colors.primary}22;

  transition: all ${({ duration }) => duration}ms;

  &:hover {
    cursor: pointer;
  }
`

export const Placeholder = styled.p`
  display: flex;
  flex: 1;
  font-size: 16px;
  left: 10px;
  color: ${colors.primary};
  font-weight: 300;
  pointer-events: none;
  margin-right: 10px;
`

export const DropdownContainer = styled.p<{ opened: boolean, duration: number }>`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  border: 0.5px solid ${colors.primary};
  border-top: 0;
  height: ${({ opened }) => opened ? 300 : 0}px;
  opacity: ${({ opened }) => opened ? 1 : 0};
  background-color: ${colors.background};
  border-radius: 0 0 10px 10px;
  overflow-y: scroll;
  padding: 10px;

  transition: all ${({ duration }) => duration}ms;
`

export const ItemContainer = styled.div`
  display: flex;
  padding: 7px 5px;
  font-size: 16px;
  color: ${colors.primary};
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }
`

export const ItemLabel = styled.p`
  display: flex;
`

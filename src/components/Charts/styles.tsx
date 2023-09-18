import styled from 'styled-components'
import { colors } from 'styles/colors'

export const Item = styled.div<{ outline?: boolean, scroolable?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  min-width: 200px;
  min-height: ${({ outline }) =>
    !outline
      ? `
          500px
        `
      : ''};
  max-height: 500px;
  box-shadow: 2px 3px 5px rgba(99, 99, 99, 0.3);
  ${({ scroolable }) =>
    scroolable
      ? `
          max-height: 500px;
          overflow-y: auto;
        `
      : ''};
`

export const ContentItem = styled.div<{ half?: boolean }>`
  width: ${({ half }) => half ? '50%' : '100%'};
`

export const ContentRow = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const ContentItemTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

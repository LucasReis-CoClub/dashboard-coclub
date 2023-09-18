import styled from 'styled-components'

import { colors } from 'styles/colors'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px 80px 60px;
  /* background-color: gray; //temp */
  background-color: ${colors.lightShadow};
   overflow-y: auto;
`

export const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
`

export const TopItemsContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
`

export const TopItemsScroll = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  padding: 0 60px;
  
  &::-webkit-scrollbar {
    display: none;
  }  
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

export const FadeContainerLeft = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  left: 0;
  height: 100%;
  width: 90px;
  background: ${`linear-gradient(90deg, ${colors.lightShadow} 50%, transparent 80%)`};
`

export const FadeContainerRight = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-end;
  right: 0;
  height: 100%;
  width: 90px;
  background: ${`linear-gradient(90deg, transparent 20%, ${colors.lightShadow} 50%)`};
`

export const TopButton = styled.button`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: transparent;
  border: 0;

  &:hover {
    background-color: ${colors.lightGray};
    cursor: pointer;
  }
`

export const TopItemsTitle = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.gray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const TopItemsValue = styled.p`
  font-size: 26px;
  font-weight: 400;
  color: ${colors.primary};
  margin: 2px 0;
`

export const Content = styled.div`
  width: 100%;
  /* background-color: yellow; // temp */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`
// del

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

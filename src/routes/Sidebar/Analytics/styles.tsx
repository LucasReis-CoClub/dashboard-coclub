import styled from 'styled-components'

import { colors } from 'styles/colors'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
  background-color: ${colors.lightShadow};
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

export const Item = styled.div<{ outline?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  border-radius: 20px;
  border: ${({ outline }) => outline ? `1px solid ${colors.lightPurple}` : 0};
  padding: 20px;
  margin: 10px;
  min-width: 200px;
`

export const Content = styled.ul`
  width: 100%;
  columns: 2;
  list-style-type: none;
  -webkit-columns: 2;
  -moz-columns: 2;
`

export const ContentItem = styled.ul``

export const ContentItemTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContentItemTitle = styled.h2`
  font-size: 16px;
  margin-right: 10px;
`

export const ContentItemSubtitle = styled.h3`
  font-size: 14px;
  margin-right: 10px;
  font-weight: 300;
`

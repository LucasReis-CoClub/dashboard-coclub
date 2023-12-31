import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
`

export const SidebarContainer = styled.div`
  display: flex;
  flex: 0.2;  
`

export const Content = styled.div`
  display: flex;
  flex: 0.8;  
  overflow: hidden;
`

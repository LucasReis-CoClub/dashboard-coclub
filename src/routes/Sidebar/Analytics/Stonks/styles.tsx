import styled from 'styled-components'
import { HiArrowSmRight } from 'react-icons/hi'

import { colors } from 'styles/colors'

export const Container = styled.div<{ positive: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ positive }) => positive ? colors.success : colors.secondary};
  font-size: 14px;
`

export const ArrowContainer = styled.div<{ positive: boolean }>`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ positive }) => positive ? `${colors.success}44` : `${colors.secondary}44`};
  margin-right: 5px;
`

export const Arrow = styled(HiArrowSmRight)<{ positive: boolean }>`
  transform: ${({ positive }) => `rotate(${positive ? '-45deg ' : '45deg'})`};
  font-size: 16px;
`

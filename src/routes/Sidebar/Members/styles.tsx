import styled from 'styled-components'
import { IoMdPersonAdd } from 'react-icons/io'

import { colors } from 'styles/colors'
import I from 'components/Input'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
  background-color: ${colors.background};
`

export const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Label = styled.h4`
  font-size: 16px;
  font-weight: 400;
`

export const UsersLabel = styled(Label)``

export const FilterLabel = styled(Label)`
  margin-right: 10px;
`

export const SearchInput = styled(I)`
  flex: 1;
`

export const InviteButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 0;
  background-color: transparent;

  &:hover {
    background-color: ${colors.lightShadow};
    cursor: pointer;
  }
`

export const InviteIcon = styled(IoMdPersonAdd)`
  margin-right: 10px;
  font-size: 18px;
  color: ${colors.secondary};
`

export const Table = styled.table`
  flex-direction: column;
  width: 100%;
  border-collapse: collapse;
`

export const TableRowHeader = styled.tr`
  width: 100%;
  background-color: ${colors.lightShadow};
  border-bottom: 2px solid ${colors.lightGray};
`

export const TableHeader = styled.th`
  text-align: left;
  padding: 5px 25px;
  font-size: 14px;
  font-weight: 600;
`

export const TableRow = styled.tr`
  width: 100%;
  border-bottom: 2px solid ${colors.lightGray};
`

export const TableRowItem = styled.td`
  text-align: left;
  padding: 15px 25px;
  font-size: 14px;
  font-weight: 300;
`

export const TableRowItemContent = styled.div`
  display: flex;
  align-items: center;
`

export const TableRowText = styled.p`
`

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 5px;
`

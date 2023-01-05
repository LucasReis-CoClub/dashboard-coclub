
import React, { FC } from 'react'
import { GoSearch } from 'react-icons/go'

import Checkbox from 'components/Checkbox'
import Dropdown from 'components/Dropdown'

import * as S from './styles'

const Members: FC = () => {
  const data = [
    { label: 'sadads1', value: '1' },
    { label: 'sadads2', value: '2' },
    { label: 'sadads3', value: '3' },
    { label: 'sadads4', value: '4' },
    { label: 'sadads5', value: '5' },
    { label: 'sadads6', value: '6' },
    { label: 'sadads7', value: '7' },
    { label: 'sadads8', value: '8' },
    { label: 'sadads9', value: '9' },
    { label: 'sadads10', value: '10' },
    { label: 'sadads11', value: '11' },
    { label: 'sadads12', value: '12' }
  ]
  return (
    <S.Container>
      <S.Title>Members</S.Title>

      <S.SearchContainer>
        <S.UsersLabel>1.289 users</S.UsersLabel>

        <S.FilterContainer>
          <S.FilterLabel>Filter by</S.FilterLabel>
          <Dropdown data={data} placeholder='All users' onChange={() => {}}/>
        </S.FilterContainer>

        <S.SearchInput placeholder='Search members' onChange={() => {}} rightIcon={<GoSearch />}/>

        <S.InviteButton><S.InviteIcon /> Invite members</S.InviteButton>
      </S.SearchContainer>

      <S.Table>
        <thead>
          <S.TableRowHeader>
            <S.TableHeader style={{ width: '3%' }}><Checkbox /></S.TableHeader>
            <S.TableHeader style={{ width: '20%' }}>Name</S.TableHeader>
            <S.TableHeader style={{ width: '30%' }}>Email</S.TableHeader>
            <S.TableHeader style={{ width: '10%' }}>Status</S.TableHeader>
            <S.TableHeader style={{ width: '10%' }}>Role</S.TableHeader>
            <S.TableHeader style={{ width: '12%' }}>Last active</S.TableHeader>
            <S.TableHeader style={{ width: '15%' }}>Company</S.TableHeader>
          </S.TableRowHeader>
        </thead>

        <tbody>
          <S.TableRow>
            <S.TableRowItem><Checkbox /></S.TableRowItem>
            <S.TableRowItem>
              <S.TableRowItemContent>
                <S.Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
                Juliana Silva
              </S.TableRowItemContent>
            </S.TableRowItem>
            <S.TableRowItem>juliana.silva@willbank.com.br</S.TableRowItem>
            <S.TableRowItem>Active</S.TableRowItem>
            <S.TableRowItem>Admin</S.TableRowItem>
            <S.TableRowItem>Sep 26, 2022</S.TableRowItem>
            <S.TableRowItem>will bank</S.TableRowItem>
          </S.TableRow>

          <S.TableRow>
            <S.TableRowItem><Checkbox /></S.TableRowItem>
            <S.TableRowItem>
              <S.TableRowItemContent>
                <S.Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
                Juliana Silva
              </S.TableRowItemContent>
            </S.TableRowItem>
            <S.TableRowItem>juliana.silva@willbank.com.br</S.TableRowItem>
            <S.TableRowItem>Active</S.TableRowItem>
            <S.TableRowItem>Admin</S.TableRowItem>
            <S.TableRowItem>Sep 26, 2022</S.TableRowItem>
            <S.TableRowItem>will bank</S.TableRowItem>
          </S.TableRow>
        </tbody>
      </S.Table>
    </S.Container>
  )
}

export default Members

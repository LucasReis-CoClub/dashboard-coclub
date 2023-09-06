import React from 'react'
import * as S from './styles'
import Stonks from 'routes/Sidebar/Analytics/Stonks'

export const TitleChart = ({
  title,
  positiveStonks,
  textStonks
}: {
  title: string
  positiveStonks: boolean
  textStonks: string
}) => {
  return (
    <>
      <S.ContentItemTitle>{title}</S.ContentItemTitle>
      <Stonks positive={positiveStonks} text={textStonks} />
    </>
  )
}

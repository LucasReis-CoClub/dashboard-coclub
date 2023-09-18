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
  textStonks?: string
}) => {
  return (
    <div style={{
      width: '100%'
    }}>
      <S.ContentItemTitle>{title}</S.ContentItemTitle>
      {
        textStonks !== undefined && <Stonks positive={positiveStonks} text={textStonks} />
      }
    </div>
  )
}

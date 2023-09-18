import React, { ReactNode } from 'react'
import * as S from './styles'

export const ChartSection = ({
  children,
  title
}: {
  children: ReactNode
  title: string
}) => {
  return (
    <S.Section>
      <S.ChartSectionTitle>{title}</S.ChartSectionTitle>
      <S.Content>{children}</S.Content>
    </S.Section>
  )
}

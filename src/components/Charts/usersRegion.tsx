import React from 'react'
import * as S from './styles'
import { TitleChart } from 'components/TitleChart'
import Chart, { GoogleChartOptions } from 'react-google-charts'

export const UsersRegionChart = ({
  data,
  options
}: {
  data: any
  options?: GoogleChartOptions
}) => {
  return (
    <S.ContentItem half>
      <S.Item>
        <S.ContentItemTitleContainer>
          <TitleChart positiveStonks={true} title="Membros por região" />
        </S.ContentItemTitleContainer>

        {/* Membros por Região */}
        <Chart chartType="GeoChart" data={data} />
      </S.Item>
    </S.ContentItem>
  )
}

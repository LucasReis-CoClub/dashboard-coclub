import React from 'react'
import * as S from './styles'
import { TitleChart } from 'components/TitleChart'
import Chart, { GoogleChartOptions } from 'react-google-charts'

export const TopUsersChart = ({
  data,
  options
}: {
  data: any
  options: GoogleChartOptions
}) => {
  return (
    <S.ContentItem half>
      <S.Item scroolable>
        <S.ContentItemTitleContainer>
          <TitleChart positiveStonks={true} title="Usuários mais ativos" />
        </S.ContentItemTitleContainer>

        {/* usuários mais ativos */}
        <Chart
          chartType="BarChart"
          width="100%"
          data={data}
          options={options}
        />
      </S.Item>
    </S.ContentItem>
  )
}

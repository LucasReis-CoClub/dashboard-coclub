import React from 'react'
import * as S from './styles'
import { TitleChart } from 'components/TitleChart'
import Chart, { GoogleChartOptions } from 'react-google-charts'

export const UsersEngagedChart = ({
  data,
  options
}: {
  data: any
  options: GoogleChartOptions
}) => {
  return (
    <S.ContentRow>
      <S.ContentItem>
        <S.Item>
          <S.ContentItemTitleContainer>
            <TitleChart
              positiveStonks={true}
              title="Novos Membros - Último Ano"
            />
          </S.ContentItemTitleContainer>

          {/* Novos membros */}
          <Chart chartType="LineChart" data={data} options={options} />
        </S.Item>
      </S.ContentItem>
    </S.ContentRow>
  )
}

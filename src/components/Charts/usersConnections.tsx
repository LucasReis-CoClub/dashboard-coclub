import React from 'react'
import * as S from './styles'
import { TitleChart } from 'components/TitleChart'
import Chart, { GoogleChartOptions } from 'react-google-charts'

export const UsersConnections = ({
  data,
  options
}: {
  data: any
  options: GoogleChartOptions
}) => {
  return (
    <S.ContentRow>
      <S.ContentItem>
        <S.Item scroolable>
          <S.ContentItemTitleContainer>
            <TitleChart positiveStonks={true} title="Conexões" />
          </S.ContentItemTitleContainer>

          {/* conexão */}
          <Chart chartType="BarChart" data={data} options={options} />
        </S.Item>
      </S.ContentItem>
    </S.ContentRow>
  )
}

import React from 'react'
import * as S from './styles'
import { TitleChart } from 'components/TitleChart'
import Chart, { GoogleChartOptions } from 'react-google-charts'

export const UsersCitiesChart = ({
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
          <TitleChart positiveStonks={true} title="Cidades dos usuários" />
        </S.ContentItemTitleContainer>

        {/* Cidade por usuários */}
        <Chart chartType="BarChart" diffdata={data} options={options} />
      </S.Item>
    </S.ContentItem>
  )
}

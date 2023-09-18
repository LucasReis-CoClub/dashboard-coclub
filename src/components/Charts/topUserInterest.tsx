import React from 'react'
import * as S from './styles'
import { TitleChart } from 'components/TitleChart'
import Chart, { GoogleChartOptions } from 'react-google-charts'

export const TopUserInterestChart = ({
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
          <TitleChart
            positiveStonks={true}
            title="Principais Interesses dos usuários"
          />
        </S.ContentItemTitleContainer>

        {/* principais interesses */}
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

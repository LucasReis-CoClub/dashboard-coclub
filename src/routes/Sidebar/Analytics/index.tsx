import React, { FC, useEffect, useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Chart } from 'react-google-charts' // Removed unused import
import { colors } from 'styles/colors'
import Strings from 'contexts/Strings'
import Stonks from './Stonks'
import * as S from './styles'

/* temp */
import { data, dataUE, optionsUE } from './temp'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Analytics: FC = () => {
  const scrollRef = useRef<any>()
  const { translate } = Strings.useStrings()
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function getWindowDimensions () {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }

  const scroll = (left: boolean) => {
    const scrollOffset = (windowDimensions.width * 0.5) * (left ? -1 : 1)
    const currentScroll = scrollRef.current.scrollLeft as number
    scrollRef.current.scroll({ left: currentScroll + scrollOffset, behavior: 'smooth' })
  }

  return (
    <S.Container>
      <S.Title>{translate('dash-page-analytics-title')}</S.Title>

      <S.TopItemsContainer>
        <S.FadeContainerLeft>
          <S.TopButton onClick={() => scroll(true)}>
            <BsChevronLeft fontSize={24} color={colors.primary} />
          </S.TopButton>
        </S.FadeContainerLeft>

        <S.TopItemsScroll ref={scrollRef}>
          {
            (data.map((item, index) =>
              <S.Item key={`${index}`} outline>
                <S.TopItemsTitle>{item.title}</S.TopItemsTitle>
                <S.TopItemsValue>{item.value}</S.TopItemsValue>
                {
                  !!item.date && (
                    <S.TopItemsTitle>{item.date}</S.TopItemsTitle>
                  )
                }
                {
                  !!item.stonks && (
                    <Stonks positive={item.stonks.positive} text={item.stonks.text} />
                  )
                }
              </S.Item>
            ))
          }
        </S.TopItemsScroll>

        <S.FadeContainerRight>
          <S.TopButton onClick={() => scroll(false)}>
            <BsChevronRight fontSize={24} color={colors.primary} />
          </S.TopButton>
        </S.FadeContainerRight>
      </S.TopItemsContainer>

      <S.Content>
        <S.ContentRow>
          <S.ContentItem half>
            <S.Item>
              <S.ContentItemTitleContainer>
                <S.ContentItemTitle>Novos Membros - Último Ano</S.ContentItemTitle>
                <Stonks positive text='+22%' />
              </S.ContentItemTitleContainer>
            </S.Item>
          </S.ContentItem>
          <S.ContentItem half>
            <S.Item scroolable>
              <S.ContentItemTitleContainer>
                <S.ContentItemTitle>Usuários Engajados</S.ContentItemTitle>
                <Stonks positive text='+22%' />
              </S.ContentItemTitleContainer>
              <Chart
                chartType="BarChart"
                width="100%"
                data={dataUE}
                options={optionsUE}
              />
            </S.Item>
          </S.ContentItem>
        </S.ContentRow>

        <S.ContentItem>
          <S.Item>
            <S.ContentItemTitleContainer>
              <S.ContentItemTitle>Novos Membros - Último Ano</S.ContentItemTitle>
              <Stonks positive text='+22%' />
            </S.ContentItemTitleContainer>
          </S.Item>
        </S.ContentItem>
      </S.Content>
    </S.Container>
  )
}

export default Analytics

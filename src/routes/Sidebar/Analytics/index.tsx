import React, { FC, useEffect, useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { colors } from 'styles/colors'
import Strings from 'contexts/Strings'

import Stonks from './Stonks'
import * as S from './styles'

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

  const data = [
    {
      title: 'Funcionários cadastrados',
      value: 3.789,
      date: null,
      stonks: {
        text: '+15%',
        positive: true
      }
    },
    {
      title: 'Mensagens trocadas',
      value: 233.908,
      date: 'Nov/22',
      stonks: null
    },
    {
      title: 'Média de conexões por colaborador',
      value: 102,
      date: null,
      stonks: {
        text: '+22%',
        positive: true
      }
    },
    {
      title: 'Interesses ativos ',
      value: 78,
      date: null,
      stonks: {
        text: '-10%',
        positive: false
      }
    },
    {
      title: 'Interesses ativos ',
      value: 78,
      date: null,
      stonks: {
        text: '-10%',
        positive: false
      }
    },
    {
      title: 'Interesses ativos ',
      value: 78,
      date: null,
      stonks: {
        text: '-10%',
        positive: false
      }
    }
  ]

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

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
            <BsChevronLeft fontSize={24} color={colors.primary}/>
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
                    <Stonks positive={item.stonks.positive} text={item.stonks.text}/>
                  )
                }
              </S.Item>
            ))
          }
        </S.TopItemsScroll>

        <S.FadeContainerRight>
          <S.TopButton onClick={() => scroll(false)}>
            <BsChevronRight fontSize={24} color={colors.primary}/>
          </S.TopButton>
        </S.FadeContainerRight>
      </S.TopItemsContainer>

      <S.Content>
        <S.ContentItem>
          <S.Item>
            <S.ContentItemTitleContainer>
              <S.ContentItemTitle>Conexões na empresa</S.ContentItemTitle>

              <Stonks positive text='+22%'/>
            </S.ContentItemTitleContainer>

            <Bar
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const
                  }
                }
              }}
              data={{
                labels,
                datasets: [
                  {
                    label: 'Dataset 1',
                    data: labels.map(() => Math.random() * 1000),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                  },
                  {
                    label: 'Dataset 2',
                    data: labels.map(() => Math.random() * 1000),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)'
                  }
                ]
              }}
            />
          </S.Item>
        </S.ContentItem>

        <S.ContentItem>
          <S.Item>
            <S.ContentItemTitleContainer>
              <S.ContentItemTitle>Proxy turn over -</S.ContentItemTitle>

              <S.ContentItemSubtitle>Membros coClub vs Não membros</S.ContentItemSubtitle>
            </S.ContentItemTitleContainer>

            <Bar
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const
                  }
                }
              }}
              data={{
                labels,
                datasets: [
                  {
                    label: 'Dataset 1',
                    data: labels.map(() => Math.random() * 1000),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                  },
                  {
                    label: 'Dataset 2',
                    data: labels.map(() => Math.random() * 1000),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)'
                  }
                ]
              }}
            />
          </S.Item>
        </S.ContentItem>
      </S.Content>
    </S.Container>
  )
}

export default Analytics

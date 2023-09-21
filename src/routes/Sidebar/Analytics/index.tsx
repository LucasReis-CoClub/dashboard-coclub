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
// import { Chart } from 'react-google-charts' // Removed unused import
import { colors } from 'styles/colors'
import Strings from 'contexts/Strings'
import Stonks from './Stonks'
import * as S from './styles'

/* temp */
import {
  data,
  dataCities,
  dataConnDiff,
  dataGeo,
  dataMainInterest,
  dataNewMembers,
  dataUE,
  optionsCities,
  optionsConn,
  optionsGeo,
  optionsMainInterest,
  optionsNewMembers,
  optionsUE
} from './temp'
import { ChartSection } from 'components/ChartSection'
import { UsersEngagedChart } from 'components/Charts/usersEngaged'
import { TopUserInterestChart } from 'components/Charts/topUserInterest'
import { TopUsersChart } from 'components/Charts/topUsers'
import { UsersConnections } from 'components/Charts/usersConnections'
import { UsersRegionChart } from 'components/Charts/usersRegion'
import { UsersCitiesChart } from 'components/Charts/usersCities'
import { generateChartData } from 'util/ChartFuncs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Analytics: FC = () => {
  const scrollRef = useRef<any>()
  const { translate } = Strings.useStrings()
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  console.log('aq')
  console.log(localStorage.getItem('loginData'))
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
    const scrollOffset = windowDimensions.width * 0.5 * (left ? -1 : 1)
    const currentScroll = scrollRef.current.scrollLeft as number
    scrollRef.current.scroll({
      left: currentScroll + scrollOffset,
      behavior: 'smooth'
    })
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
          {data.map((item, index) => (
            <S.Item key={`${index}`} outline>
              <S.TopItemsTitle>{item.title}</S.TopItemsTitle>
              <S.TopItemsValue>{item.value}</S.TopItemsValue>
              {!!item.date && <S.TopItemsTitle>{item.date}</S.TopItemsTitle>}
              {!!item.stonks && (
                <Stonks
                  positive={item.stonks.positive}
                  text={item.stonks.text}
                />
              )}
            </S.Item>
          ))}
        </S.TopItemsScroll>

        <S.FadeContainerRight>
          <S.TopButton onClick={() => scroll(false)}>
            <BsChevronRight fontSize={24} color={colors.primary} />
          </S.TopButton>
        </S.FadeContainerRight>
      </S.TopItemsContainer>

      <S.Content>

        {/* Engajamento de usuários */}
        <ChartSection title="Engajamento do Usuário">
          <UsersEngagedChart data={dataNewMembers} options={optionsNewMembers} />
        </ChartSection>

        {/* top usuários e usuários engajados */}
        <ChartSection title="Top Usuário e Interesses">
          <TopUserInterestChart data={generateChartData(dataMainInterest)} options={optionsMainInterest} />
          <TopUsersChart data={generateChartData(dataUE)} options={optionsUE} />
        </ChartSection>

        {/* Conexões e amizades de usuários */}
        <ChartSection title="Conexões e Amizades">
          <UsersConnections data={dataConnDiff} options={optionsConn} />
        </ChartSection>

        {/* Localidade dos Usuários */}
        <ChartSection title="Localidade dos usuários">
          <UsersRegionChart data={dataGeo} options={optionsGeo} />
          <UsersCitiesChart data={generateChartData(dataCities)} options={optionsCities} />
        </ChartSection>

      </S.Content>
    </S.Container>
  )
}

export default Analytics

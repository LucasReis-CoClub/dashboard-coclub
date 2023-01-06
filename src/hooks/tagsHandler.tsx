/* eslint-disable prefer-regex-literals */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import usePersist from './persist'

export interface TagProps {
  tag: string
  value: string
}

type Props = (tags?: TagProps[]) => {
  handleTags: (item: string) => string
  handleStyleTags: (item: string) => any
}

const Strong = styled.p`
  font-weight: 700;
`

const SemiStrong = styled.p`
  font-weight: 500;
`

const useTagsHandler: Props = (tags) => {
  const { persistedData } = usePersist()

  const [tagValues, setTagValues] = useState<TagProps[]>([])

  useEffect(() => {
    setTagValues([])
    /* setTagValues([
      {
        tag: '<company>',
        value: persistedData?.userDetail?.companies?.length
          ? persistedData?.userDetail?.companies[0]?.name
          : persistedData?.selectedCompany?.name
      },
      {
        tag: '<currUser>',
        value: persistedData?.userDetail?.userDetail?.displayName
      },
      ...(tags ?? [])
    ]) */
  }, [persistedData])

  const handleTags = (item: string) => {
    let res = item
    for (let i = 0; i < tagValues.length; i++) {
      const reg = new RegExp(tagValues[i].tag, 'g')
      res = res.replace(reg, tagValues[i].value)
    }
    return res
  }

  const handleStyleTags = (text: string, customTags?: Array<{ tag: string, component: any }>) => {
    const tags = (customTags ?? []).concat([
      { tag: 'strong', component: Strong },
      { tag: 'semi-strong', component: SemiStrong }
    ])

    const regex = new RegExp('(<.*?>.*?</.*?>)', 'g')
    const splitText = text.split(regex)?.filter((item) => item)

    if (splitText?.length <= 0) return text

    return splitText?.map((item) => {
      for (let index = 0; index < tags.length; index++) {
        const tag = tags[index]
        const regex2 = new RegExp(`<${tag.tag}>(.*?)</${tag.tag}>`, 'g')
        const match = regex2.exec(item)

        if (match && match.length > 1) {
          const Component: any = tag.component
          return <Component>{match[1]}</Component>
        }
      }
      return item
    })
  }

  return {
    handleTags,
    handleStyleTags
  }
}

export default useTagsHandler

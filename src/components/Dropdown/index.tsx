import React, { FC, useEffect, useRef, useState } from 'react'

import { GoTriangleDown } from 'react-icons/go'

import * as S from './styles'

interface DataType {
  label: string
  value: string
}

interface Props {
  value?: string
  placeholder: string
  data: DataType[]
  onChange: (item: DataType) => void
  style?: any
}

let timeout1: any
let timeout2: any

const ANIMATION_DURATION = 500

const Dropdown: FC<Props> = ({ value, data, onChange, placeholder, style, ...rest }) => {
  const [opened, setOpened] = useState(false)
  const [hide, setHide] = useState(true)
  const [selected, setSelected] = useState<DataType>()

  const ref = useRef<any>()

  useEffect(() => {
    if (value) {
      const item = data.find(item => item.value === value)

      if (item) {
        setSelected(item)
      }
    }
  }, [value])

  useEffect(() => {
    function handleClickOutside (event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  const onClick = () => {
    if (opened) {
      close()
    } else {
      open()
    }
  }

  const onItemClick = (item: DataType) => {
    onChange(item)
    setSelected(item)
    close()
  }

  const open = () => {
    clearTimeout(timeout1)
    clearTimeout(timeout2)

    setHide(false)

    timeout2 = setTimeout(() => {
      setOpened(true)
    }, 0)
  }

  const close = () => {
    clearTimeout(timeout1)
    clearTimeout(timeout2)

    timeout1 = setTimeout(() => {
      setHide(true)
    }, ANIMATION_DURATION)

    timeout2 = setTimeout(() => {
      setOpened(false)
    }, 0)
  }

  return (
    <S.Wrapper ref={ref}>
      <S.Container
        style={style}
        onClick={onClick}
        opened={opened}
        duration={ANIMATION_DURATION}
      >
        <S.Placeholder>{selected ? selected.label : placeholder}</S.Placeholder>

        <GoTriangleDown />
      </S.Container>

      {
        !hide && (
          <S.DropdownContainer opened={opened} duration={ANIMATION_DURATION}>
            {
              data.map(item => (
                <S.ItemContainer key={item.value} onClick={() => onItemClick(item)}>
                  <S.ItemLabel>{item.label}</S.ItemLabel>
                </S.ItemContainer>
              ))
            }
          </S.DropdownContainer>
        )
      }
    </S.Wrapper>
  )
}

export default Dropdown

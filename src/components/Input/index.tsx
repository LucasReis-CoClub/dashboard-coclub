import React, { FC, useRef, useState } from 'react'

import * as S from './styles'

interface Props {
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
  rightIcon?: any
}

const Input: FC<Props> = ({ label, onChange, placeholder, rightIcon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [text, setText] = useState<string>('')

  const inputRef = useRef<any>()

  const handleChange = (event: any) => {
    setText(event.target.value)
    if (onChange) onChange(event.target.value)
  }

  return (
    <S.Wrapper {...rest}>
      {
        !!label && (
          <S.Label>{label}</S.Label>
        )
      }
      <S.Container
        onClick={() => {
          if (inputRef?.current?.focus) inputRef?.current?.focus()
        }}
      >
        <S.Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          ref={inputRef}
        />

        {
          !!placeholder && (
            <S.Placeholder hidden={isFocused || !!text}>{placeholder}</S.Placeholder>
          )
        }

        { rightIcon }
      </S.Container>
    </S.Wrapper>
  )
}

export default Input

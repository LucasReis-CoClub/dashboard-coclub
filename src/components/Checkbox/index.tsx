import React, { FC, useEffect, useState } from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdIndeterminateCheckBox } from 'react-icons/md'

import * as S from './styles'

export type CheckboxState = 'checked' | 'indeterminate' | 'unchecked'

interface Props {
  state?: CheckboxState
  onClick?: (state: CheckboxState) => void
}

const Checkbox: FC<Props> = ({ state, onClick }) => {
  const [curState, setCurState] = useState<CheckboxState>('unchecked')

  useEffect(() => {
    setCurState(state ?? 'unchecked')
  }, [state])

  const onChange = () => {
    const newState = curState === 'checked' ? 'unchecked' : 'checked'
    setCurState(newState)
    if (onClick) onClick(newState)
  }

  return (
    <S.Button state={curState} onClick={onChange}>
      {
        curState === 'checked'
          ? <MdCheckBox />
          : curState === 'indeterminate'
            ? <MdIndeterminateCheckBox />
            : <MdCheckBoxOutlineBlank />
      }
    </S.Button>
  )
}

export default Checkbox

import React from 'react'
import * as S from './styles'

type ButtonProps = {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return <S.Button>{children}</S.Button>
}

export default Button

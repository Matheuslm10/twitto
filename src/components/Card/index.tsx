import React from 'react'
import * as S from './styles'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return <S.Card>{children}</S.Card>
}

export default Card

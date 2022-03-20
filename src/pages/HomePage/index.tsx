import React from 'react'
import * as S from './styles'

import Card from 'components/Card'
import Header from 'components/Header'

const HomePage = () => {
  return (
    <S.HomePage>
      <Header />
      <S.Wrapper>
        <Card>Card Content</Card>
      </S.Wrapper>
    </S.HomePage>
  )
}

export default HomePage

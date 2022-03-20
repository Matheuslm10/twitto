import React from 'react'
import * as S from './styles'

import Card from 'components/Card'
import Header from 'components/Header'
import PostMaker from 'components/PostMaker'

const HomePage = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <PostMaker />
        <Card>Card Content</Card>
      </S.Wrapper>
    </>
  )
}

export default HomePage

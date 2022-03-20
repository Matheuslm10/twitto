import React from 'react'
import * as S from './styles'

import Header from 'components/Header'
import Post from 'components/Post'
import PostMaker from 'components/PostMaker'

const HomePage = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <PostMaker />
        <Post />
      </S.Wrapper>
    </>
  )
}

export default HomePage

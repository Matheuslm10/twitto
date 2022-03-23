import React from 'react'
import * as S from './styles'

import Header from 'components/Header'
import Post from 'components/Post'
import PostMaker from 'components/PostMaker'

import { usePosts } from 'hooks/use-posts'

const HomePage = () => {
  const { allPosts } = usePosts()
  const isEmpty = allPosts.length === 0
  const isPostsLoaded = allPosts !== undefined

  return (
    <>
      <Header />
      <S.Wrapper>
        <PostMaker />
        {!isPostsLoaded && 'An error occurred while loading the posts'}

        {isPostsLoaded && isEmpty
          ? "There's nothing here yet"
          : allPosts.map((postInfo) => (
              <Post {...postInfo} key={postInfo.id} />
            ))}
      </S.Wrapper>
    </>
  )
}

export default HomePage

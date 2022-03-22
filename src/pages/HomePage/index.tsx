import React, { useEffect, useState } from 'react'
import * as S from './styles'

import Header from 'components/Header'
import Post from 'components/Post'
import PostMaker from 'components/PostMaker'

import initialPosts from 'mock/posts.json'

type PostType = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

const HomePage = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    const loadPosts = () => {
      const dataFromLocalStorage = JSON.parse(
        localStorage.getItem('@posterr_data') || '{}'
      )

      if (dataFromLocalStorage?.data) {
        setPosts(dataFromLocalStorage.data || [])
      } else {
        localStorage.setItem('@posterr_data', JSON.stringify(initialPosts))
        loadPosts()
      }
    }

    loadPosts()
  }, [])

  return (
    <>
      <Header />
      <S.Wrapper>
        <PostMaker />
        {posts.map((postInfo) => (
          <Post {...postInfo} key={postInfo.id} />
        ))}
      </S.Wrapper>
    </>
  )
}

export default HomePage

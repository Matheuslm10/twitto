import React from 'react'
import * as S from './styles'

import Card from 'components/Card'

import userExample from 'assets/user-example.jpeg'

type PostProps = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

const Post = ({ author, postContent }: PostProps) => {
  return (
    <Card>
      <S.Wrapper>
        <S.ProfilePicture src={userExample} />
        <S.TextWrapper>
          <S.UserInfoWrapper>
            <h1>{author.name}</h1>
            <h2>{'@' + author.username}</h2>
          </S.UserInfoWrapper>
          <S.PostContent>{postContent}</S.PostContent>
        </S.TextWrapper>
      </S.Wrapper>
    </Card>
  )
}

export default Post

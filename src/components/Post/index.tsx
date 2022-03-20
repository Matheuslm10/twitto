import React from 'react'
import * as S from './styles'

import Card from 'components/Card'

import userExample from 'assets/user-example.jpeg'

const user = {
  name: 'Jasmine Jones',
  username: 'jasmineJonJon',
  postContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Pellentesque at laoreet elit, nec facilisis felis. Aenean molestie, ipsum nec condimentum egestas, turpis arcu consequat felis, ut blandit urna dui in neque. Phasellus eu gravida ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Pellentesque at laoreet elit, nec facilisis felis. Aenean molestie, ipsum nec condimentum egestas, turpis arcu consequat felis, ut blandit urna dui in neque. Phasellus eu gravida ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Lorem ipsum dolor siti.',
}

const Post = () => {
  return (
    <Card>
      <S.Wrapper>
        <S.ProfilePicture src={userExample} />
        <S.TextWrapper>
          <S.UserInfoWrapper>
            <h1>{user.name}</h1>
            <h2>{'@' + user.username}</h2>
          </S.UserInfoWrapper>
          {user.postContent}
        </S.TextWrapper>
      </S.Wrapper>
    </Card>
  )
}

export default Post

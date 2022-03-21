import React from 'react'
import * as S from './styles'

import Header from 'components/Header'
import Post from 'components/Post'
import PostMaker from 'components/PostMaker'

const posts = [
  {
    id: 1,
    author: {
      name: 'Jasmine Jones',
      username: 'jasmineJonJon',
    },
    postContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Pellentesque at laoreet elit, nec facilisis felis. Aenean molestie, ipsum nec condimentum egestas, turpis arcu consequat felis, ut blandit urna dui in neque. Phasellus eu gravida ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Pellentesque at laoreet elit, nec facilisis felis. Aenean molestie, ipsum nec condimentum egestas, turpis arcu consequat felis, ut blandit urna dui in neque. Phasellus eu gravida ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Lorem ipsum dolor siti.',
  },
  {
    id: 2,
    author: {
      name: 'Josh Monroe',
      username: 'monroe2022',
    },
    postContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Pellentesque at laoreet elit, nec facilisis felis. Aenean molestie, ipsum nec condimentum egestas, turpis arcu consequat felis, ut blandit urna dui in neque. Phasellus eu gravida ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Pellentesque at laoreet elit, nec facilisis felis. Aenean molestie, ipsum nec condimentum egestas, turpis arcu consequat felis, ut blandit urna dui in neque. Phasellus eu gravida ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Lorem ipsum dolor siti.',
  },
  {
    id: 3,
    author: {
      name: 'Matheus Machado',
      username: 'matmachado',
    },
    postContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Pellentesque at laoreet elit, nec facilisis felis. Aenean molestie, ipsum nec condimentum egestas, turpis arcu consequat felis, ut blandit urna dui in neque. Phasellus eu gravida ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Pellentesque at laoreet elit, nec facilisis felis. Aenean molestie, ipsum nec condimentum egestas, turpis arcu consequat felis, ut blandit urna dui in neque. Phasellus eu gravida ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum nisl et nisl laoreet, in euismod risus bibendum. Lorem ipsum dolor siti.',
  },
]

const HomePage = () => {
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

import React from 'react'
import * as S from './styles'

import Card from 'components/Card'
import Button from 'components/Button'

const PostMaker = () => {
  return (
    <S.PostMaker>
      <Card>
        <S.Wrapper>
          <S.TextInput
            placeholder="What's happening?"
            contentEditable="true"
            suppressContentEditableWarning={true}
          ></S.TextInput>
          <Button>Post</Button>
        </S.Wrapper>
      </Card>
    </S.PostMaker>
  )
}

export default PostMaker

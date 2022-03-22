import React, { useEffect, useCallback, useState } from 'react'
import * as S from './styles'

import Card from 'components/Card'
import Button from 'components/Button'

const PostMaker = () => {
  const maxNumberOfCharacters = 777
  const [numberOfCharactersLeft, setNumberOfCharactersLeft] = useState(
    maxNumberOfCharacters
  )
  const [submitBtnIsEnabled, setSubmitBtnIsEnabled] = useState(false)
  const [exceedsTheLimit, setExceedsTheLimit] = useState(false)

  const handleInput = useCallback((event) => {
    let numberOfCharacters = event.target.textContent.length

    const wrapper = document.createElement('div')
    wrapper.innerHTML = event.target.innerHTML
    let numberOfLines = wrapper.childElementCount + 1

    if (numberOfLines) numberOfLines -= 1

    numberOfCharacters += numberOfLines

    if (numberOfCharacters > maxNumberOfCharacters) {
      setSubmitBtnIsEnabled(false)
      setExceedsTheLimit(true)
    } else if (numberOfCharacters === 0) {
      setSubmitBtnIsEnabled(false)
      setExceedsTheLimit(false)
    } else {
      setSubmitBtnIsEnabled(true)
      setExceedsTheLimit(false)
    }

    const numberOfCharactersLeft = maxNumberOfCharacters - numberOfCharacters

    setNumberOfCharactersLeft(numberOfCharactersLeft)
  }, [])

  useEffect(() => {
    window.addEventListener('input', handleInput)
    return () => {
      window.removeEventListener('input', handleInput)
    }
  }, [handleInput])
  return (
    <S.PostMaker>
      <Card>
        <S.Wrapper>
          <S.TextInput
            role="textbox"
            placeholder="What's happening?"
            contentEditable="true"
            suppressContentEditableWarning={true}
          ></S.TextInput>
          <S.BottomWrapper>
            <S.CharactersLeft exceedsTheLimit={exceedsTheLimit}>
              {numberOfCharactersLeft + '/777'}
            </S.CharactersLeft>
            <Button
              aria-label="submit post button"
              disabled={!submitBtnIsEnabled}
            >
              Post
            </Button>
          </S.BottomWrapper>
        </S.Wrapper>
      </Card>
    </S.PostMaker>
  )
}

export default PostMaker

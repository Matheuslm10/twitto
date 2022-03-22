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

  const handleInput = useCallback((event) => {
    let numberOfCharacters = event.target.textContent.length

    const wrapper = document.createElement('div')
    wrapper.innerHTML = event.target.innerHTML
    let numberOfLines = wrapper.childElementCount + 1

    if (numberOfLines) numberOfLines -= 1

    numberOfCharacters += numberOfLines

    if (
      numberOfCharacters > maxNumberOfCharacters ||
      numberOfCharacters === 0
    ) {
      setSubmitBtnIsEnabled(false)
    } else {
      setSubmitBtnIsEnabled(true)
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
          {numberOfCharactersLeft}
          <Button
            aria-label="submit post button"
            disabled={!submitBtnIsEnabled}
          >
            Post
          </Button>
        </S.Wrapper>
      </Card>
    </S.PostMaker>
  )
}

export default PostMaker

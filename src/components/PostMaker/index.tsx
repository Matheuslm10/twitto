import React, { useEffect, useCallback, useState } from 'react'
import * as S from './styles'

import Card from 'components/Card'
import Button from 'components/Button'
import { usePosts } from 'hooks/use-posts'

const PostMaker = () => {
  const [submitBtnIsEnabled, setSubmitBtnIsEnabled] = useState(false)
  const [content, setContent] = useState('')
  const [exceedsTheLimit, setExceedsTheLimit] = useState(false)
  const maxNumberOfCharacters = 777
  const [numberOfCharactersLeft, setNumberOfCharactersLeft] = useState(
    maxNumberOfCharacters
  )

  const { addPost } = usePosts()

  const checkCharacters = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event?.target as HTMLElement
    let numberOfCharacters = eventTarget.textContent?.length || 0

    const wrapper = document.createElement('div')
    wrapper.innerHTML = eventTarget.innerHTML
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
  }

  const handleInput = useCallback((event) => {
    checkCharacters(event)
    setContent(event.target.innerText)
  }, [])

  useEffect(() => {
    window.addEventListener('input', handleInput)
    return () => {
      window.removeEventListener('input', handleInput)
    }
  }, [handleInput])

  const buildPost = () => {
    const post = {
      id: new Date().getMilliseconds() + Math.random(),
      author: {
        name: 'Default User',
        username: 'defaultUser22',
      },
      postContent: content,
    }
    return post
  }

  const clearTextInput = () => {
    const textInput = document.getElementById('text-input')
    if (textInput) textInput.innerText = ''
  }

  const handlePostSubmission = () => {
    const post = buildPost()
    addPost(post)
    clearTextInput()
  }

  return (
    <S.PostMaker>
      <Card>
        <S.Wrapper>
          <S.TextInput
            id="text-input"
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
              onClick={handlePostSubmission}
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

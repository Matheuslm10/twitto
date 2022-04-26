import React, { useEffect, useCallback, useState } from 'react'

import * as S from './styles'
import Card from 'components/Card'
import Button from 'components/Button'
import { usePosts } from 'hooks/use-posts'

const PostMaker = () => {
  const [submitBtnIsEnabled, setSubmitBtnIsEnabled] = useState(false)
  const [content, setContent] = useState('')
  const [exceedsTheLimit, setExceedsTheLimit] = useState(false)
  const maxNumberOfCharacters = 280
  const [numberOfCharactersLeft, setNumberOfCharactersLeft] = useState(
    maxNumberOfCharacters
  )
  const textInputElementId = 'text-input'

  const { addPost } = usePosts()

  const countNumberOfValidCharacters = (
    textContent: string,
    numberOfCharacters: number,
    numberOfLines: number
  ) => {
    let total = 0

    if (numberOfLines) numberOfLines -= 1

    // Do nothing if the textContent has only whitespaces.
    if (textContent.trim().length !== 0) {
      total = numberOfCharacters + numberOfLines
    }

    return total
  }

  const setButtonEnableness = (totalNumberOfValidCharacters: number) => {
    if (totalNumberOfValidCharacters > maxNumberOfCharacters) {
      setSubmitBtnIsEnabled(false)
      setExceedsTheLimit(true)
    } else if (totalNumberOfValidCharacters === 0) {
      setSubmitBtnIsEnabled(false)
      setExceedsTheLimit(false)
    } else {
      setSubmitBtnIsEnabled(true)
      setExceedsTheLimit(false)
    }
  }

  const pasteContentWithoutFormatting = (
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    const data = event.clipboardData.getData('text/plain')

    const el = document.createElement('div')
    el.innerText = data

    const userSelection = window.getSelection()
    const properTextInput = document.getElementById(textInputElementId) as Node

    if (userSelection?.containsNode(properTextInput, true)) {
      const selectedTextRange = userSelection?.getRangeAt(0)

      selectedTextRange.collapse(true)

      const frag = document.createDocumentFragment()

      while (el.childNodes[0]) {
        frag.appendChild(el.childNodes[0])
      }

      selectedTextRange.insertNode(frag)
    }
  }

  const handleInput = useCallback((event) => {
    event.preventDefault()

    if (event.inputType !== 'insertFromPaste') {
      const eventTarget = event?.target
      const textContent = eventTarget.innerText || ''
      const cleanedTextContent = textContent
        ?.trim()
        .replace(/(\r\n|\n|\r)/gm, '')

      const wrapper = document.createElement('div')
      wrapper.innerHTML = eventTarget.innerHTML

      const numberOfCharacters = cleanedTextContent.length || 0
      const numberOfLines = wrapper.childElementCount + 1

      const total = countNumberOfValidCharacters(
        cleanedTextContent,
        numberOfCharacters,
        numberOfLines
      )

      setButtonEnableness(total)

      const numberOfCharactersLeft = maxNumberOfCharacters - total
      setNumberOfCharactersLeft(numberOfCharactersLeft)

      setContent(event.target.innerText)
    }
  }, [])

  const handleInputInsertFromPaste = useCallback((event) => {
    event.preventDefault()
    pasteContentWithoutFormatting(event)

    const eventTarget = event?.target as HTMLElement
    const targetTextContent = eventTarget.innerText
    const cleanedTextContent = targetTextContent
      ?.trim()
      .replace(/(\r\n|\n|\r)/gm, '')

    const el = document.createElement('div')
    el.innerHTML = eventTarget.innerHTML

    const numberOfCharacters = cleanedTextContent?.length || 0
    const numberOfLines = el.childElementCount + 1

    const total = countNumberOfValidCharacters(
      cleanedTextContent || '',
      numberOfCharacters,
      numberOfLines
    )
    setButtonEnableness(total)

    const numberOfCharactersLeft = maxNumberOfCharacters - total
    setNumberOfCharactersLeft(numberOfCharactersLeft)

    setContent(el.innerText)
  }, [])

  useEffect(() => {
    window.addEventListener('paste', handleInputInsertFromPaste)
    window.addEventListener('input', handleInput)
    return () => {
      window.removeEventListener('paste', handleInputInsertFromPaste)
      window.removeEventListener('input', handleInput)
    }
  }, [handleInput, handleInputInsertFromPaste])

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
            id={textInputElementId}
            role="textbox"
            placeholder="What's happening?"
            contentEditable="true"
            suppressContentEditableWarning={true}
          ></S.TextInput>
          <S.BottomWrapper>
            <S.CharactersLeft exceedsTheLimit={exceedsTheLimit}>
              {numberOfCharactersLeft + '/' + maxNumberOfCharacters}
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

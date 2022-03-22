import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import PostMaker from '.'

describe('PostMaker', () => {
  it('Should prevent user to make an empty post as soon as the page loads.', () => {
    render(<PostMaker />)

    const submitPostButton = screen.getByRole('button', {
      name: 'submit post button',
    })

    expect(submitPostButton).toBeDisabled()
  })

  it('Should prevent user to make an empty post after delete all the content.', () => {
    render(<PostMaker />)

    const textInput = screen.getByRole('textbox')
    const submitPostButton = screen.getByRole('button', {
      name: 'submit post button',
    })

    const word = 'Dracarys!'
    userEvent.type(textInput, word)

    word.split('').forEach(() => {
      userEvent.type(textInput, '{backspace}')
    })

    expect(submitPostButton).toBeDisabled()
  })
})

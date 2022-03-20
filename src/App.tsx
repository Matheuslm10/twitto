import React from 'react'
import GlobalStyle from 'styles/global'

import HomePage from 'pages/HomePage'

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  )
}

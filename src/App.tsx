import React from 'react'
import GlobalStyle from 'styles/global'

import HomePage from 'pages/HomePage'
import ProfileModal from 'components/ProfileModal'

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <HomePage />
      <ProfileModal />
    </>
  )
}

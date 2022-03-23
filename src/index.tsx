import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { PostsProvider } from 'hooks/use-posts'
import { ProfileModalProvider } from 'hooks/use-profile-modal'

ReactDOM.render(
  <React.StrictMode>
    <PostsProvider>
      <ProfileModalProvider>
        <App />
      </ProfileModalProvider>
    </PostsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

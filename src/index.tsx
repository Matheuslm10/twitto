import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { PostsProvider } from 'hooks/use-posts'

ReactDOM.render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

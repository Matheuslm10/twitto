import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { fetchAllPosts } from 'api/posts'

// TODO: put this type definition in a shared space.
type PostType = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

export type PostsContextTypes = {
  allPosts: PostType[]
}

export const PostsContextDefaultValues = {
  allPosts: [],
}

export const PostsContext = createContext<PostsContextTypes>(
  PostsContextDefaultValues
)

export type PostsProviderProps = {
  children: React.ReactNode
}

const PostsProvider = ({ children }: PostsProviderProps) => {
  const [allPosts, setAllPosts] = useState<PostType[]>([])

  const getAllPosts = useCallback(async () => {
    try {
      const data = await fetchAllPosts()
      setAllPosts(data)
    } catch (error) {
      alert('An error occurred when loading posts.')
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <PostsContext.Provider
      value={{
        allPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

const usePosts = () => useContext(PostsContext)

export { PostsProvider, usePosts }

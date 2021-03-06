import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'

import { Post } from 'types'
import { fetchAllPosts, createPost } from 'api/posts'

export type PostsContextTypes = {
  allPosts: Post[]
  addPost: (post: Post) => void
}

export const PostsContextDefaultValues = {
  allPosts: [],
  addPost: () => null,
}

export const PostsContext = createContext<PostsContextTypes>(
  PostsContextDefaultValues
)

export type PostsProviderProps = {
  children: React.ReactNode
}

const PostsProvider = ({ children }: PostsProviderProps) => {
  const [allPosts, setAllPosts] = useState<Post[]>([])

  const getAllPosts = useCallback(async () => {
    try {
      const data = await fetchAllPosts()
      setAllPosts(data)
    } catch (error) {
      alert('An error occurred when loading posts.')
      console.error(error)
    }
  }, [])

  const addPost = useCallback(
    async (post: Post) => {
      try {
        const data = await createPost(post)
        const newPostList = [data].concat(allPosts)
        setAllPosts(newPostList)
      } catch (error) {
        alert('An error occurred when creating the post.')
        console.error(error)
      }
    },
    [allPosts]
  )

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <PostsContext.Provider
      value={{
        allPosts,
        addPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

const usePosts = () => useContext(PostsContext)

export { PostsProvider, usePosts }

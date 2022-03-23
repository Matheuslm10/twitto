import { getPostsFromLS, addPostInLS } from 'hooks/use-local-storage'

// TODO: put this type definition in a shared space.
type PostType = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

export const fetchAllPosts = async (): Promise<PostType[]> => {
  try {
    const response = JSON.parse(await getPostsFromLS()) // represents a call to a fake API url, GET method.
    const posts = response.data

    return posts
  } catch (error) {
    throw new Error('An error occurred when retrieving posts data from API.')
  }
}

export const createPost = async (post: PostType): Promise<PostType> => {
  try {
    const response = JSON.parse(await addPostInLS(post)) // represents a call to a fake API url, POST method.
    const postCreated = response.data

    return postCreated
  } catch (error) {
    throw new Error('An error occurred while sending post data to API.')
  }
}

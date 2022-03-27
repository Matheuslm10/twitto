import { Post } from 'types'
import { getPostsFromLS, addPostInLS } from 'hooks/use-local-storage'

export const fetchAllPosts = async (): Promise<Post[]> => {
  try {
    const response = JSON.parse(await getPostsFromLS()) // represents a call to a fake API url, GET method.
    const posts = response.data

    return posts
  } catch (error) {
    throw new Error('An error occurred when retrieving posts data from API.')
  }
}

export const createPost = async (post: Post): Promise<Post> => {
  try {
    const response = JSON.parse(await addPostInLS(post)) // represents a call to a fake API url, POST method.
    const postCreated = response.data

    return postCreated
  } catch (error) {
    throw new Error('An error occurred while sending post data to API.')
  }
}

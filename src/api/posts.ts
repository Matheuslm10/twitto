import { getPostsFromLS } from 'hooks/use-local-storage'

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
    throw new Error('An error occurred when retrieving data from API.')
  }
}

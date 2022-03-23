import initialPosts from 'mock/posts.json'

const postsKey = '@posterr-data-posts'

// TODO: put this type definition in a shared space.
type PostType = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

const getPostsFromLS = async (): Promise<string> => {
  const value = localStorage.getItem(postsKey)

  if (value !== null) {
    return new Promise((resolve) => {
      resolve(value)
    })
  } else {
    setPostsInLS(initialPosts.data)
    return getPostsFromLS()
  }
}

function setPostsInLS(posts: PostType[]) {
  const newData = {
    data: posts,
  }
  return localStorage.setItem(postsKey, JSON.stringify(newData))
}

const addPostInLS = async (post: PostType): Promise<string> => {
  const value = localStorage.getItem(postsKey)
  let posts

  if (value) {
    posts = JSON.parse(value).data
  }

  if (posts) {
    posts.splice(0, 0, post)
    setPostsInLS(posts)
    const postCreated = {
      data: post,
    }
    return JSON.stringify(postCreated)
  } else {
    throw new Error(
      'An error occurred while checking current posts before adding a new.'
    )
  }
}

export { getPostsFromLS, addPostInLS }

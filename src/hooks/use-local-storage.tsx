import initialPosts from 'mock/posts.json'
import initialUsers from 'mock/users.json'

const postsKey = '@posterr-data-posts'
const usersKey = '@posterr-data-users'

// TODO: put this type definition in a shared space.
type PostType = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

// TODO: put this type definition in a shared space.
type UserType = {
  name: string
  username: string
  joiningData: string
  followers: string[]
  following: string[]
}

const setPostsInLS = (posts: PostType[]) => {
  const newData = {
    data: posts,
  }
  return localStorage.setItem(postsKey, JSON.stringify(newData))
}

export const getPostsFromLS = async (): Promise<string> => {
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

export const addPostInLS = async (post: PostType): Promise<string> => {
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

const setUsersInLS = (users: UserType[]) => {
  const newData = {
    data: users,
  }
  return localStorage.setItem(usersKey, JSON.stringify(newData))
}

const getUsersFromLS = (): string => {
  const value = localStorage.getItem(usersKey)

  if (value !== null) {
    return value
  } else {
    setUsersInLS(initialUsers.data)
    return getUsersFromLS()
  }
}

export const getUserByUsernameFromLS = async (
  username: string
): Promise<string> => {
  const usersData = getUsersFromLS()

  const user = JSON.parse(usersData).data.filter(
    (user: UserType) => user.username === username
  )[0]

  if (user) {
    const newData = {
      data: user,
    }

    return new Promise((resolve) => {
      resolve(JSON.stringify(newData))
    })
  } else {
    throw new Error('An error occurred while searching for the user.')
  }
}

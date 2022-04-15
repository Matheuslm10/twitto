import { Post, User } from 'types'
import initialPosts from 'mock/posts.json'
import initialUsers from 'mock/users.json'

const postsKey = '@twitto-data-posts'
const usersKey = '@twitto-data-users'

const setPostsInLS = (posts: Post[]) => {
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

export const addPostInLS = async (post: Post): Promise<string> => {
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

const setUsersInLS = (users: User[]) => {
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
    (user: User) => user.username === username
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

const unfollowAndUpdate = (
  users: User[],
  actionOwnerUser: User,
  targetUser: User
): User | null => {
  let updatedUsers

  const actionOwnerUserIndex = targetUser.followers.indexOf(
    actionOwnerUser.username
  )
  const targetUserIndex = actionOwnerUser.following.indexOf(targetUser.username)

  if (actionOwnerUserIndex > -1 && targetUserIndex > -1) {
    targetUser.followers.splice(actionOwnerUserIndex, 1)
    actionOwnerUser.following.splice(targetUserIndex, 1)

    updatedUsers = users.map((user: User) => {
      if (user.username === targetUser.username) {
        return targetUser
      } else if (user.username === actionOwnerUser.username) {
        return actionOwnerUser
      } else {
        return user
      }
    })

    setUsersInLS(updatedUsers)

    return targetUser
  } else {
    return null
  }
}

const followAndUpdate = (
  users: User[],
  actionOwnerUser: User,
  targetUser: User
): User => {
  targetUser.followers.push(actionOwnerUser.username)
  actionOwnerUser.following.push(targetUser.username)

  const updatedUsers = users.map((user: User) => {
    if (user.username === targetUser.username) {
      return targetUser
    } else if (user.username === actionOwnerUser.username) {
      return actionOwnerUser
    } else {
      return user
    }
  })

  setUsersInLS(updatedUsers)

  return targetUser
}

export const changeFollowingStatusInLS = async (
  username: string
): Promise<string> => {
  const actionOwnerUsername = 'defaultUser22'

  const usersData = getUsersFromLS()
  const users = JSON.parse(usersData).data

  const actionOwnerUser = users.filter(
    (user: User) => user.username === actionOwnerUsername
  )[0]

  const targetUser = users.filter((user: User) => user.username === username)[0]

  if (actionOwnerUser && targetUser) {
    let targetUserUpdated

    if (targetUser.followers.includes(actionOwnerUsername)) {
      targetUserUpdated = unfollowAndUpdate(users, actionOwnerUser, targetUser)
    } else {
      targetUserUpdated = followAndUpdate(users, actionOwnerUser, targetUser)
    }

    const newData = {
      data: targetUserUpdated,
    }

    return new Promise((resolve) => {
      resolve(JSON.stringify(newData))
    })
  } else {
    throw new Error(
      'An error occurred while changing following/unfollowing status.'
    )
  }
}

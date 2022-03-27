import { User } from 'types'
import {
  getUserByUsernameFromLS,
  changeFollowingStatusInLS,
} from 'hooks/use-local-storage'

export const fetchUserByUsername = async (username: string): Promise<User> => {
  try {
    const response = JSON.parse(await getUserByUsernameFromLS(username)) // represents a call to a fake API url, GET method.
    const user = response.data

    return user
  } catch (error) {
    throw new Error('An error occurred when retrieving posts data from API.')
  }
}

export const changeFollowingStatus = async (
  username: string
): Promise<User> => {
  try {
    const response = JSON.parse(await changeFollowingStatusInLS(username)) // represents a call to a fake API url, POST method.
    const user = response.data

    return user
  } catch (error) {
    throw new Error(
      'An error occurred while changing following/unfollowing status in API.'
    )
  }
}

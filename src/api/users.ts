import { getUserByUsernameFromLS } from 'hooks/use-local-storage'

// TODO: put this type definition in a shared space.
type UserType = {
  name: string
  username: string
  joiningData: string
}

export const fetchUserByUsername = async (
  username: string
): Promise<UserType> => {
  try {
    const response = JSON.parse(await getUserByUsernameFromLS(username)) // represents a call to a fake API url, GET method.
    const user = response.data

    return user
  } catch (error) {
    throw new Error('An error occurred when retrieving posts data from API.')
  }
}

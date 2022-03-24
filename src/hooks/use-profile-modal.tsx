import { fetchUserByUsername } from 'api/users'
import { useContext, createContext, useState, useCallback } from 'react'

import { changeFollowingStatus } from 'api/users'

// TODO: put this type definition in a shared space.
type UserType = {
  name: string
  username: string
  joiningData: string
  followers: string[]
  following: string[]
}

export type ProfileModalContextTypes = {
  isShown: boolean
  user: UserType
  openModalWithUserData: (username: string) => void
  toggleFollowing: (username: string) => void
  closeModal: () => void
}

export const ProfileModalContextDefaultValues = {
  isShown: false,
  user: {
    name: '',
    username: '',
    joiningData: '',
    followers: [],
    following: [],
  },
  openModalWithUserData: () => null,
  toggleFollowing: () => null,
  closeModal: () => null,
}

export const ProfileModalContext = createContext<ProfileModalContextTypes>(
  ProfileModalContextDefaultValues
)

export type ProfileModalProviderProps = {
  children: React.ReactNode
}

const ProfileModalProvider = ({ children }: ProfileModalProviderProps) => {
  const [isShown, setIsShown] = useState<boolean>(false)
  const [user, setUser] = useState<UserType>({
    name: '',
    username: '',
    joiningData: '',
    followers: [],
    following: [],
  })

  const openModalWithUserData = useCallback(
    async (username: string) => {
      try {
        setIsShown(!isShown)
        const user = await fetchUserByUsername(username)
        setUser(user)
      } catch (error) {
        alert('An error occurred while loading data from user.')
        console.error(error)
      }
    },
    [isShown]
  )

  const toggleFollowing = useCallback(async (username: string) => {
    const user = await changeFollowingStatus(username)
    setUser(user)
  }, [])

  const closeModal = () => {
    setIsShown(false)
  }

  return (
    <ProfileModalContext.Provider
      value={{
        isShown,
        user,
        openModalWithUserData,
        toggleFollowing,
        closeModal,
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  )
}

const useProfileModal = () => useContext(ProfileModalContext)

export { ProfileModalProvider, useProfileModal }

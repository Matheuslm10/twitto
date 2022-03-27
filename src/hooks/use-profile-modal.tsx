import { useContext, createContext, useState, useCallback } from 'react'

import { User } from 'types'
import { changeFollowingStatus, fetchUserByUsername } from 'api/users'

export type ProfileModalContextTypes = {
  isShown: boolean
  user: User
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
  const [user, setUser] = useState<User>({
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

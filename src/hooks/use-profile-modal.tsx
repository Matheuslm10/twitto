import { useContext, createContext, useState } from 'react'

export type ProfileModalContextTypes = {
  isShown: boolean
  toggle: () => void
}

export const ProfileModalContextDefaultValues = {
  isShown: false,
  toggle: () => null,
}

export const ProfileModalContext = createContext<ProfileModalContextTypes>(
  ProfileModalContextDefaultValues
)

export type ProfileModalProviderProps = {
  children: React.ReactNode
}

const ProfileModalProvider = ({ children }: ProfileModalProviderProps) => {
  const [isShown, setIsShown] = useState<boolean>(false)

  const toggle = () => setIsShown(!isShown)

  return (
    <ProfileModalContext.Provider
      value={{
        isShown,
        toggle,
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  )
}

const useProfileModal = () => useContext(ProfileModalContext)

export { ProfileModalProvider, useProfileModal }

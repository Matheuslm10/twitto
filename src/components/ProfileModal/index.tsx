import { usePosts } from 'hooks/use-posts'
import { useProfileModal } from 'hooks/use-profile-modal'
import { useEffect, useState } from 'react'

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

// TODO: put this type definition in a shared space.
type PostType = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

Modal.setAppElement('#root')

const ProfileModal = () => {
  const [numberOfPosts, setNumberOfPosts] = useState(0)
  const { user, isShown, closeModal } = useProfileModal()
  const { allPosts } = usePosts()

  useEffect(() => {
    const postsFromUser = allPosts.filter(
      (post: PostType) => post.author.username === user.username
    )
    setNumberOfPosts(postsFromUser.length)
  }, [allPosts, user.username])

  return (
    <Modal
      isOpen={isShown}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {user.name + ' | '}
      {user.username + ' | '}
      {'Joined ' + user.joiningData + ' | '}
      {user.following.length + ' Following | '}
      {user.followers.length + ' Followers '}
      {numberOfPosts + 'Posts'}
    </Modal>
  )
}

export default ProfileModal

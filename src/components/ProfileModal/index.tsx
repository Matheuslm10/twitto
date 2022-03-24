import { usePosts } from 'hooks/use-posts'
import { useProfileModal } from 'hooks/use-profile-modal'
import { useEffect, useState } from 'react'
import * as S from './styles'

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    borderRadius: '10px',
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
      <S.ContentWrapper>
        <S.UserIdentification>
          <h1>{user.name}</h1>
          <p>{'@' + user.username}</p>
        </S.UserIdentification>
        <S.JoiningDate>
          <p>{'Joined ' + user.joiningData}</p>
        </S.JoiningDate>
        <S.FollowWrapper>
          <p>
            <S.Bold>{user.following.length}</S.Bold>
            {' Following'}
          </p>
          <p>
            <S.Bold>{user.followers.length}</S.Bold>
            {' Followers'}
          </p>
          <p>
            <S.Bold>{numberOfPosts}</S.Bold>
            {' Posts'}
          </p>
        </S.FollowWrapper>
      </S.ContentWrapper>
    </Modal>
  )
}

export default ProfileModal

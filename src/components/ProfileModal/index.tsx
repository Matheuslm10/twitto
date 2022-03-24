import { useProfileModal } from 'hooks/use-profile-modal'

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

Modal.setAppElement('#root')

const ProfileModal = () => {
  const { user, isShown, closeModal } = useProfileModal()

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
      <button onClick={closeModal}>close</button>
    </Modal>
  )
}

export default ProfileModal

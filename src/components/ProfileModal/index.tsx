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
  const { isShown, toggle } = useProfileModal()

  function afterOpenModal() {
    console.log('afterOpenModal')
  }

  return (
    <Modal
      isOpen={isShown}
      onAfterOpen={afterOpenModal}
      onRequestClose={toggle}
      style={customStyles}
      contentLabel="Example Modal"
    >
      Hey!
      <button onClick={toggle}>close</button>
    </Modal>
  )
}

export default ProfileModal

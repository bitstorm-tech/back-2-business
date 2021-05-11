import Modal from '../../ui/Modal';

export default function NewGuardianModal({visible, onClose}) {
  return (
    <Modal title="Create new Time Guardian" visible={visible} onClose={onClose}>
      <h1>Guardian Content here!</h1>
    </Modal>
  )
}

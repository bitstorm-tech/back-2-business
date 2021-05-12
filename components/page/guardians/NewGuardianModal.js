import Modal from '../../ui/Modal';
import Input from '../../ui/Input';

export default function NewGuardianModal({visible, onClose, onSave}) {
  const guardian = {
    name: ''
  };

  return (
    <Modal title="Create new Time Guardian" visible={visible} onClose={onClose} onSave={() => onSave(guardian)}>
      <Input type="text" label="Name" onChange={name => guardian.name = name}/>
    </Modal>
  )
}

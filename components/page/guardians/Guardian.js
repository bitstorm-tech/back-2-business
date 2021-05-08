import PrimaryButton from '../../ui/buttons/PrimaryButton';
import { useState } from 'react';
import DeleteButton from '../../ui/buttons/DeleteButton';

export default function Guardian({name, onDelete, key, editable = false}) {
  const [isEditable] = useState(editable);
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <p className="text-xl font-semibold mb-2">{name}</p>
      <div className="mb-2">Content</div>
      <div className="pt-4 w-full flex flex-row-reverse">
        <DeleteButton onDelete={() => onDelete(key)} />
        <PrimaryButton>Save</PrimaryButton>
      </div>
    </div>
  )
}

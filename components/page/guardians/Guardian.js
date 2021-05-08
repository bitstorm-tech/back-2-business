import ButtonPrimary from '../../ui/ButtonPrimary';
import { useState } from 'react';
import ButtonDelete from '../../ui/ButtonDelete';

export default function Guardian({name, onDelete, key, editable = false}) {
  const [isEditable] = useState(editable);
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <p className="text-xl font-semibold mb-2">{name}</p>
      <div className="mb-2">Content</div>
      <div className="pt-4 w-full flex flex-row-reverse">
        <ButtonDelete onDelete={() => onDelete(key)} />
        <ButtonPrimary>Save</ButtonPrimary>
      </div>
    </div>
  )
}

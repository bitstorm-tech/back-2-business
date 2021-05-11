import PrimaryButton from '../../ui/buttons/PrimaryButton';
import { useState } from 'react';
import DeleteButton from '../../ui/buttons/DeleteButton';

export default function Guardian({name, onDelete, onSave, editable = false}) {
  const [isEditable] = useState(editable);
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <div>
        <p className="text-xl font-semibold mb-2">{name}</p>
      </div>
      <div className="mb-2">Content</div>
      <div className="pt-4 flex flex-row space-x-2">
        <PrimaryButton onSave={onSave}>Save</PrimaryButton>
        <DeleteButton onDelete={onDelete}/>
      </div>
    </div>
  );
}

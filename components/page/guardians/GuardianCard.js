import PrimaryButton from '../../ui/buttons/PrimaryButton';
import { useState } from 'react';
import DeleteButton from '../../ui/buttons/DeleteButton';

export default function GuardianCard({name, onDelete, editable = false}) {
  const [isEditable] = useState(editable);
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <div>
        <p className="text-xl font-semibold mb-2">{name}</p>
      </div>
      <div className="mb-2">Content</div>
      <div className="pt-4 flex flex-row-reverse space-x-reverse space-x-2">
        <DeleteButton onDelete={onDelete}/>
        <PrimaryButton>Edit</PrimaryButton>
      </div>
    </div>
  );
}

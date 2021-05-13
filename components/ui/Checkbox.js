import { useState } from 'react';

export default function Checkbox({text, onChange, checked = false}) {
  const [isChecked, setChecked] = useState(checked)

  function toggle() {
    setChecked(!isChecked);
  }

  function renderCheck() {
    return (
      <svg className="fill-current w-3 h-3 text-indigo-400 cursor-pointer" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
      </svg>
    );
  }

  return (
    <label className="flex justify-start items-center" onClick={toggle}>
      <div onClick={toggle}
        className="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer">
        <input type="checkbox" className="opacity-0 absolute cursor-pointer"/>
        {isChecked && renderCheck()}
      </div>
      <div className="select-none cursor-pointer" onClick={toggle}>{text}</div>
    </label>
  );
}

export default function Input({label, placeholder = '', type = 'text'}) {
  return (
    <div className="mb-3 pt-0 w-full">
      <label className="pl-1">{label}</label>
      <input type={type} placeholder={placeholder} className="p-2 placeholder-blueGray-300 text-blueGray-600 bg-white bg-white rounded text-sm border-2 outline-none focus:outline-none focus:bg-gray-100 w-full"/>
    </div>
  );
}

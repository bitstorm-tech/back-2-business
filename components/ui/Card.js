import ButtonPrimary from './ButtonPrimary';

export default function Card({children, header}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      {header ? <p className="text-xl font-semibold mb-2">{header}</p> : null}
      <div className="mb-2">{children}</div>
      <div className="pt-4 w-full flex flex-row-reverse">
        <ButtonPrimary>Save</ButtonPrimary>
      </div>
    </div>
  );
}

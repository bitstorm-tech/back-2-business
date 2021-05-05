export default function ButtonPrimary({children}) {
  return (
    <div className="rounded bg-green-300 w-max py-1 px-3 hover:bg-green-400 cursor-pointer text-white">
      {children}
    </div>
  )
}

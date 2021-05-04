export default function ButtonPrimary({props}) {
  return (
    <div className="rounded bg-green-300 w-max py-1 px-3 hover:bg-green-400 cursor-pointer">
      {props.text}
    </div>
  )
}

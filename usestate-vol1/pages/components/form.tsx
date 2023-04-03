import cssForm from "../../styles/form.module.css"
type Props = {
  title: string,
  value: Array<string>
}

const Form = (props:Props) => {
  return (
    <>
      <h1 className="text-2xl mt-3 text-white">{props.title}</h1>
      <div className="text-xl p-1 mt-3 bg-white">{props.value}</div>
    </>
  )
}

export default Form
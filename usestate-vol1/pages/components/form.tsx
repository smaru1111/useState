import cssForm from "../../styles/form.module.css"
type Props = {
  title: string,
  value: Array<string>
}

const Form = (props:Props) => {
  return (
    <>
      <h1 className="text-2xl">{props.title}</h1>
      <div className="m-4 bg-white">{props.value}</div>
    </>
  )
}

export default Form
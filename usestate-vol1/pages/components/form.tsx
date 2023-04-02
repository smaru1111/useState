import cssForm from "../../styles/form.module.css"
type Props = {
  title: string,
  value: Array<string>
}

const Form = (props:Props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <div>{props.value}</div>
    </>
  )
}

export default Form
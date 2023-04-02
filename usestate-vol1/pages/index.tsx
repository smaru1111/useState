import { useState } from "react";
import Form from "./components/form";

const App = () => {
  const[input, setinput] = useState("");
  const[ans, setans] = useState();
  const smplInput:Array<string> = ["1", "+", "2"]
  const smplAns:Array<string> = ["3"]

  return (
    <>
      <div className="container font-mono mx-auto my-0">
        <Form title={"計算式"} value={smplInput}/>
        <Form title={"結果"} value={smplAns}/>
      </div>
    </>
  );
};

export default App;
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
        <h1 className="text-5xl text-center mt-5 text-white">NEXT練習用計算機</h1>
        <div className="container w-3/4 my-0 mx-auto">
          <Form title={"計算式"} value={smplInput}/>
          <Form title={"結果"} value={smplAns}/>
        </div>
      </div>
    </>
  );
};

export default App;
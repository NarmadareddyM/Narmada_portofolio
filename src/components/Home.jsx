import {useState} from "react";
function Home() {
  //let count=0;
  /*const [count,setCount]=useState(0)

  const incCount=()=>{
    setCount((prev) => prev+1)
  }
  return (
   <>
    <h1>useState-Hook</h1>
    <h3>{count}</h3>
    <button onClick={incCount}>Increment</button>
  </>*/
  const [isShow,setIsShow]=useState(true)
  return (
    <>
      <h1>useState-Hook</h1>

      <button onClick={()=>setIsShow(!isShow)}>{isShow ?"Hide" : "show"}</button>
      <h1>
        {isShow && "Hola"}
        </h1>
    </>
  )
}

export default Home;

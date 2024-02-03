import Main from "./assets/mains/Mains"
import Heads from './assets/articles/head/Heads'
import Info from './assets/articles/info/Info'
import { useState } from 'react'



function App() {
  const [clickedPart, clickingPart] = useState(null);
  function cliker(inf){
      clickingPart((item)=>item==inf?null:inf);
  }
  return (
    <div className="wrapper">
      <Main method = {cliker} status = {clickedPart}/>
      <Info cName = "info" clickedPart = {clickedPart}/>
    </div>
  )
}

export default App

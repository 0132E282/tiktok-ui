import Content from './Content.js'
import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [show,setShow] = useState(false)
 
 return( 
   <div style={{padding:'20px'}}>
      <button onClick={()=> setShow(!show)}>click</button>
      {show && <Content/>}
   </div>
 )
}

export default App;

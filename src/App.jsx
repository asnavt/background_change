import { useState } from 'react'
import './App.css'

function App() {
 const [bg,setbackground]=useState('white')
  const violet=()=>{
    setbackground('violet')
  }
  const indigo=()=>{
    setbackground('indigo')
  }
  const blue=()=>{
    setbackground('blue')
  }
  const green=()=>{
    setbackground('green')
  }
  return (
    <>
    <div style={{ backgroundColor:bg,width:'100%', height:'100vh', display:'flex', alignItems:'center',justifyContent:'center'} }>
      <div style={{display:'flex', justifyContent:'space-around', width:'500px', height:'auto'}}>
<button onClick={violet} style={{width:'100px', height:'40px' ,color:'black',fontSize:'20px', border:'2px solid black',backgroundColor:'violet', borderRadius:'15px' }}>violet</button>
<button onClick={indigo}style={{width:'100px', height:'40px' ,color:'white',fontSize:'20px', border:'2px solid black',backgroundColor:'indigo', borderRadius:'15px' }}>indigo</button>
<button onClick={blue} style={{width:'100px', height:'40px' ,color:'white',fontSize:'20px', border:'2px solid black',backgroundColor:'blue', borderRadius:'15px' }}>blue</button>
<button onClick={green} style={{width:'100px', height:'40px' ,color:'black',fontSize:'20px', border:'2px solid black',backgroundColor:'green', borderRadius:'15px' }}>green</button>
      </div>
    </div>
      
    </>
  )
}

export default App
import React, { useEffect, useState } from 'react';
import './index.css';

const App = () => {

const [num,setNum]=useState(0);
const [nums,setNums]=useState(0);

useEffect(() =>{
  alert("I am clicked");
},[num]);

  return (
    <>
    <div className='main-div'>
    <button onClick={(() => {setNum(num+1);}) } > Click Me {num}</button>
    <button onClick={(() => {setNums(nums+1);})}>Click Me {nums} </button>
    </div>
   
    </>

  )
}

export default App;
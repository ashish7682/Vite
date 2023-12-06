import React, { useState } from 'react';
import {questions} from './api';
import "../component/accordian.css";
import Myaccordian from "./Myaccordian";


const Accordian = () => {
 
  const [data,setData]= useState(questions);

  return (
    <>

  <div className='main'>
  <section className='main-div'>
      <h1>React Interview Questions</h1>
      {
    data.map((curElem) => {
      const {id,question,answer} =curElem;
        return <Myaccordian key={id} {...curElem}/>;
    })
   }
    
    </section>
  </div>
    
    </>
  )
}

export default Accordian;
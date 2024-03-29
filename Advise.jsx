
import './Advisecss.css';

import {useState} from 'react';
function Advise()
{
    const [initadvice,setadvise]=useState("Any Advise need?")
    const [count,setcount]=useState(0);

    async function getadvice()
    {
         const res= await fetch("https://api.adviceslip.com/advice");
          const data= await res.json();
          

          setadvise(data.slip.advice);
          setcount(c=>c+1);
          


          
          
    }


   return (
    <div>
    <h1>{initadvice}</h1>
    <button onClick={getadvice}>Get Advice</button>
    <p>you have read <b> {count} </b>pieces of advice</p>
    </div>

   )
}

export default Advise;


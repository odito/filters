
import { useState } from 'react';
import './App.css';



const info = [

  {
    id:1,
    kind:"Apple",
    phone:"iphone x"
  },
  {
    id:2,
    kind:"Apple",
    phone:"iphone 12 pro"
  },
  {
    id:3,
    kind:"Apple",
    phone:"iphone 6s"
  },
  {
    id:4,
    kind:"Samsung",
    phone:"Samsung s9"
  },
  {
    id:5,
    kind:"Samsung",
    phone:"Samsung 10"
  },
  {
    id:6,
    kind:"Lg",
    phone:"lg"
  },

  {
    id:7,
    kind:"Samsung",
    phone:"Samsung j5"
  },



]



function App() {

  const [state, setState] = useState(info);



const handleBtns=(e)=>{

let word=e.target.value;


if(word ==='All'){
  setState(info)
}
else if(word==='Apple'){
const filtered = info.filter(item=>item.kind==='Apple');

setState(filtered);
}
else if(word==='Samsung'){
  const filtered = info.filter(item=>item.kind==='Samsung');
  
  setState(filtered);
  }



}







  return (
    <div className="App">

     <div className="btns">
       <button value="All" onClick={handleBtns}>All</button>
       <button value="Apple" onClick={handleBtns}>Iphone</button>
       <button value="Samsung" onClick={handleBtns}>Samsung</button>
     </div>

     <div className="box">

    {state.map((item)=>(
      <div className="single-box" key={item.id} >
        <h4>Kind: <b>{item.kind}</b></h4>
    <h4>phone: <b>{item.phone}</b></h4>
    </div>
    ))}

       
       
     </div>


    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from "./components/Contact";

const data={name:"Simani", age:32}



function Header(props){
  return (
    <h1>{props.name}</h1>
  )
}




function Counter(){
const [count, setCount]=useState(0)

const increment=()=>{
 setCount(previousCount => previousCount +1)
  };

const decrement = () => {
  setCount(previousCount=>previousCount-1);
};


  return (
   <h1>
    <button onClick={increment}> +</button>
   {count}
     <button onClick={decrement}> - </button>
  
    </h1>
  )

}




function App() {
  return (
    <>
    <Navbar/>,
    <Contact/>,
    <Counter/>
    
    </>
    
  );
}

export default App;

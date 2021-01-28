import React,{ useState, useEffect, useRef } from 'react';

const useClick = (onClick) => {
 
  const element = useRef();

  
  useEffect(() => {
    if(element.current){
      console.log(element.current)
      element.current.addEventListener("click", onClick)
    }
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick)
      }
    }
  },[])
  return element
}

const App = () => {
  const hello = () => console.log("say hello")
  const title = useClick(hello)
  return (
    <div className="App">
     <h1 ref={title}>Hi</h1>
     <input placeholder="la"/>
    </div>
  );
};

export default App;
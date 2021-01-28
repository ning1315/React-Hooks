import React,{ useState, useEffect, useRef } from 'react';


const usePreventLeave = () => {
  const listeners = (event) => {
    event.preventDefault();
    event.returnValue = "";
  }
  const enablePrevent = () => window.addEventListener('beforeunload', listeners)
  const disablePrevent = () => window.removeEventListener('beforeunload', listeners)
  return { enablePrevent, disablePrevent }
}


const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave()
return (
<div className="App">
 <button onClick={enablePrevent}>protect</button>
 <button onClick={disablePrevent}>unprotect</button>
</div>
)
}
export default App;
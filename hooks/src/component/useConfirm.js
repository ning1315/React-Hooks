import React,{ useState, useEffect, useRef } from 'react';


const useConfirm = (message="", onConfrim, onCancel) => {
  if(onConfrim && typeof onConfrim !== 'function'){
    return;
  }
  if(onCancel && typeof onCancel !== 'function'){
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)) {
      onConfrim()
    } else {
      onCancel()
    }
  }
  return confirmAction
}


const App = () => {
  const deleteWorld = () => console.log("Deleting the world")
  const reject = () => console.log("save the world!")
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, reject)
return (
<div className="App">
 <button onClick={confirmDelete}>Delete the world</button>
</div>
)
}
export default App;
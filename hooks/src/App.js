import './App.css';
import React,{ useState } from 'react';
import BasicuseState from './component/BasicuseState'
import UseTitle from './component/useTitle'
import UseClick from './component/useClick'
import UseConfirm from './component/useConfirm'
import UsePreventLeave from './component/usePreventLeave'

const App = () => {
  return (
    <div className="App">
     <UsePreventLeave/>
    </div>
  );
}

export default App;

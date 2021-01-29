import './App.css';
import React,{ useState } from 'react';
import BasicuseState from './component/BasicuseState'
import UseTitle from './component/useTitle'
import UseClick from './component/useClick'
import UseConfirm from './component/useConfirm'
import UsePreventLeave from './component/usePreventLeave'
import UseBeforeLeave from './component/useBeforeLeave'
import UseFadeIn from './component/useFadeIn'

const App = () => {
  return (
    <div className="App">
     <UseFadeIn/>
    </div>
  );
}

export default App;

import React,{ useState } from 'react';

const BasicuseState = () => {
  const [count, setcount] = useState(0)

const increment = () => setcount(count + 1)

return (
<>
 <h1>현재 숫자는 {count}</h1> 
<button onClick={increment}></button>
</>
)
}
export default BasicuseState;
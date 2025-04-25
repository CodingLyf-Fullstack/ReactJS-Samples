import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCustomMemo from './use-custom-memo';

function App() {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(10)


  const counter = () => {
    console.log("Expensive Calculation with out useMemo");
    return count * count
  };

  const counter2 = useCustomMemo(() => {
    console.log("Custom Memo Hook");
    return count * count
  },[count]);
  return (
    <>
      
      <div className="card">
        <p> {counter()}</p>
        <p> {counter2}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card">
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </button>
      </div>
      
    </>
  )
}

export default App

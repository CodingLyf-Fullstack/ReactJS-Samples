import React, { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(1000000000);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const worker = new Worker(new URL('./worker.js', import.meta.url))
    setSum(prev => 0);
    worker.postMessage(number);

    worker.onmessage = (event) => {
      setSum(event.data);
    }

    return () => worker.terminate();
  }, [number]);

  return (
    <>
      <h3> Sum: {sum != 0 ? sum : 'Calculating...'} </h3>
      <button onClick={() => setNumber(number + 10000000)}> Click here </button>
    </>
  )
}

export default App;

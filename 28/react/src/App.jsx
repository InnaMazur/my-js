
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React + Vite</h1>
      <div>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>-</button>
        <span style={{ margin: '0 10px', fontSize: '20px' }}>{count}</span>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default App
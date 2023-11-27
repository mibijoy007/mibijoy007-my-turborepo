
import './App.css'
import Button from '@repo/ui/Button'
import {UserInputType} from 'common'

function App() {
  return (
    <div>
      Hi
      <Button></Button>
      <button onClick={() => {
        let userDetalis: UserInputType ={
          email: "",
          password: ""
        }
      }}>userDetalisInput</button>
    </div>
  )
}

export default App

/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      */
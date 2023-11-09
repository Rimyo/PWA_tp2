import { useState } from 'react'
import Home from './Home.tsx'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
    </>
  )
}

export default App*/

function Login() {
  const [isLogged, setLogging] = useState(false)
  if(!isLogged)
  return (
    <div className="grid bg-zinc-800 rounded-lg place-self-center">
      <img src='./images/bowser.webp' className="w-32 py-2 bg-contain h-auto place-self-center" />
      <p className="text-gray-100 px-4 " >Hey pas si vite ! Vous n'êtes pas connecté !</p>
      <button onClick={() => setLogging(true)} className="bg-gray-300 text-black mx-20 my-4 py-1">Se connecter</button>
    </div>
  )
  else{
    //Home
  }

}
export default Login


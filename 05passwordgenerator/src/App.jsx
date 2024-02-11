import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 const [length, setLength] = useState(8)
 const [numberAllowed, setNumberAllowed] = useState(false);
 const [charAllowed, setCharAllowed] = useState(false);
 const [password, setPassword] = useState("")

 const passwordRef = useRef(null)

 const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*()_+"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  
  setPassword(pass);
 }, [length, numberAllowed, charAllowed])

 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password)
}, [password])

useEffect(() => {
  passwordGenerator()

}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='app'>
      <div className='container'>
        <h1>Password Generator</h1>
        <div className='password-display'>
          <input
            type="text"
            value={password}
            className="password-input"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='copy-button'
          >
            copy
          </button>
        </div>
        <div className='settings'>
          <div className='setting'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='length-input'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="setting">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="setting">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev )
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
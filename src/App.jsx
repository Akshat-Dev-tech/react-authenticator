import { useState } from 'react'
import './App.css'

function App() {

  const [otp , setotp] = useState([])

  const handleChange=(e)=>{
    const val = e.target.value
    console.log('OTP', val)
    setotp(val)
  }

  return (
    <>
      <h2>OTP Authenticator</h2>
      <div className="alignotp-box">
        <input type='text' id="otp1" className='align-input' maxLength={1} onChange={handleChange}></input>
        <input type='text' id="otp1" className='align-input' maxLength={1} onChange={handleChange}></input>
        <input type='text' id="otp1" className='align-input' maxLength={1} onChange={handleChange}></input>
        <input type='text' id="otp1" className='align-input' maxLength={1} onChange={handleChange}></input>
      </div>
    </>
  )
}

export default App

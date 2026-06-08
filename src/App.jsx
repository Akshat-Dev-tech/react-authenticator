import { useState } from 'react'
import './App.css'

function App() {

  const [otp , setotp] = useState([])

  const handleChange=(e, index)=>{
    const val = e.target.value
    const nxt = [...otp]
    nxt[index]=val
    console.log('SET-OTP', val, index)
    setotp(nxt)
    console.log('OTP', otp)
  }

  return (
    <>
      <h2>OTP Authenticator</h2>
      <div className="alignotp-box">
        <input type='text' id="otp1" className='align-input' maxLength={1} onChange={(e)=>{handleChange(e,0)}}></input>
        <input type='text' id="otp1" className='align-input' maxLength={1} onChange={(e)=>{handleChange(e,1)}}></input>
        <input type='text' id="otp1" className='align-input' maxLength={1} onChange={(e)=>{handleChange(e,2)}}></input>
        <input type='text' id="otp1" className='align-input' maxLength={1} onChange={(e)=>{handleChange(e,3)}}></input>
      </div>
    </>
  )
}

export default App

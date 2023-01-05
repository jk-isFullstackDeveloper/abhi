import React from 'react'
import './ConnectForm.css'
import ConnForm from './ConnForm'
const ConnectForm = () => {
  return (
    <>
        <select className='enquire'>
            <option selected disabled>SELECT ENQUIRE TYPE</option>
            <option>BUSINESS</option>
            <option>PRESS</option>
            <option>CREATIVE</option>
            <option>MARKETING</option>
        </select>

        <div className='inDetails'>
            <ConnForm />
        </div>
    </>
  )
}

export default ConnectForm
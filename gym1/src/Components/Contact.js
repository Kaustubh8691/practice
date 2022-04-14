import React from 'react'

export default function Contact() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='Email' required/>
            <textarea placeholder="write here ........." name='message'></textarea>
            <input type='submit' value='send'/>
        </form>
        </div>
  )
}

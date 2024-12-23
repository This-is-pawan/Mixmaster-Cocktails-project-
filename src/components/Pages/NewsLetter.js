import React from 'react'

const NewsLetter = () => {
  return (
    <>
<div className="form-center">
  <form action="" className='form'>
  <h1>our newsletter</h1>
  <label htmlFor="name">Name</label>
  <input type="text"  id='name'/>
  <label htmlFor="lastname">Last Name</label>
  <input type="lastname"  id='name'/>
  <label htmlFor="email">Email</label>
  <input type="email"  id='name'/>
  <button className="btn">submit</button>
  </form>
</div>
    </>
  )
}

export default NewsLetter
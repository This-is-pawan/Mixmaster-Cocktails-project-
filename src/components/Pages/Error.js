import React from 'react'
import img from './Error.svg'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='error-center'>
<div className="error-img">
  <img src={img} alt="error" className='img' />
       <p>ohh! not found </p>

</div>
 <Link to="/" className='backhome'>
 <span className='back-arrow'>←</span> Back to Home</Link>

    </div>
  )
}

export default Error
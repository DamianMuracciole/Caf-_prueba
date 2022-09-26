import React from 'react'
import notFound from '../../assets/images/error404.jpg'

const NotFound = () => {
  return (
    <div>
      <img className='notFoundStyle' src={notFound} alt='error 404 URL not found' ></img>
    </div>
  )
}

export default NotFound
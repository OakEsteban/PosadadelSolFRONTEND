import React from 'react'
import '../Styles/Nosotros3.css'


function CardWorker(props) {
  return (
    <div className='container-100'>
        <img src={props.src} alt="" id='imgp'/>
        <div className='text-1'>
            <p id='txt-1'><strong>{props.Title}</strong></p>
            <p id='txt-2'>{props.description}</p>

        </div>
    </div>
  )
}

export default CardWorker
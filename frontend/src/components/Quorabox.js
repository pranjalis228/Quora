import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/Quorabox.css";

function Quorabox() {
  return (
    <div className='quorabox'>
        <div className='qbox-info'>
            <Avatar />
        </div>
        <div className='qbox-quora'><h4>What do you want to ask or share?</h4></div>
      
    </div>
  )
}

export default Quorabox

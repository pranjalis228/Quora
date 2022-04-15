import React from 'react'
import Feed from './Feed'
import Quoraheader from './Quoraheader'
import './css/Quora.css';
import Sidebar from './Sidebar';

function Quora() {
  return (
    <div className="quora">
        <Quoraheader />
        <div className="quora-contents">
          <div className='quora-content'>
            <Sidebar />
            <Feed />

          </div>
        </div>
      
    </div>
  )
}

export default Quora

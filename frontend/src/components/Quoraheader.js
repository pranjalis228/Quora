
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlined from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlined from '@material-ui/icons/NotificationsOutlined';
import Search from '@material-ui/icons/Search';
import { Avatar, Button, Input } from '@material-ui/core';
import "./css/Quoraheader.css";
import Modal from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { ExpandMore } from '@material-ui/icons';
import'react-responsive-modal/styles.css'

function Quoraheader() {

    const [isModalOpen,setIsModalOpen]=useState(false);
    const Close=(<CloseIcon/>)
    
  return (
    <div className='qheader'>
        <div className='qheader-content'>
            <div className='qheader-logo'>
                <img src ="https://th.bing.com/th/id/OIP.T6GqcbSzUMOIacIBqXz2gwHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                alt="logo" /> </div>
                <div className='qheader-icons'>
                    <div className='qheader-icon'><HomeIcon /></div>
                    <div className='qheader-icon'><FeaturedPlayListOutlinedIcon /></div>
                    <div className='qheader-icon'><AssignmentTurnedInOutlined /></div>
                    <div className='qheader-icon'><PeopleAltOutlined /></div>
                    <div className='qheader-icon'><NotificationsOutlined /></div>
                </div>
                <div className='qheader-input'>
                    <Search />
                    <input type="text" placeholder="Search your question..."></input> 
                </div>
                <div className='qheader-rem'>
                    <Avatar />
                </div>
                <Button onClick={() => setIsModalOpen(true)}>Ask your question</Button>
                <Modal
                open={isModalOpen}
                closeIcon={Close}
                onClose={() => setIsModalOpen(false)}
                closeOnEsc
                center
                closeOnOverlayClick={false}
                styles={{
                    overlay:{
                        height:"auto",
                    }
                }}
                >
                    <div className='modal-title'>
                        <h5>Add Quetion</h5>
                        <h5>Share Link</h5>

                    </div>
                    <div className='modal-info'>
                        <Avatar className='avatar'/>
                        <div className='modal-scope'>
                            <PeopleAltOutlined/>
                            <p> Public</p>
                            <ExpandMore/>
                            </div> 
                    </div>
                    <div className='modal-field'>
                        <Input type="text" placeholder='Write your question here...'/>
                    <div style={{
                        diplay:"flex",
                        flexDirection:"column",
                    }}>

                    </div>
                    </div>
                    <div className='modal-buttons'>
                        <button className='cancel' onClick={() => setIsModalOpen (false)}>
                            Cancel
                            </button>
                            <button type="submit" className='add' >
                            Add
                            </button>
                       
                    </div>
                </Modal>
                
        </div>
    </div>
  )
}

export default Quoraheader

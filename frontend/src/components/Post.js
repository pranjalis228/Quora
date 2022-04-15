import ArrowUpwardOutlined from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined';
import RepeatOneOutlined from '@material-ui/icons/RepeatOneOutlined';
import ChatBubbleOutlined from '@material-ui/icons/ChatBubbleOutlined';
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import React from 'react'
import "./css/Post.css";
import { Avatar } from '@material-ui/core';
import Modal from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import'react-responsive-modal/styles.css';
import 'react-quill/dist/quill.snow.css' ;
import ReactQuill from 'react-quill';


function Post() {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const Close=(<CloseIcon/>)
  return (
    <div className='post'>
        <div className='post-info'>
            <Avatar />
            <h4> User Name</h4>
            <small>Timestamp</small>
        </div>
        <div className='post-body'>
            <div className='post-ques'>
            <p>
                Question
            </p>
            <button onClick={() => setIsModalOpen(true)} className='postb-ans'>Answer</button>
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
            }}>
            <div className='modal-question'>
                <h1>test question..</h1>
                <p>{" "}<span className='name'>Username</span>{" "}<span className='name'>Timestamp</span> </p>
                </div>  
                <div className='modal-answer'>
                    <ReactQuill placeholder ="Type your answer here...."/>

                </div>
                <div className='modal-button'>
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
        <div className='post-footer'>
            <div className='post-footeraction'>
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined />
            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlined />
            <div className='post_footerleft'>
                <ShareOutlined />
                <MoreHorizOutlined />
            </div>
        </div>
        <div stye={{
            margin:"10px",
            padding:"10px 200px",
            borderTop:"1px",

        }}className='post-answer'>
            <div style ={{
                display:"flex",
                flexDirection:"column",
                width:"100%",
                padding:"10px ",
                borderTop: "1px solid lightgray",
            }}
            className='post-answer-container'>
                <div style ={{
                display:"flex",
                alignItems:"left",
                marginBottom:"10px",
                fontsize:"12px",

            }} 
            className='post-answered'>
                    <Avatar />
                    <div 
                    style={{
                        margin:"0px 10px"
                    }}className='post-info'>
                        <p>User Name</p> &nbsp;
                        <span>Timestamp</span>
                    </div>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"coloumn" ,
                    width:"100%",
                    paddcing:"10px 5px",
                    bordertop: "1px solid lightgray",
                }}className='post-answer'>Test answer</div>
            </div>
        </div>

    </div>
  )
}

export default Post

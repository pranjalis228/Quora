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
import ReactTimeAgo from 'react-time-ago';
import axios from 'axios';
import ReactHtmlParser from'html-react-parser';
import "./script";

function LastSeen({ date }) {
    return (
      <div>
        Posted <ReactTimeAgo date={date} locale="en-US"/>
      </div>
    )
  }
    

function Post({post}) {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [answer, setAnswer] =useState("")
    const Close=(<CloseIcon/>);

    const handleQuill=(value) =>{
        setAnswer(value);
    };
    console.log(answer);
    const handleSubmit=async()=>{
        if (post?.questionId && answer !==""){
            const config = {
                headers: {
                    "Content-Type":"application/json"
                }
            }
            const body={
                answer: answer,
                questionId : Post?._id,
            };
            await axios.post('/api/answers',body,config).then((res)=>{
                console.log(res.data);
                alert('Answer added');
                setIsModalOpen(false);
                window.location.href='/'
            }).catch.log((e)=>{
            console.log(e)
            })

        }
    }
  return (
    <div className='post'>
        <div className='post-info'>
            <Avatar />
            <h4> User Name</h4>


          <small><LastSeen date={post?.createdAt} /></small>
        </div>
        <div className='post-body'>
            <div className='post-ques'>
            <p>
                {post?.questionName}
            </p>
            <button onClick={() => {
                setIsModalOpen(true)
                console.log(post?.questionId)
            }} className='postb-ans'>Answer</button>
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
                <h1>{post?.questionName}</h1>
                <p>{" "}<span className='name'>Username</span>{" "}
                <span className='name'>{new Date(post?.createdAt).toLocaleString()}</span> </p>
                </div>  
                <div className='modal-answer'>
                    <ReactQuill value={answer} onChange ={handleQuill} 
                    placeholder ="Type your answer here...."/>

                </div>
                <div className='modal-button'>
                <button className='cancel' onClick={() => setIsModalOpen (false)}>
                            Cancel
                            </button>
                            <button onClick ={handleSubmit} type="submit" className='add' >
                            Upload Answer
                            </button>
                </div>
            </Modal>
        </div>
        </div>
        <div className='post-footer'>
            <div className='post-footeraction'>
                <p id ="up">0 </p>
                <ArrowUpwardOutlined onClick="upvote()"/>
               <p id ="down">0</p>
               <ArrowDownwardOutlined onClick="downvote()"/>

               <script src="script.js" charset="utf-8"></script>
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
                  {  
                    
                post?.allAnswers?.map((_a) => (
                <>
                <div style ={{
                display:"flex",
                alignItems:"left",
                flexDirection:"column",
                width:"100%",
                padding:"20px 5px",
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
                        <p>Username</p> &nbsp;
                        <span><LastSeen date={_a?.createdAt}></LastSeen></span>
                    </div>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"coloumn" ,
                    width:"100%",
                    padding:"10px 5px",
                    bordertop: "1px solid lightgray",
                }}className='post-answer'>{ReactHtmlParser(_a?.answer)}</div>
               </div> </>))
            }
            
                  
        </div>

    </div>
  );
}

export default Post;

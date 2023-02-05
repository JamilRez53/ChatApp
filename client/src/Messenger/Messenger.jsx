import React, { useContext,useState,useEffect } from 'react'
import  "./Messenger.css";

import Topbar from '../Topbar/Topbar'
import Conversation from '../conversations/Conversation';
import Message from '../message/Message';
import ChatOnline from '../chatOnline/ChatOnline';
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
const Messenger = () => {
  const[conversations,setConversations] = useState([]);

  /*const {user} = useContext(AuthContext);
  console.log(user);
  useEffect(()=>{
    const getConversations = async ()=>{
      try {
        
        const res = await axios.get("/conversations/"+user._id);
        console.log(res);
      } catch (err) {
        console.log(err)
      }
    }*/
   // getConversations();
 // },/*[user._id])*/;
  return (
    <div>
        <Topbar/>
        <div className="messenger">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
             <input placeholder="Search for friends" className="chatMenuInput"/>
             <Conversation/>
            </div>
          </div>
        
        
          <div className="chatBox">
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                <Message/>
                <Message own={true} />
                <Message/>
                <Message own={true}/>
                <Message/>
              </div>
              <div className="chatBoxBottom">
                <textarea className="chatMessageInput" placeholder="Write Something......"></textarea>
                <button className="chatSubmitButton">Send</button>
              </div>
            </div>
          </div>

        
          <div className="chatOnline">
            <div className="chatOnlineWrapper">
              <ChatOnline/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Messenger

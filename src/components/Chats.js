import React, { useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

//components
import Navbar from './Navbar';

//context
import { authContext } from '../context/AuthContextProvider';

const Chats = () => {

    const user = useContext(authContext);
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/")
    }

    useEffect(() => {
        if (!user) {
            navigate("/")
            return;
        }

        axios.get("https://api.chatengine/users/me", {
          headers: {
            "project-id": "5bbca0ed-09bc-41c4-a0d1-b7b737f9cc6f",
            "user-name": user.email,
            "user-secret": user.uid
          }
        })
        .then(response => {
            return response;
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL).then(avatar => {
               formdata.append("avatar", avatar, avatar.name)
               
            })
            axios
              .post("https://api.chatengine.io/users/", formdata, {
                headers: {
                  "PRIVATE-KEY": "2200e5d1-3606-4b66-b5f5-1bb4b20e2f8a",
                },
              })
              .then(response => {
                return response;
              })
      
        })
    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    if (!user ) return "Loading..."
   
    return (
      <div>
        <Navbar logoutHandler={logoutHandler} />
        <ChatEngine
          height="calc(100vh - 50px)"
          projectID="5bbca0ed-09bc-41c4-a0d1-b7b737f9cc6f"
          userName= {user.email}
          userSecret= {user.uid}
        />
      </div>
    );}
    
;

export default Chats;
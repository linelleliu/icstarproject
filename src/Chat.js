import React from 'react';
import pic from './pic.jpg';
import pic1 from './pic1.jpeg';
import Container from '@material-ui/core/Container';
           
function Chat() {
    return (
        <div>
            <div class="container">
                <img src={pic} alt="Avatar" width="30%"></img>
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </div>
            <div class="container darker">
                <img src={pic1} alt="Avatar" class="right" width="50%"></img>
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span class="time-left">11:01</span>
            </div>
            <div class="container">
                <img src={pic} alt="Avatar"  width="30%"></img>
                <p>Sweet! So, what do you wanna do today?</p>
                <span class="time-right">11:02</span>
            </div>
            <div class="container darker">
                <img src={pic1} alt="Avatar" class="right" width="50%"/>
                <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                <span class="time-left">11:05</span>
            </div>
            <div>
                <textarea placeholder="Type message.." name="msg" required></textarea>
                <button type="submit" class="btn">Send</button>
            </div>
        </div>
);
};


export default Chat;

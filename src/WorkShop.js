import React from 'react';
import axios from 'axios';

class WorkShop extends React.Component {

    createrUser() {
        let username=document.getElementById('username').value;
        let password=document.getElementById('username').value;
        let data={username: username, password: password};
        axios.post('http://localhost:8080/createruser',data)
    }
    render() {
        return (
            <div>
                Create user info
                <h1>Username</h1>
                <input />
                <h1>Password</h1>
                <input />
                <br/>
                <br/>
                <button onClick={this.createrUser}>Create</button>
            </div>
        )
    }
}

export default WorkShop;
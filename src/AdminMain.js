import React from 'react';
import App from './App';
import StudentLogIn from './StudentLogIn'


class AdminMain extends React.Component {
    state= {currentPage: 'logIn'}

    goToApp = () => {
        this.setState({currentPage: 'App'})
    }

render() {
    if (this.state.currentPage === 'logIn') {

    return (
        <StudentLogIn type="Admin" goToApp={this.goToApp}/>
    )
    } else if (this.state.currentPage === 'App') {
   
        return (
        <App />
    )
    }
}
};

export default AdminMain;
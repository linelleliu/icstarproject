import React from 'react';
import StudentRegistration from './StudentRegistration'
import App from './App'


class Main extends React.Component {
    state= {currentPage: 'logIn'}

    goToApp = () => {
        this.setState({currentPage: 'App'})
    }

render() {
    if (this.state.currentPage === 'logIn') {

    return (
        <StudentRegistration goToApp={this.goToApp}/>
    )
} else if (this.state.currentPage === 'App') {
    return (
        <App />
    )
}
}
};

export default Main;
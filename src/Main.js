import React from 'react';
import StudentRegistration from './StudentRegistration'
import App from './App'


class Main extends React.Component {
    state= {currentPage: 'Registration'}

    goToApp = () => {
        this.setState({currentPage: 'App'})
    }

render() {
    if (this.state.currentPage === 'Registration') {

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
import React, { Component } from 'react';
import Auth from '../services/auth';
import Login from '../pages/login'
import { Actions } from 'react-native-router-flux';
const HocAuth = (HocComponent) => {

    return class extends Component {
        render() {
    
            if (!Auth.isAuth()) {
                return (
                    <Login {...this.props}></Login>
                );
            }
            return (
                <div>
                    <HocComponent {...this.props}></HocComponent>
                </div>

            );
        }
    }
}


export default HocAuth
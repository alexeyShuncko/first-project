import React from 'react';
import { getLoginThunk } from '../../Redux/AuthReducer'
import { connect } from 'react-redux';
import Login from './login';


class LoginContainer extends React.Component {

    componentDidMount() {
     
    }
    render() {
        return <Login 
        getLoginThunk={this.props.getLoginThunk}
        isAuth={this.props.isAuth}
        />
    }
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    password: state.auth.password,
    getLoginThunk: getLoginThunk
})


export default connect(mapStateToProps, { getLoginThunk})(LoginContainer);
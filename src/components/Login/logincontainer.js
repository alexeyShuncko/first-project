import React from 'react';
import { getLoginThunk } from '../../Redux/AuthReducer'
import { connect } from 'react-redux';
import Login from './login';



// class LoginContainer extends React.Component {
//     componentDidMount() {

//     }
//     componentDidUpdate(prevProps) {
//         if (this.props.captchaUrl !== prevProps.captchaUrl) {
//             this.render()
//         }
//     }
//     render() {
//         return (
//             <Login
//                 getLoginThunk={this.props.getLoginThunk}
//                 isAuth={this.props.isAuth}
//                 captchaUrl={this.props.captchaUrl}
//             />)
//     }
// }

 const LoginContainer = (props) => {
    return <div>
         <Login
             getLoginThunk={props.getLoginThunk}
             isAuth={props.isAuth}
             captchaUrl={props.captchaUrl}
             errorLogin={props.errorLogin}
         />
     </div>
 }

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    password: state.auth.password,
    getLoginThunk: getLoginThunk,
    captchaUrl: state.auth.captchaUrl,
    errorLogin: state.auth.errorLogin
})


export default connect(mapStateToProps, { getLoginThunk })(LoginContainer);
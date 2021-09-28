import React from 'react'
import { connect } from 'react-redux';
import { Logout } from './Logout'
import { getLogoutThunk } from '../../../Redux/AuthReducer'




class LogoutContainer extends React.Component {
    componentDidMount() {
     
    }

    render () {
        return <Logout getLogoutThunk={this.props.getLogoutThunk}/>
    }

}
const mapStateToProps =(state)=> ({
    isAuth: state.auth.isAuth,
    getLogoutThunk: getLogoutThunk
})

export default connect(mapStateToProps, { getLogoutThunk })(LogoutContainer);
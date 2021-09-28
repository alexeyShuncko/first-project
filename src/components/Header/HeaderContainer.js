import React from 'react';
import Header from './Header';
import { getLogoutThunk } from '../../Redux/AuthReducer'
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {

    
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    getLogoutThunk: getLogoutThunk
})


export default connect(mapStateToProps, { getLogoutThunk })(HeaderContainer);
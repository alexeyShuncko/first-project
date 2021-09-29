import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileThunk } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUpdateStatus, getStatusThunk, savePhoto } from './../../Redux/profileReducer';



class ProfileContainer extends React.Component {


refreshProfile () {
    let userId = this.props.match.params.userid;
    if (!userId) {
        userId = this.props.userIdAutorize
          if (!userId) {
               this.props.history.push('/login')
          }
    }
    this.props.getProfileThunk(userId)
    this.props.getStatusThunk(userId)
}

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userid !== prevProps.match.params.userid) {
            this.refreshProfile()
        }
    }

    render() {
       
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                getUpdateStatus={this.props.getUpdateStatus}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        userIdAutorize: state.auth.id,
        profile: state.profileData.profile,
        status: state.profileData.status,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,{ getProfileThunk, getStatusThunk, getUpdateStatus, savePhoto }),
    withRouter
)(ProfileContainer)
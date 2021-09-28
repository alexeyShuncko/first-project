//import React from 'react';
import { addMessage } from '../../Redux/messagesReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
 




let mapStateToProps = (state) => {
  return {  
    messagesData: state.messagesData
  }
}


export default compose(
  connect(mapStateToProps, {addMessage}),
  withAuthRedirect
)(Dialogs);
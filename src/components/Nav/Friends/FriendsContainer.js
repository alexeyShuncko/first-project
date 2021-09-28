//import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';



let mapStateToProps = (state) => {
  return {
    dial: state.messagesData.dial
  }
}
let mapDispatchToProps = () => {
  return {

  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer


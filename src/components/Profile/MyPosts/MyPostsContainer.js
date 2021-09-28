//import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps =(state)=> {
    return {
        posts: state.profileData.posts
    }
}

const MyPostsContainer = connect(mapStateToProps,{addPost}) (MyPosts)

export default MyPostsContainer
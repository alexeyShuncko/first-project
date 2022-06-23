import React, { useEffect } from 'react';
// import s from './Profile.module.css';
import { Container, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { connect } from 'react-redux';
import ava from '../../image/1.jpg'
import { getProfileThunk } from '../../Redux/profileReducer'
import { useNavigate } from "react-router-dom";




const Profile = (props) => {
    const navig = useNavigate()

    useEffect(() => {
        !props.auth.isAuth && navig('/login')

    }, [props.auth.isAuth, navig])







    return (

        <Container maxWidth={'md'} sx={{ mt: '6rem' }}>
            <Card sx={{ display: { xs: '', md: 'flex' }, p: '1rem' }} >
                <CardMedia
                    sx={{ maxWidth: 345 }}
                    component="img"

                    image={props.profile.profile ? props.profile.profile.photos.large : ava}
                    alt="henghog"
                />
                <CardContent>
                    {props.profile.profile
                        ? <Typography gutterBottom variant="h5" component="div">

                            {props.profile.profile.fullName} - {props.profile.profile.aboutMe}
                        </Typography>
                        : null
                    }

                    {props.profile.status
                        ? <Typography variant="body2" color="text.secondary">
                            Status:{props.profile.status}
                        </Typography>
                        : null}
                    <CardActions>
                        <Button variant="contained">Follow</Button>

                    </CardActions>
                </CardContent>

            </Card>
        </Container>

    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileData,
        auth: state.authData
    }
}

export default connect(mapStateToProps, { getProfileThunk })(Profile)


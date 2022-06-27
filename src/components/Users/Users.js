import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import s from './users.module.css'
import foto from "../../image/foto.jpg"
import { getUsers, follow, unfollow } from "../../Redux/usersReducer";
import { getProfileThunk } from "../../Redux/profileReducer";
import { useNavigate } from 'react-router-dom';



const Users = (props) => {

    const navig = useNavigate() 

    useEffect(() => {
        props.getUsers(1, props.users.pageSize)
    }, [])


    const getPage = (e) => {
        props.getUsers(e.target.innerText, props.users.pageSize)
    }





    return <div>
        <Container maxWidth={'md'} sx={{ mt: '6rem' }}>

            <Grid container spacing={2}>
                {props.users.users &&
                    props.users.users.map(a => (
                        <Grid item key={a.name}>
                            <Card sx={{ width: 200, cursor: 'pointer' }}
                                onClick={() => {
                                    props.getProfileThunk(a.id)
                                    navig(`/profile/${a.id}`)
                                }}>
                                <CardMedia
                                    sx={{ maxWidth: 200 }}
                                    component="img"
                                    height="140"
                                    image={a.photos.large || foto}
                                    alt="henghog" />
                                <CardContent>
                                    <Typography variant="subtitle2" >
                                        {a.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {
                                        !a.followed
                                            ? <Button
                                                variant='contained'
                                                color="success"
                                                onClick={() => props.follow(a)}
                                            >
                                                Follow</Button>
                                            : <Button
                                                variant='contained'
                                                color="secondary"
                                                onClick={() => props.unfollow(a)}
                                            >
                                                Unfollow
                                            </Button>
                                    }

                                </CardActions>
                            </Card>

                        </Grid>
                    ))
                }


            </Grid>
            <Pagination
                count={Math.ceil(props.users.totalUsersCount / props.users.pageSize) || 16}
                color="primary"
                onClick={getPage}
                sx={{ display: "flex", m: 2, justifyContent: "center" }} />
        </Container>
    </div>
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage
    }
}

export default connect(mapStateToProps, { getUsers, follow, unfollow, getProfileThunk })(Users)

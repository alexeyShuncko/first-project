import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import s from './users.module.css'
import foto from '../../image/foto.jpg';
import {
  getUsers,
  follow,
  unfollow,
  setCurrenPage,
} from '../../Redux/usersReducer';
import { getProfileThunk } from '../../Redux/profileReducer';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import setting from '../../image/Settings.gif';

const Users = (props) => {
  const navig = useNavigate();

  useEffect(() => {
    props.getUsers(props.users.currentPage, props.users.pageSize);
  }, []);

  const handleChange = (e, page) => {
    props.setCurrenPage(page);
    props.getUsers(page, props.users.pageSize);
    window.scrollTo(0, 0);
  };

  const followUser = (id) => {
    props
      .follow(id)
      .then(() => {
        props.setOpenSnackBar(true);
      })
      .catch((err) => {
        props.setErrorSnackBarText(err.message);
        props.setErrorSnackBar(true);
      });
  };
  const unfollowUser = (id) => {
    props
      .unfollow(id)
      .then(() => {
        props.setOpenSnackBar(true);
      })
      .catch((err) => {
        props.setErrorSnackBarText(err.message);
        props.setErrorSnackBar(true);
      });
  };

  return (
    <div>
      {props.users.users.length === 0 && <Loading />}
      <Container maxWidth={'md'} sx={{ mt: '6rem' }}>
        <Grid container spacing={2}>
          {props.users.users &&
            props.users.users.map((a) => (
              <Grid item key={a.name} xs={6} md={3} sm={4}>
                <Card>
                  <CardMedia
                    onClick={() => {
                      props.getProfileThunk(a.id);
                      navig(`/profile/${a.id}`);
                    }}
                    sx={{ cursor: 'pointer' }}
                    component="img"
                    height="140"
                    image={a.photos.large || foto}
                    alt="henghog"
                  />
                  <CardContent>
                    <Typography variant="subtitle2">{a.name}</Typography>
                  </CardContent>
                  <CardActions>
                    {!a.followed ? (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => followUser(a.id)}>
                        Follow
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => unfollowUser(a.id)}>
                        Unfollow
                      </Button>
                    )}
                    {props.users.followingInProgress[0] === a.id && (
                      <img
                        src={setting}
                        alt="settings"
                        width={'35px'}
                        style={{ marginLeft: '10px' }}
                      />
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Pagination
          size="small"
          onChange={handleChange}
          count={
            Math.ceil(props.users.totalUsersCount / props.users.pageSize) || 16
          }
          color="primary"
          page={props.users.currentPage ? props.users.currentPage : 1}
          sx={{ display: 'flex', my: 4, justifyContent: 'center' }}
        />
      </Container>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    users: state.usersPage,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  follow,
  unfollow,
  getProfileThunk,
  setCurrenPage,
})(Users);

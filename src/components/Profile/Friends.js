import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import ava from '../../image/foto.jpg';
import { useNavigate } from 'react-router-dom';

const Friends = (props) => {
  const navig = useNavigate();
  const arrFollow = props.users.filter((u) => u.followed === true);

  return (
    <Card sx={{ display: 'flex', p: 1, mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Friends:</Typography>
      </CardContent>
      {arrFollow.length === 0 ? (
        <CardContent>
          <Typography variant="h6">no friends((</Typography>
        </CardContent>
      ) : (
        <Grid container spacing={1}>
          {arrFollow.map((a) => (
            <Grid
              item
              onClick={() => {
                props.getProfileThunk(a.id);
                navig(`/profile/${a.id}`);
              }}
              key={a.id}
              md={1}
              sm={2}
              xs={4}
              sx={{ p: 0, cursor: 'pointer' }}>
              <CardMedia
                sx={{ maxWidth: 50, height: 50, borderRadius: 20 }}
                component="img"
                src={a.photos.small !== null ? a.photos.small : ava}
                alt="henghog"
              />

              <Typography variant="caption" noWrap component={'div'}>
                {a.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Card>
  );
};
export default Friends;

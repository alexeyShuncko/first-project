import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
// import s from './users.module.css'
import foto from "../../image/foto.jpg"



const Users = (props) => {
    const [edit, setEdit] = useState(true)

    const following = () => {
        setEdit(false)
    }

    const arr = [1, 2, 3, 4, 5, 6]

    return <div>
        <Container maxWidth={'md'} sx={{ mt: '6rem' }}>
            <Grid container spacing={2}>
                {
                    arr.map(a => (
                        <Grid item key={a}>
                            <Card>
                                <CardMedia
                                    sx={{ maxWidth: 200 }}
                                    component="img"
                                    height="140"
                                    image={foto}
                                    alt="henghog" />
                                <CardContent>
                                    <Typography variant="h5">
                                        {a}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {
                                        edit
                                            ? <Button
                                                variant='contained'
                                                color="success"
                                                onClick={following}
                                            >
                                                Follow</Button>
                                            : <Button variant='contained' color="secondary">Unfollow</Button>
                                    }

                                </CardActions>
                            </Card>

                        </Grid>
                    ))
                }


            </Grid>
        </Container>
    </div>
}

export default Users
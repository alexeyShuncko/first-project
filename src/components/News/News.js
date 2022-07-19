import { Box, Button, Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
// import s from './News.module.css';
import foto1 from '../../image/news/foto.jpg'
import { connect } from 'react-redux'
import { addNews } from '../../Redux/newsReducer'



const News = (props) => {
    const [activeNews, setActiveNews] = useState(props.news.arrNews.length)
    const [allNews, setAllNews] = useState(false)
    const [open, setOpen] = useState(false)

    const [errNews, setErrNews] = useState(false)
    const [errText, setErrText] = useState('')

    const [editArr, setEditArr] = useState(false)



    const newsHandler = (e) => {
        setActiveNews(Number(e.currentTarget.id))
    }
    const allNewsHandler = () => {
        setAllNews(true)
        window.scrollTo(0, 0)
    }
    const activeNewsHandler = (e) => {
        setActiveNews(Number(e.currentTarget.id))
        setAllNews(false)
        window.scrollTo(0, 0)
    }


    const inputHandler = () => {
        setErrNews(false)
        setErrText('')
    }

    const handleClose = () => {
        setOpen(false)

    }

    const DateFunc = (date) => {

        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        let HH = date.getHours();
        if (HH < 10) HH = '0' + HH;

        let MM = date.getMinutes();
        if (MM < 10) MM = '0' + MM;

        return dd + '-' + mm + '-20' + yy + ' ' + HH + ':' + MM;
    }

    const saveProfile = () => {
        if (document.getElementById('nameNews').value.length === 0) {
            setErrNews(true)
            setErrText('Required field')
            document.getElementById('nameNews').focus()
        }
        else {
            const newNews = {
                name: document.getElementById('nameNews').value,
                date: DateFunc(new Date()),
                photo: foto1,
                text: document.getElementById('textNews').value,
                id: props.news.arrNews.length + 1
            }
            props.addNews(newNews)
            setActiveNews(props.news.arrNews.length+1)
            setOpen(false)
            window.scrollTo(0, 0)
            props.setOpenSnackBar(true)
        }
    }

    const addNewsHandler = () => {
        setOpen(true)
    }


    const editArrHandler =()=> {
        setEditArr(!editArr)
    }


    return (
        <Container maxWidth={'md'} sx={{ mt: '6rem', display: { md: 'flex', sx: '' } }} >
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={open}
                onClose={handleClose}>
                <DialogTitle>New news</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <DialogContentText>
                    Fill in the name and text of the news.
                    </DialogContentText>
                    <TextField
                        onChange={inputHandler}
                        error={errNews}
                        helperText={errText}
                        autoFocus
                        autoComplete='off'
                        margin="dense"
                        id="nameNews"
                        label="Name"
                        variant="outlined"
                        size='small'
                    />
                    <TextField
                        multiline
                        autoComplete='off'
                        margin="dense"
                        id="textNews"
                        label="Text news"
                        variant="outlined"
                        size='small'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' color='warning'>Cancel</Button>
                    <Button onClick={saveProfile} variant='contained' color='success'>Save</Button>
                </DialogActions>
            </Dialog>
            {
                allNews
                    ? <Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
                            {
                                !editArr
                                ? <Button onClick={editArrHandler}
                                variant='contained'
                                color='warning'>Old ones first</Button>
                                : <Button onClick={editArrHandler}
                                variant='contained'
                                color='primary'>First new</Button>
                            }
                           
                   
                                <Button onClick={() => {
                                    setAllNews(false)
                                    window.scrollTo(0, 0)
                                }}
                                    variant='contained'
                                    color='secondary'>Back</Button>
                        </Box>

                        {
                            editArr
                            ? props.news.arrNews.map(a => (
                                <Card key={a.id}
                                    id={a.id}
                                    onClick={activeNewsHandler}
                                    sx={{ cursor: 'pointer', mb: 1, maxWidth: '100%' }}>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" >
                                            {a.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            {a.text.slice(0, 180)}...
                                        </Typography>
                                        <Typography variant="body2"  >
                                            {a.date}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            ))
                            :
                            props.news.arrNews.map(a => (
                                <Card key={a.id}
                                    id={a.id}
                                    onClick={activeNewsHandler}
                                    sx={{ cursor: 'pointer', mb: 1, maxWidth: '100%' }}>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" >
                                            {a.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            {a.text.slice(0, 180)}...
                                        </Typography>
                                        <Typography variant="body2"  >
                                            {a.date}
                                        </Typography>

                                    </CardContent>
                                </Card>

                            )).reverse()
                        }
                    </Box>
                    : <>
                        <Box sx={{ flexGrow: 2 }}>
                            <Card sx={{ minWidth: { md: 552, xs: '100%' }, mb: 2, mr: 3 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {props.news.arrNews.find(a=> a.id === activeNews).name}
                                    </Typography>
                                    <Typography variant="subtitle2" component="div">
                                        {props.news.arrNews.find(a=> a.id === activeNews).date}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={props.news.arrNews.find(a=> a.id === activeNews).photo}
                                    alt="news1"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {props.news.arrNews.find(a => a.id === activeNews).text}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Button variant="contained"
                                onClick={addNewsHandler}
                                color='success' sx={{ mb: 2, mr: 1 }}>Add news</Button>

                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            {
                                props.news.arrNews.map(a => (a.id !== activeNews)
                                    && a.id > props.news.arrNews.length - 5
                                    && (
                                        <Card key={a.id}
                                            id={a.id}
                                            onClick={newsHandler}
                                            sx={{ width: { md: 300, xs: '100%' }, display: 'flex', cursor: 'pointer', mb: 1 }}>
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography variant="body2" >
                                                    {a.name}
                                                </Typography>
                                            </CardContent>
                                            <CardMedia
                                                sx={{ flexGrow: 1, py: 2, maxWidth: 100 }}
                                                component="img"
                                                height="80"
                                                image={a.photo}
                                                alt={a.name}
                                            />
                                        </Card>
                                    )).reverse()
                            }
                            <Button variant='outlined'
                                onClick={allNewsHandler}
                                sx={{ mb: 2 }}>Show all news</Button>
                        </Box>
                    </>
            }


        </Container>
    )
}
let mapStateToProps = (state) => {
    return {
        news: state.newsData
    }
}

export default connect(mapStateToProps, { addNews })(News)




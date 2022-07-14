import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
// import s from './News.module.css';
import foto1 from '../../image/news/foto.jpg'



const News = (props) => {
    const [activeNews, setActiveNews] = useState(0)


    const arrNews = [
        {
            name: 'News 1 News 1 News 1 News 1', date: '22-02-2022 16:27', photo: foto1, 
            text: `Lizards are a widespread group of squamate 
            reptiles, with over 6,000 
            species, ranging across all continents except Antarctica`, id: 1
        },
        {
            name: 'News 2', date: '22-02-2022 16:27', photo: foto1, 
            text: `Lizards are a widespread group of squamate 
            reptiles, with over 6,000 
            species, ranging across all continents except Antarctica`, id: 2
        },
        {
            name: 'News 3', date: '22-02-2022 16:27', photo: foto1, 
            text: `Lizards are a widespread group of squamate 
            reptiles, with over 6,000 
            species, ranging across all continents except Antarctica`, id: 3
        },
        {
            name: 'News 4', date: '22-02-2022 16:27', photo: foto1, 
            text: `Lizards are a widespread group of squamate 
            reptiles, with over 6,000 
            species, ranging across all continents except Antarctica`, id: 4
        },

    ]

    const newsHandler =(e)=> {
        console.log(e.currentTarget.value)
        // setActiveNews(e.target.id - 1)
    }

    return (
        <Container maxWidth={'md'} sx={{ mt: '6rem', display: {md:'flex', sx: ''} }} >
            <Box sx={{ flexGrow: 2 }}>
              

                <Card sx={{ maxWidth: 500, mb: 2 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {arrNews[activeNews].name}
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                        {arrNews[activeNews].date}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="250"
                        image={arrNews[activeNews].photo}
                        alt="news1"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                       { arrNews[activeNews].text}
                        </Typography>
                    </CardContent>
                </Card>
                <Button variant="contained" color='success' sx={{mb: 2}}>Add news</Button>
            </Box>
            <Box sx={{ flexGrow: 1 }}>

                {
                    arrNews.map(a=> (
                        <Card key={a.id}
                        onClick={newsHandler}
                        sx={{ maxWidth: {md:300, xs: 400}, display: 'flex', cursor: 'pointer', mb: 1}}>
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
                    ))
                }

                <Button variant='outlined' sx={{mb: 2}}>Show all news</Button>
            </Box>
        </Container>
    )
}

export default News


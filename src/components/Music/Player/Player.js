import React from "react";
import { IconButton } from "@mui/material";

import s from './Player.module.css'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { connect } from "react-redux";

import {  setDurationValue, setActive, setDuration, setIndexSong } from "../../../Redux/musicReducer";



const Player =({setDurationValue,setDuration,setIndexSong,...props})=> {



    const play = () => {

        document.getElementById('player').volume = props.music.volumeValue * 0.01
        document.getElementById('player').play()

        const timer = (e) => {
            setDurationValue(e.srcElement.currentTime)
            props.music.duration !== Math.round(e.srcElement.duration)
                && setDuration(Math.round(e.srcElement.duration))
        }
        document.getElementById('player').ontimeupdate = timer
        props.setActive(true)
    }

    const stop = () => {
        document.getElementById('player').pause()
        props.setActive(false)
    }


    const next = () => {
        setDurationValue(0)
        if (props.music.indexSong === props.music.arrMusicName.length - 1) {
            setIndexSong(0)
        }
        else {
            setIndexSong(props.music.indexSong + 1)
        }

        if (props.music.active) {
            document.getElementById('player').oncanplay = play
        }
        else {
            document.getElementById('player').oncanplay = null
        }
    }

    const prev = () => {
        setIndexSong(props.music.indexSong - 1)
        if (props.music.active) {
            document.getElementById('player').oncanplay = play
        }
        else {
            document.getElementById('player').oncanplay = null
        }
    }



  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={s.stringMove}>
        <span>
        {props.music.arrMusicName[props.music.indexSong].name}
        </span>
        </div>
        <div>
        <audio
                type="audio/mp3"
                src={props.music.arrMusicName[props.music.indexSong].path}
                id='player'
                onEnded={next}
            ></audio>
            {props.music.indexSong !== 0
                    ? <IconButton onClick={prev} >
                        <SkipPreviousIcon />
                    </IconButton>
                    : <IconButton disabled >
                        <SkipPreviousIcon />
                    </IconButton>
                }
                {props.music.active
                    ? <IconButton onClick={stop} >
                        <PauseIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>
                    : <IconButton onClick={play} >
                        <PlayArrowIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>
                }

                {props.music.indexSong !== props.music.arrMusicName.length - 1

                    ? <IconButton onClick={next} >
                        <SkipNextIcon />
                    </IconButton>
                    : <IconButton disabled >
                        <SkipNextIcon />
                    </IconButton>
                }
        </div>
      
    </div>
)
}

let mapStateToProps = (state) => {
    return {
        music: state.musicData
    }
}

export default connect(mapStateToProps,{
    setDurationValue,setDuration,setIndexSong, setActive
})(Player)

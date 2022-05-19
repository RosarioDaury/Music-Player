import React, { useEffect, useRef, useState } from 'react';
import { DivPlayer } from './PlayerStyles';
import { MdSkipPrevious } from 'react-icons/md';
import { MdSkipNext } from 'react-icons/md';
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsFillVolumeMuteFill } from 'react-icons/bs';

export default function Player({ songs, indexSong, setIndexSong }) {
    const AudioRef = useRef();
    const RangeRef = useRef();
    const [playing, setPlaying] = useState(false);
    const [muting, setMuting] = useState(false);


    useEffect(() => {
        if (playing) {
            setTimeout(() => {
                AudioRef.current.play();
            }, 1000)
        } else {
            setTimeout(() => {
                AudioRef.current.pause();
            }, 1000)
        }
    }, [indexSong, playing]);

    const play = () => {
        setPlaying(true)
        AudioRef.current.play();
    }

    const pause = () => {
        setPlaying(false);
        AudioRef.current.pause();
    }

    const next = () => {
        if (indexSong < songs.length - 1) {
            setIndexSong(indexSong + 1);
        } else {
            setIndexSong(0);
        }
    }

    const prev = () => {
        if (indexSong > 0) {
            setIndexSong(indexSong - 1);
        } else {
            setIndexSong(songs.length - 1);
        }
    }

    const update = () => {
        RangeRef.current.value = AudioRef.current.currentTime / AudioRef.current.duration * 100;
        if (AudioRef.current.currentTime === AudioRef.current.duration) {
            next();
        }
    }

    const mute = () => {
        if (AudioRef.current.volume === 0) {
            AudioRef.current.volume = 0.3;
            setMuting(false);
        } else {
            AudioRef.current.volume = 0;
            setMuting(true);
        }
    }

    return (
        <DivPlayer>

            <div className="song-info">
                <img src={songs[indexSong].image} alt="icon" />
                <div className="song-info-text">
                    <h2>{songs[indexSong].name}</h2>
                    <p>{songs[indexSong].artist}</p>
                </div>
            </div>

            <div className="audio-controllers">

                <div className="buttons">
                    <MdSkipPrevious onClick={prev} />

                    {playing ? <AiFillPauseCircle onClick={pause} /> : <AiFillPlayCircle onClick={play} />}

                    <MdSkipNext onClick={next} />

                </div>

                <audio ref={AudioRef}
                    src={songs[indexSong].song}
                    onTimeUpdate={update}
                    onLoadedData={() => RangeRef.current.value = 0}
                    preload="auto" />

                <div className="range">

                    <input type="range" ref={RangeRef}
                        onChange={() => AudioRef.current.currentTime = AudioRef.current.duration * (RangeRef.current.value / 100)} />

                    <div className='volume-controls'>
                        <AiOutlineMinus className='volume-down' onClick={() => AudioRef.current.volume -= 0.1} />
                        <BsFillVolumeMuteFill className={muting ? "mute muted" : "mute"} onClick={mute} />
                        <AiOutlinePlus className='volume-up' onClick={() => AudioRef.current.volume += 0.1} />
                    </div>
                </div>

            </div>


        </DivPlayer >
    )
}

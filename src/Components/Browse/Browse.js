import React from 'react'
import { Card, Conteiner, DivBrowse } from './BrowseStyles';
import { BsFillPlayFill } from 'react-icons/bs';

export default function Browse(props) {

    return (
        <Conteiner>
            <h1>Browse</h1>
            <div className="filter-conteiner">
                <div className='filter'>
                    <a href='/#'>Trending now</a>
                </div>

                <div className='filter'>
                    <a href='/#'>New Release</a>
                </div>

                <div className='filter'>
                    <a href='/#'>More Music</a>
                </div>
            </div>
            <br />
            <br />
            <br />
            <DivBrowse>
                {props.songs.map((el, index) => {
                    return (
                        <Card
                            key={index}
                            className={props.indexSong === index ? "playing" : ""}>
                            <img src={el.image} alt={el.name} />
                            <div
                                className='after'
                                onClick={() => props.setIndexSong(index)}>
                                <BsFillPlayFill />
                            </div>
                        </Card>
                    )
                })}
            </DivBrowse>
            <br />
            <br />
        </Conteiner>

    )
}

import React from 'react'
import { DivSideBar } from './SideBarStyles'

export default function SideBar(props) {
  let artist = props.songs.map(el => el.artist);
  artist = new Set(artist);
  artist = Array.from(artist);

  let library = props.songs.filter(el => el.name.toLowerCase().includes(props.search));

  return (
    <DivSideBar>
      <h2>Your Library</h2>
      {library.map((el, index) => <p key={index + 1 * 5}>{el.name}</p>)}
      <br />
      <br />
      <h2>Your Artist</h2>
      {artist.map((el, index) => <p key={index + 1 * 7}>{el}</p>)}
    </DivSideBar>
  )
}

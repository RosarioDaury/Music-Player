import { useState } from "react";
import Browse from "./Components/Browse/Browse";
import Player from "./Components/Player/Player";
import Search from "./Components/Search/Search";
import SideBar from "./Components/Side/SideBar";

export const initialState = [{
  id: 1,
  name: "Seguimos Aqui",
  artist: "Ñengo Flow",
  image: "./Assets/Images/Ñengo Flow Seguimos Aqui.jpg",
  song: "./Assets/Music/Ñengo Flow Seguimos Aqui.mp3",
},
{
  id: 2,
  name: "Vaina Cara",
  artist: "Dowba Montana ft. Messiah",
  image: "./Assets/Images/Messiah feat. Dowba Montana - Vaina Cara.jpg",
  song: "./Assets/Music/Messiah feat Dowba Montana Vaina Cara.mp3",
},
{
  id: 3,
  name: "OG",
  artist: "T.Y.S ft Cromo X",
  image: "./Assets/Images/T.Y.S ft. Cromo x - OG.jpg",
  song: "./Assets/Music/TYS ft Cromo X OG.mp3",
},
{
  id: 4,
  name: "Laugh Now Cry Later",
  artist: "Drake",
  image: "./Assets/Images/Drake - Laugh Now Cry Later.jpg",
  song: "./Assets/Music/Drake - Laugh Now Cry Later.mp3",
},
{
  id: 5,
  name: "Amari",
  artist: "J cole",
  image: "./Assets/Images/J Cole Amari.jpg",
  song: "/./Assets/Music/J Cole  amari.mp3",
},
{
  id: 6,
  name: "Applying Pressure",
  artist: "J cole",
  image: "./Assets/Images/J Cole applying preassure.jpg",
  song: "./Assets/Music/J Cole applying pressure.mp3",
},
{
  id: 7,
  name: "January 28th",
  artist: "J cole",
  image: "./Assets/Images/J Cole January 28th.jpg",
  song: "./Assets/Music/J Cole January 28th.mp3",
},
{
  id: 8,
  name: "Let Go My Hand",
  artist: "J cole, Bas, 6LACK",
  image: "./Assets/Images/J Cole let go my hand ft. Bas 6LACK.jpg",
  song: "./Assets/Music/J Cole let go my hand ft. Bas 6LACK.mp3",
},
{
  id: 9,
  name: "A Lot",
  artist: "21 Savage, J Cole",
  image: "./Assets/Images/21 Savage ft. J Cole A Lot.jpg",
  song: "./Assets/Music/21 Savage ft. J Cole A Lot.mp3",
},
{
  id: 10,
  name: "Homicide",
  artist: "Logic, Eminem",
  image: "./Assets/Images/Logic ft. Eminem Homicide.jpg",
  song: "./Assets/Music/Logic ft. Eminem Homicide.mp3",
}
]

function App() {
  const [indexSong, setIndexSong] = useState(0);
  const [songs] = useState(initialState);
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <div className="side">
        <SideBar songs={songs} search={search} />
      </div>

      <div className="search">
        <Search setSearch={setSearch} />
      </div>

      <div className="browse">
        <Browse songs={songs} setIndexSong={setIndexSong} indexSong={indexSong} />
      </div>

      <div className="player">
        <Player songs={songs} indexSong={indexSong} setIndexSong={setIndexSong} />
      </div>
    </div>
  );
}

export default App;

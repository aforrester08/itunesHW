import React from 'react';

const SongList = (props) => {

  const options = props.songs.map(song => {
    return <li>{song.title.label} <img src={song["im:image"][2].label}/></li>
  })

  return (
    <ol>
      {options}
    </ol>
  )
}

export default SongList;

import React from 'react';
import SongList from '../components/SongList.js';

class SongsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({ songs: songs.feed.entry }))
    .catch(err => console.error);
  }

  render() {
    return (
      <div>
        <h3>iTunes Top 20</h3>
        <SongList
        songs={this.state.songs}
        />
      </div>
    )
  }

}

export default SongsContainer;

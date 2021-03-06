import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './youtube.scss';

class Youtube extends Component {

  render() {
    const opts = {
      height: '390',
      width: '640',
      margin: '1rem',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    const { videoId } = this.props;
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
        SameSite="Strict"
      />
    );
  }
}

export default Youtube;

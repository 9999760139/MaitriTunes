import React from 'react'
import ReactPlayer from 'react-player'
import Plyr from 'plyr';

const player = new Plyr('#player');
export default function Video() {
    return (
        <div>
            <ReactPlayer controls
                url="https://www.twitch.tv/eljayem_"
                playbackRates={[0.5, 1, 1.5, 2.5]}
            />
            <br />
            <iframe src="https://www.youtube.com/embed/-0WPrmtJKO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            
            <video controls id="player" crossorigin playinline />

            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
            type="video/mp4"
            size="576"
            />

        </div>
    )
}

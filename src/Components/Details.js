import React from 'react';
import './Details.css';
import Subscribe from './Subscribe';
import Music from './Music';
import Trending from './Trending';
import Footer from './Footer';
import Video from './Video';

export default function DetailPage(props) {
    // console.log(props);
    return (
        <div className="details">
            {/* <Header /> */}
            <Music music={props.detail.music} />
            <Video />
            <Trending trending={props.detail.trending} />
            <Subscribe subscribe={props.detail.subscribe} />
            <Footer footer={props.detail.footer} />
        </div >
    )
}

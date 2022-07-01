import React from 'react';
import './Home.css';
import Banner from './Banner';
import Footer from './Footer';
import TheLatestArticles from './TheLatestArticles';
import BestSeller from './BestSeller';
import Subscribe from './Subscribe';
import Trending from './Trending';
import Banner1 from './Banner1';

export default function Home(props) {
    // console.log(props);

    // console.log(props.home.id);
    return (
        <div className='home'>
            <Banner1 className="banner"/>
            <Trending trending={props.home.trending}/>
            <TheLatestArticles className="latestarticles" latestarticle={props.home.latestarticle1} />
            <BestSeller className="bestseller" bestseller={props.home.bestseller} />
            
            <TheLatestArticles className="latestarticles" latestarticle={props.home.latestarticle2} />
            <Subscribe subscribe={props.home.subscribe} />
            <Footer footer={props.home.footer} />
        </div>
    )
}

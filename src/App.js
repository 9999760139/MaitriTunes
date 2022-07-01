import React from 'react'
import './App.css';
import DetailPage from './Components/Details';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Banner from './Components/Banner';
import Banner1 from './Components/Banner1';
import Audio from './Components/Audio';
import LinearWithValueLabel from './Components/Audio';
import LinearDeterminate from './Components/Audio';

const data = {
  home: {
    id: "home",
    banner: [],

    trending: {
      header: {
        heading: "TO DAYS TRENDING",
        btntext: "View all",
      },
      content: [
        {
          imgpath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          time: "",
          name: "Shekhar Sir",
          heading: "this is heading pread group of squamateread group of squ reptiles, with over 6,00 ikuj",
        },
        {
          imgpath: "https://www.w3schools.com/w3images/lights.jpg",
          name: "Shekhar Sir",
          heading: " this is heading pread group of read group of squsquamate reptiles, with over 6,00 ikuj ",
          description: "Lizards are a widespread group of squamate reptiles, with over 6,00 ikuj aw hjlkf iu iosdf oion a ih sjhj flseefh fsdujpkj ffsdksdfdj cjshicvc  ib0odwh",
        },
        {
          imgpath: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
          name: "Shekhar Sir",
          heading: " this is heading pread group ofread group of squ squamate reptiles, with over 6,00 ikuj ",
          description: "Lizards are a widespread group of squamate reptiles, with over 6,00 ikuj aw hjlkf iu iosdf oion a ih sjhj flseefh fsdujpkj ffsdksdfdj cjshicvc  ib0odwh",
        },
      ],
    },
    latestarticle1: {
      header: {
        heading: "THE LATEST ARTICLES",
        btntext: "View all",
      },
      content : [
        {
          img_path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          heading: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment jjkjkjk lkj klp[s kljnl niti ",
          date: "13 dec",
          name: "Shekhar Sir",
          description: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment j",
        },
        {
          img_path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          heading: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Commentjjkjkjk lkj klp[s kljnl nitin ",
          date: "13 dec",
          name: "Shekhar Sir",
          description: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment",
        }, {
          img_path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          heading: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment",
          date: "13 dec",
          name: "Shekhar Sir",
          description: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment",
        },
      ],
    },
    bestseller: {
      header: {
        heading: "BEST SELLER OF THE MONTH",
        btntext: "View all",
      },
      content :[
      {
          imgpath:"https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
          heading:"What on your mind",
          description:"Lizards are a widespread group l continents except Antarctica",
          btntext:" Buy For $44",
      },
      {
          imgpath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          heading:"What on your mind",
          description:"Lizards are a widespread group l continents except Antarctica",
          btntext:" Buy For $44",
      },
      {
          imgpath:"https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
          heading:"What on your mind",
          description:"Lizards are a widespread group l continents except Antarctica",
          btntext:" Buy For $44",
      },
      {
          imgpath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          heading:"What on your mind",
          description:"Lizards are a widespread group l continents except Antarctica",
          btntext:" Buy For $44",
      },
    ]
    },
    latestarticle2 : {
      header: {
        heading: "THE LATEST PODCAST",
        btntext: "View all",
      },
      content : [
        {
          img_path: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
          heading: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment jjkjkjk lkj klp[s kljnl niti ",
          date: "13 dec",
          name: "Shekhar Sir",
          description: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment j",
        },
        {
          img_path: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
          heading: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Commentjjkjkjk lkj klp[s kljnl nitin ",
          date: "13 dec",
          name: "Shekhar Sir",
          description: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment",
        }, {
          img_path: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
          heading: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment",
          date: "13 dec",
          name: "Shekhar Sir",
          description: "Lizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Comment",
        },
      ],
    },
    subscribe: {
      heading: "SUBSCRIBE TO GET MORE",
      description: " Always specify both the height and width attributes for images. If height and width are set, the space required for the image is reserved when the page is loaded. However, without these attrib utes, the browser does not know the size of the image, and cannot reserve the appropriate space to it. The effect will be that the page layout will change during loading (while the images load).",
      btntext1: "Learn More",
      btntext2: "Buy Now for $32 (Monthly)"
    },
    footer: [
      {
        heading: "CONTENT",
        links1: "Blog",
        links2: "Poscast",
        links3: "Books",
        links4: "Subscription",
      },
      {
        heading: "COMPANY",
        links1: "About",
        links2: "Contact us",
        links3: "Podcast",
        links4: "Books",
      },
      {
        heading: "SOCIAL",
        links1: "Instagram",
        links2: "Facebook",
        links3: "Linkedin",
        links4: "Twitter",
      },
    ],
  },
  detail: {
    id: "detail",
    detailarticle: {
      name: "Shekhar Sir",
      imgpath: "",
      heading: "A Bizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Commentzardhow to change size to change size mat",

    },
    music:  {
      img_path: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
      heading: " A Bizardhow to change size material ui iconshtml by Precious Pig on Aug 17 2021 Commentzardhow to change size to change size mat",
      date: "13 dec",
      name: "Shekhar Sir",
      descript : {
        heading : "Description",
        description : " By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes. hkj <br>By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop.If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.By default, the ButtonUnstyled renders a native button element. You are free to override this by setting the component or components.Root prop. If a non-interactive element (such as a span) is provided this way, the ButtonUnstyled will take care of adding accessibility attributes.       "
      },
    },
    trending: {
      header: {
        heading: "MORE RELATED PODCASTS",
        btntext: "View all",
      },
      content: [
        {
          imgpath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          time: "",
          name: "Shekhar Sir",
          heading: "this is heading pread group of squamateread group of squ reptiles, with over 6,00 ikuj",
        },
        {
          imgpath: "https://www.w3schools.com/w3images/lights.jpg",
          name: "Shekhar Sir",
          heading: " this is heading pread group of read group of squsquamate reptiles, with over 6,00 ikuj ",
          description: "Lizards are a widespread group of squamate reptiles, with over 6,00 ikuj aw hjlkf iu iosdf oion a ih sjhj flseefh fsdujpkj ffsdksdfdj cjshicvc  ib0odwh",
        },
        {
          imgpath: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80",
          name: "Shekhar Sir",
          heading: " this is heading pread group ofread group of squ squamate reptiles, with over 6,00 ikuj ",
          description: "Lizards are a widespread group of squamate reptiles, with over 6,00 ikuj aw hjlkf iu iosdf oion a ih sjhj flseefh fsdujpkj ffsdksdfdj cjshicvc  ib0odwh",
        },
      ],
    },
    subscribe: {
      heading: "SUBSCRIBE TO GET MORE",
      description: " Always specify both the height and width attributes for images. If height and width are set, the space required for the image is reserved when the page is loaded. However, without these attributes, the browser does not know the size of the image, and cannot reserve the appropriate space to it. The effect will be that the page layout will change during loading (while the images load).",
      btntext1: "Learn More",
      btntext2: "Buy Now for $32 (Monthly)"
    },
    footer: [
      {
        heading: "CONTENT",
        links1: "Blog",
        links2: "Poscast",
        links3: "Books",
        links4: "Subscription",
      },
      {
        heading: "COMPANY",
        links1: "About",
        links2: "Contact us",
        links3: "Podcast",
        links4: "Books",
      },
      {
        heading: "SOCIAL",
        links1: "Instagram",
        links2: "Facebook",
        links3: "Linkedin",
        links4: "Twitter",
      },
    ],
  }
}

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        {/* <Banner1 /> */}
        {/* <Audio /> */}
        <Routes>
          <Route exact path="/home" element={<Home className="home" home={data.home} />} />
          <Route exact path="/detailpage" element={<DetailPage className="detailpage" detail={data.detail} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import static_image from '../src/assets/API_Static.svg';
import community_image from '../src/assets/API_Community.svg';
import video_image from '../src/assets/play-video-icon.svg';
import Button from 'styled-components';
import styled from 'styled-components';
import Header from './Components/Header/header'; //Include Heder
import Footer from './Components/Footer/footer'; //Include Footer

class App extends React.Component {

  render() {
    return (
      <div className="maincontainer">
        <Header></Header>
        <h1 className="mr-5 mt-5">Experience<br />
          <span>Open Banking</span></h1>
        <div className="container mb-5 mt-5">
          <p className="mr-6 mt-6">A connection to enable innovation via an open platform<br /> and APIs for developer communities</p>
        </div>
        <section class="featureMedium">
          <div class="col-sm-4 col-lg-6 defaultBoxes">
            <div class="picBox">
              <img src={static_image} alt=""></img>
            </div>
            <h2>Imagine what we could do <br /> together</h2>
            <div class="content"><p>Let's build the future of banking together to <br /> address our client needs across Asia, <br /> Africa, and the Middle East.</p></div>
            <a href="/apis?region=world">
              <button class="homePage__ExploreApiButton-sc-4qvmg-6 gElhun">Explore our APIs</button></a>
          </div>
          <div class="defaultBoxes">
            <div class="picBox">
              <img src={community_image} alt=""></img>
            </div>
            <h2>aXess prepares us for Open <br /> Banking</h2>
            <div class="content"><p>Learn how we are investing in our <br /> capabilities and community to build our <br /> Open Banking future.</p></div>
            <button class="homePage__WatchNowButton-sc-4qvmg-7 jqiryo">
              <img src={video_image} alt="Watch now" class="homePage__WatchNowImg-sc-4qvmg-8 iQdxoS"></img>
              <span class="homePage__WatchNow-sc-4qvmg-9 fgIzGg">Watch now</span>
            </button>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  };
}
export default App;
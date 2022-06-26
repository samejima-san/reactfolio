import React from "react";
import './Businesscard.css'
import twitterLogo from '../svg/twitter.svg';
import githubLogo from '../svg/github.svg';
import folderLogo from '../svg/folder.svg';
import twitchLogo from '../svg/twitch.svg';

const Businesscard = () => {
    return(
        <div>
            <h4>Where to find me</h4>
            <nav id="business-card-nav">
              <a href='/'><img src={folderLogo}/></a>
              <a href='https://github.com/samejima-san'><img src={githubLogo}/></a>
              <a href='https://twitter.com/saintthecoder'><img src={twitterLogo}/></a>
              <a href='https://twitter.com/saintthecoder'><img src={twitchLogo}/></a>
            </nav>
        </div>
    );
};

export default Businesscard;
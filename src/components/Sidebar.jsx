import React from "react";

import DownloadButton from "./DownloadButton";
import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass';
import SocialNetworks from "./SocialNetwork";
import InformationContent from "./InformationContent";
const MainContent = () => {

    return <aside id ="sidebar">
        <img src={Avatar} alt="Paulo Vinicius Mota"></img>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks/>
        <InformationContent/>
        <DownloadButton fileName="Paulo Vinicius Mota - Currículo.pdf"/>
    </aside>
}

export default MainContent;
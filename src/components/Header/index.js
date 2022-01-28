/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import NetflixLogo from "./images/Netflix-logo.png";
import Avatar from "./images/Avatar.png";
import "./styles.css";

export default ({black}) => {
    return(
        <header className={black ? "black" : ''}>
            <div className="header-logo">
                <a href="/" >
                    <img src= {NetflixLogo} alt="logo-netflix"/>
                </a>
                <div className="header-cabecalho">
                    <p className="header-opcoes">Início</p>
                    <p className="header-opcoes">Séries</p>
                    <p className="header-opcoes">Filmes</p>
                    <p className="header-opcoes">Bombando</p>
                    <p className="header-opcoes">Minha Lista</p>
                </div>
            </div>
            <div className="header-avatar">
                <a href="/" >
                    <img src= {Avatar} alt="avatar"/>
                </a>
            </div>

        </header>
    );
}
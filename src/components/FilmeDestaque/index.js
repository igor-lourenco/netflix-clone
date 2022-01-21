/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./styles.css";

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){ //pega o nome do generos que vem no objeto da requisição
        genres.push(item.genres[i].name);
    }


    return (
        <section className="featured" style = {{
            backgroundSize: "cover", /* pra imagem aparecer o maximo possivel da tela*/
            backgroundPosition: "center", /* pra ficar centralizada */ 
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">{item.original_name}</div>
                    <div className="featured-info">
                        <div className="featured-points">{item.vote_average} pontos</div>
                        <div className="featured-year">{firstDate.getFullYear()}</div>
                        <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>
                    </div>
                    <div className="featured-description">{item.overview}</div>
                    <div className="featured-buttons">
                        <a className="featured-watch-button" href={`/watch/${item.id}`}>► Assitir</a>
                        <a className="featured-mylist-button" href={`/watch/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featured-genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}
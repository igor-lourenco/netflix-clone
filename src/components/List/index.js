/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { ReactComponent as SetaEsquerda } from '../../images/Seta-esquerda.svg';
import { ReactComponent as SetaDireita } from '../../images/Seta-direita.svg';
import "./styles.css";

export default ({ title, items }) => {

    const[scrollx, setScroll] = useState(0)

    const handleSetaEsquerda = () => {
        let x = scrollx + Math.round(window.innerWidth / 2);  //pega a metade da tela
        if(x > 0){  //se chegar no começo
            x = 0;   // o valor recebe zero pra não ultrapasar o limite de rolagem
        }
        setScroll(x);
    }

    const handleSetaDireita = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let LarguraLista = items.results.length * 150;
        if((window.innerWidth - LarguraLista) > x ) {  //se a largura da tela menos a largura total da lista  for maior que a metade da tela do usuario
            x = window.innerWidth - LarguraLista - 60;
        }
        setScroll(x);
    }

    return (
        <>
            <div className="list-principal">
                <h2>{title}</h2>

                <div className="list-icon-left" onClick={handleSetaEsquerda}>
                    <SetaEsquerda/>
                </div>
                <div className="list-icon-right" onClick={handleSetaDireita}>
                    <SetaDireita />
                </div>
                <div className="list-area">
                    <div className="list-row" 
                    style={{
                         marginLeft: scrollx,
                         width: items.results.length * 150}}>
                        {items.results.length > 0 && items.results.map((item, key) => (/*se a lista for maior que zero*/
                            <div key={key} className="list-item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { ReactComponent as SetaEsquerda } from '../../images/Seta-esquerda.svg';
import { ReactComponent as SetaDireita } from '../../images/Seta-direita.svg';
import "./styles.css";

export default ({ title, items }) => {
    return (
        <>
            <div className="list-principal">
                <h2>{title}</h2>

                <div className="list-icon-left">
                    <SetaEsquerda/>
                </div>
                <div className="list-icon-right">
                    <SetaDireita />
                </div>
                <div className="list-area">
                    <div className="list-row">
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
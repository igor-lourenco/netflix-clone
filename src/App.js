import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb.js";
import List from "./components/List/index.js";
import FilmeDestaque from "./components/FilmeDestaque/index.js"
import "./App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null);

  useEffect(() => {

    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList(); // metodo para fazer a requisicao
      setMovieList(list);

      //pegando filme em destaque
      let originals = list.filter(i => i.slug === "originals"); // filtra apenas os que são originais netflix
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1)); //gera um numero aleatório de acordo com o tamanho do array da lista
      let filmeEscolhido = originals[0].items.results[random];  //pega o filme de acordo com numero aleatorio gerado
      let info = await Tmdb.getMovieInfo(filmeEscolhido.id, "tv"); //pega mais informações sobre o filme escolhido
      setFeatureData(info);

      console.log(info);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {
        featuredData &&
        <FilmeDestaque item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <List key={key} title={item.title} items={item.items} />
        ))}
      </section>

    </div>
  );
}

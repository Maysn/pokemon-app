import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import api from "../../utils/api";
import { receivedDisplayedCardsData } from "Store/pokemonList/pokemonListReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
// import zed from "../../assets/zed.png";

function Cards({ pokimone }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const pokimonesList = useSelector((state) => state.pokemonList.list?.results);
  const pokemone = useSelector((state) => state.pokemonList.displayedCardsData);

  useEffect(() => {
    theDataa(page);
  }, [page]);

  async function displayedPokemonsData(pokemonNum) {
    const pokemonsData = await api.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`
    );
    return pokemonsData;
  }
  async function theDataa(page) {
    const theFokinData = await Promise.all([
      displayedPokemonsData(page * 4 + 1),
      displayedPokemonsData(page * 4 + 2),
      displayedPokemonsData(page * 4 + 3),
      displayedPokemonsData(page * 4 + 4),
    ]);
    console.log(dispatch(receivedDisplayedCardsData(theFokinData)));
  }

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: false,
    beforeChange: (previousPage, page) => {
      setPage(() => (previousPage += 1));
      console.log(page);
    },
  };

  return (
    <div className="slider_container">
      <Slider {...settings}>
        {pokemone?.map((item) => (
          <div className="card" draggable key={item.name}>
            {item.name}
            <img
              style={{ height: "100px", width: "100px" }}
              src={item?.sprites.other.dream_world.front_default}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Cards;

import React from "react";
import Carousel from "react-material-ui-carousel";
import SliderItem from "../components/SliderItem";

const Slider = ({ games }) => {
  return (
    <Carousel sx={{ height: "auto" }}>
      {games.map((game) => (
        <SliderItem
          key={game.name}
          id={game.id}
          title={game.name}
          imageUrl={game.background_image}
          rating={game.rating}
          platforms={game.platforms}
        />
      ))}
    </Carousel>
  );
};

export default Slider;

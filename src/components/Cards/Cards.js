import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { CardGrid } from "@vkontakte/vkui";

import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import { getCards } from "../../actions/index";
import Context from '../App/context';

const Cards = ({ columnId }) => {
  const {cards, setCards} = useContext(Context);

  // Запрос к БД
  useEffect(() => {
    getCards(columnId).then(setCards);
  }, []);

  return (
    <CardGrid>
      {cards.map(({ id, name }) => (
        <ColumnCard key={id} id={id}>
          {name}
        </ColumnCard>
      ))}
      <CardCreate columnId={columnId} />
    </CardGrid>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;

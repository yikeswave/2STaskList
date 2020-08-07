import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CardGrid } from "@vkontakte/vkui";

import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import { getCards } from "../../actions/index";

const Cards = ({ columnId }) => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);
  const removeCard = (removeId) =>
    setCards(cards.filter(({ id }) => id !== removeId));
  // Запрос к БД
  useEffect(() => {
    getCards(columnId).then(setCards);
  }, []);

  return (
    <CardGrid>
      {cards.map(({ id, name }) => (
        <ColumnCard key={id} id={id} onDelete={removeCard}>
          {name}
        </ColumnCard>
      ))}
      <CardCreate columnId={columnId} onCreate={addCard} />
    </CardGrid>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;

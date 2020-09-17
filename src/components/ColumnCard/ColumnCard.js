import React from "react";
import PropTypes from "prop-types";
import { Div, Card } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import "./ColumnCard.css";
import { deleteCard } from "../../actions/index";
import { removeCard } from "../../actions/actions";

const ColumnCard = ({ children, id }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    deleteCard(id)
      .then(() => dispatch(removeCard(id)))
      .catch(console.error);
  };

  return (
    <Card size="l" mode="outline">
      <Div className="ColumnCard__wrapper">{children}</Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColumnCard;

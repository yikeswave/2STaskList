import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Div, Card, Button } from "@vkontakte/vkui";

import "./ColumnCard.css";
import { deleteCard } from "../../actions/index";
import Context from "../App/context";

const ColumnCard = ({ children, id }) => {
  const { removeCard } = useContext(Context);

  const deleteItem = () => {
    deleteCard(id)
      .then(() => removeCard(id))
      .catch(console.error);
  };

  return (
    <Card size="l">
      <Div className="ColumnCard__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColumnCard;

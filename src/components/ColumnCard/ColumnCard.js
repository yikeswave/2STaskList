import React from "react";
import PropTypes from "prop-types";
import { Div, Card, Button } from "@vkontakte/vkui";
import firebase from 'firebase/app';

import "./ColumnCard.css";

const ColumnCard = ({ children, id, onDelete }) => {
  const deleteCard = () => {
    const db = firebase.firestore();

    db.collection("cards")
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card size="l">
      <Div className="ColumnCard__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteCard}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ColumnCard;

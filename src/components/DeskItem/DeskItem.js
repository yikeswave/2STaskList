import React from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";

import firebase from "firebase/app";

import "./DeskItem.css";

const DeskItem = ({ id, children, onDelete, onClick }) => {
  const deleteItem = () => {
    const db = firebase.firestore();

    db.collection("desks")
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };
  return (
    <Card size="l" onClick={onClick}>
      <Div className="DeskItem__content">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

DeskItem.propType = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DeskItem;

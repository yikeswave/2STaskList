import React from "react";
import PropTypes from "prop-types";
import { Div, Card, CardGrid, Header, Button } from "@vkontakte/vkui";
import firebase from "firebase/app";

import "./Column.css";
import ColumnCard from "./ColumnCard";

const Column = ({ name, id, onDelete }) => {
  const deleteColumn = () => {
    const db = firebase.firestore();

    db.collection("columns")
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header>{name}</Header>
        <Button mode="destructive" onClick={deleteColumn}>
          Удалить
        </Button>
      </div>
      <Card className="Column__wrapper">
        <CardGrid>
          <ColumnCard>Карточка</ColumnCard>
        </CardGrid>
      </Card>
    </Div>
  );
};

Column.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Column;

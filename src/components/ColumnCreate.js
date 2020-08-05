import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";

import "./Column.css";

import CreateForm from "./CreateForm";
import { Div } from "@vkontakte/vkui";

const ColumnCreate = ({ onCreate }) => {
  const createColumn = (name) => {
    const db = firebase.firestore();

    return db
      .collection("columns")
      .add({ name })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <CreateForm
        onSubmit={createColumn}
        placeholder="Введите название колонки"
        actionTitle="Создать колонку"
      />
    </Div>
  );
};

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default ColumnCreate;

import React, { Fragment, useEffect, useState } from "react";
import { PanelHeaderSimple, Gallery } from "@vkontakte/vkui";
import firebase from "firebase/app";

import "./Columns.css";

import Column from "./Column";
import ColumnCreate from "./ColumnCreate";

const Columns = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (column) => setColumns([...columns, column]);
  const removeColumn = (removeId) =>
    setColumns(columns.filter(({ id }) => id !== removeId));

  // Запрос к БД
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("columns")
      .get()
      .then((querySnapshot) => {
        const columns = [];
        querySnapshot.forEach((doc) => {
          const { deskId, name } = doc.data();
          columns.push({
            id: doc.id,
            deskId,
            name,
          });
        });

        setColumns(columns);
      });
  }, []);

  return (
    <Fragment>
      <PanelHeaderSimple>Доска</PanelHeaderSimple>

      <Gallery className="Columns__list" slideWidth="100%" align="center">
        {columns.map(({ id, name }) => (
          <Column key={id} name={name} id={id} onDelete={removeColumn} />
        ))}
        <ColumnCreate onCreate={addColumn} />
      </Gallery>
    </Fragment>
  );
};

export default Columns;

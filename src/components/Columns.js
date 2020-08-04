import React, { Fragment, useEffect, useState } from "react";
import { PanelHeaderSimple, Gallery } from "@vkontakte/vkui";
import firebase from "firebase/app";

import "./Columns.css";

import Column from "./Column";

const Columns = () => {
  const [columns, setColumns] = useState([]);

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

      {columns.length ? (
        <Gallery className="Columns__list" slideWidth="100%" align="center">
          {columns.map(({id}) => <Column key={id} />)}
        </Gallery>
      ) : null}
    </Fragment>
  );
};

export default Columns;

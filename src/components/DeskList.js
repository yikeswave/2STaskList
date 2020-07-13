import React, { useState, useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";
import firebase from "firebase/app";

import DeskItem from "./DeskItem";

const DeskList = () => {
  const [desks, setDesks] = useState([]);

  // Запрос к БД
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("desks")
      .get()
      .then((querySnapshot) => {
        const desks = [];
        querySnapshot.forEach((doc) => {
          desks.push({
            id: doc.id,
            name: doc.data().name,
          });
        });

        setDesks(desks);
      });
  }, []);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ name }) => (
        <DeskItem key={name}>{name}</DeskItem>
      ))}
    </CardGrid>
  );
};

export default DeskList;

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBrcjyS774cKX3kzmqkZ98ptDyr72WNmfE",
    authDomain: "stasklist-bb623.firebaseapp.com",
    databaseURL: "https://stasklist-bb623.firebaseio.com",
    projectId: "stasklist-bb623",
    storageBucket: "stasklist-bb623.appspot.com",
    messagingSenderId: "501606567637",
    appId: "1:501606567637:web:8e1428fe4dd398204e1c5c",
    measurementId: "G-TH8VCCTTHQ",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

export const apiCreateDesk = (name) => {
  const db = firebase.firestore();

  return db
    .collection("desks")
    .add({ name })
    .then((docRef) => docRef.get());
};

export const apiGetDesks = () => {
  const db = firebase.firestore();

  return db
    .collection("desks")
    .get()
    .then((querySnapshot) => {
      const desks = [];
      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      return desks;
    });
};

export const apiDeleteDesk = (id) => {
  const db = firebase.firestore();

  return db.collection("desks").doc(id).delete();
};

export const apiGetColumns = (deskId) => {
  const db = firebase.firestore();

  return db
    .collection("columns")
    .where("deskId", "==", deskId)
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

      return columns;
    });
};

export const apiDeleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection("columns").doc(id).delete();
};

export const apiGetCards = (columnId) => {
  const db = firebase.firestore();

  return db
    .collection("cards")
    .where("columnId", "==", columnId)
    .get()
    .then((querySnapshot) => {
      const cards = [];
      querySnapshot.forEach((doc) => {
        const { columnId, name } = doc.data();
        cards.push({
          id: doc.id,
          columnId,
          name,
        });
      });

      return cards;
    });
};

export const apiDeleteCard = (id) => {
  const db = firebase.firestore();

  return db.collection("cards").doc(id).delete();
};

export const apiCreateCard = (name, columnId) => {
  const db = firebase.firestore();

  return db
    .collection("cards")
    .add({ name, columnId })
    .then((docRef) => docRef.get());
};

export const apiCreateColumn = (name, deskId) => {
  const db = firebase.firestore();

  return db
    .collection("columns")
    .add({ name, deskId })
    .then((docRef) => docRef.get());
};

import * as actionType from "./types";
import * as api from "../api/index";

export const addCard = (card) => ({
  type: actionType.ADD_CARD,
  payload: { card },
});
export const removeCard = (removeId) => ({
  type: actionType.REMOVE_CARD,
  payload: { removeId },
});
export const setCards = (cards) => ({
  type: actionType.SET_CARDS,
  payload: { cards },
});

export const fetchCards = (columnId) => (dispatch) =>
  api
    .apiGetCards(columnId)
    .then((cards) => {
      dispatch({ type: "fetchCardsSuccess" });
      dispatch(setCards(cards));
    })
    .catch(() => dispatch({ type: "fetchCardsFail" }));

export const deleteCard = (id) => (dispatch) =>
  api
    .apiDeleteCard(id)
    .then(() => {
      dispatch({ type: "deleteCardSuccess" });
      dispatch(removeCard(id));
    })
    .catch(() => dispatch({ type: "deleteCardFail" }));

export const createCard = (name, id) => (dispatch) =>
  api
    .apiCreateCard(name, id)
    .then((doc) => {
      dispatch({ type: "createCardSuccess" });
      dispatch(addCard({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: "createCardFail" }));

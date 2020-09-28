import * as actionType from "./types";
import * as api from "../api/index";

export const addColumn = (column) => ({
  type: actionType.ADD_COLUMN,
  payload: { column },
});
export const removeColumn = (removeId) => ({
  type: actionType.REMOVE_COLUMN,
  payload: { removeId },
});
export const setColumns = (columns) => ({
  type: actionType.SET_COLUMNS,
  payload: { columns },
});

export const fetchColumns = (deskId) => (dispatch, getState) => {
  const desks = getState().desks;
  const desk = desks.find(({ id }) => id === deskId) || {};

  if (desk.id) {
    return api
      .apiGetColumns(desk.id)
      .then((columns) => {
        dispatch({ type: "fetchColumnsSuccess" });
        dispatch(setColumns(columns));
      })
      .catch(() => dispatch({ type: "fetchColumnsFail" }));
  }
};

export const deleteColumn = (id) => (dispatch) =>
  api
    .apiDeleteColumn(id)
    .then(() => {
      dispatch({ type: "deleteColumnSuccess" });
      dispatch(removeColumn(id));
    })
    .catch(() => dispatch({ type: "deleteColumnFail" }));

export const createColumn = (name, id) => (dispatch) =>
  api
    .apiCreateColumn(name, id)
    .then((doc) => {
      dispatch({ type: "createColumnSuccess" });
      dispatch(addColumn({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: "createColumnFail" }));

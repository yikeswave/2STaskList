import * as actionType from "./types";
import * as api from "../api/index";

export const addDesk = (desk) => ({
  type: actionType.ADD_DESK,
  payload: { desk },
});
export const removeDesk = (removeId) => ({
  type: actionType.REMOVE_DESK,
  payload: { removeId },
});
export const setDesks = (desks) => ({
  type: actionType.SET_DESKS,
  payload: { desks },
});

export const fetchDesks = () => (dispatch) =>
  api
    .apiGetDesks()
    .then((desks) => {
      dispatch({ type: "fetchDesksSuccess" });
      dispatch(setDesks(desks));
    })
    .catch(() => dispatch({ type: "fetchDesksFail" }));

export const deleteDesk = (id) => (dispatch) =>
  api
    .apiDeleteDesk(id)
    .then(() => {
      dispatch({ type: "deleteDeskSuccess" });
      dispatch(removeDesk(id));
    })
    .catch(() => dispatch({ type: "deleteDeskFail" }));

export const createDesk = (name) => (dispatch) =>
  api
    .apiCreateDesk(name)
    .then((doc) => {
      dispatch({ type: "createDeskSuccess" });
      dispatch(addDesk({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: "createDeskFail" }));

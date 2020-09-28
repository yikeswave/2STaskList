import * as actionType from "../actions/types";

const initialState = {
  desks: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_DESK: {
      const { desk } = payload;
      const desks = [...state.desks, desk];

      return {
        ...state,
        desks,
      };
    }

    case actionType.SET_DESKS: {
      const { desks } = payload;

      return {
        ...state,
        desks,
      };
    }

    case actionType.REMOVE_DESK: {
      const { removeId } = payload;
      const desks = state.desks.filter(({ id }) => id !== removeId);

      return {
        ...state,
        desks,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

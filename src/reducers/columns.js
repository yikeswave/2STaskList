import * as actionType from "../actions/types";

const initialState = {
  columns: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_COLUMN: {
      const { column } = payload;
      const columns = [...state.columns, column];

      return {
        ...state,
        columns,
      };
    }

    case actionType.SET_COLUMNS: {
      const { columns } = payload;

      return {
        ...state,
        columns,
      };
    }

    case actionType.REMOVE_COLUMN: {
      const { removeId } = payload;
      const columns = state.columns.filter(({ id }) => id !== removeId);

      return {
        ...state,
        columns,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

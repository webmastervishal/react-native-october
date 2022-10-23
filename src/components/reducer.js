const initialState = {
  currencies: [],
};

const Reducer = (state = initialState, action) => {
  //const action = {type: "", payload}

  switch (action.type) {
    case "STORE_CURRENCIES":
      return {
        currencies: [...action.payload],
      };
    default:
      return state;
  }
};

export default Reducer;

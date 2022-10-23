export const fetchCurrencies = (url) => {
  return async (dispatch) => {
    const result = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpc2hhbEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IndlYm1hc3RlciIsImlhdCI6MTY2NjQ5NDEzOCwiZXhwIjoxNjY2NTgwNTM4fQ.iha70yH7gU7EorS3zGQ5ixIuvVF3nPuDfEnaRJewdDE",
      },
    });

    const data = await result.json();
    dispatch(storeCurrencies(data));
  };
};

export const storeCurrencies = (payload) => {
  return {
    type: "STORE_CURRENCIES",
    payload,
  };
};

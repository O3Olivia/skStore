import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }
  if (action.type === "SUCCESS") {
    return {
      data: action.resData,
      error: null,
      status: "completed",
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }
  return state;
}

function useHttp(requestFn, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(
    async function (reqData) {
      dispatch({ type: "SEND" });
      try {
        const resData = await requestFn(reqData);
        dispatch({ type: "SUCCESS", resData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "에러발생!",
        });
      }
    },
    [requestFn]
  );
  return {
    sendRequest,
    ...httpState,
  };
}
export default useHttp;

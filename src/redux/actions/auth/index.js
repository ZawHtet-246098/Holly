// ** Handle User Login
export const handleLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN",
      data,
    });

    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem(JSON.stringify(data.accessToken));
  };
};

export const getAllData = () => {
  return async (dispatch, getState) => {
    const state = getState().admins;
    const authData = getState().auth;
    dispatch({
      type: "START_LOADING",
    });
    await fetch(
      `https://sms-b.cbs.com.mm/v1/subscriptions?entriesPerPage=$10&page=0&search=&status=`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authData?.accessToken || state?.token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json?.success) {
          dispatch({
            type: "GET_ALL_DATA",
            data: json.subscriptions,
            total: json.total_results,
            found_results: json.found_results,
            entries_per_page: json.entries_per_page,
            total_results: json.total_results,
          });
        } else {
          if (json?.errCode == "401") {
            dispatch({
              type: "TOKEN_EXPIRE",
            });
          } else {
            dispatch({
              type: "GET_ERROR",
              error: json?.msg || json?.message,
            });
          }
        }
      })
      .then(() => {
        dispatch({
          type: "END_LOADING",
        });
      });
  };
};

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    const usermail = JSON.parse(localStorage.getItem("userData"))?.email;
    localStorage.clear();
    localStorage.removeItem("userData");
    localStorage.setItem("userMail", usermail);
  };
};

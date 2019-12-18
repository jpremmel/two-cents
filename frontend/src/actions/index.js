
export const attemptLogin = (credentials) => {
  return (dispatch) => {
    console.log(credentials);
    return fetch(`http://localhost:5000/api/Users/authenticate`).then(
      response => response.json(),
      error => console.log('Error occurred', error)
    ).then(function (json) {
      if (json.error) {
        console.log('Error code: ', json.error.code);
        console.log('Error message: ', json.error.message);
        //dispatch something?
      } else {
        console.log('RESPONSE:', json);
        dispatch({ type: 'LOG_IN' });
      }
    }, error => {
      console.log('Error occurred', error);
      //dispatch something?
    });
  };
}

export const login = user => ({
  type: 'LOG_IN',
  user
});

export const logout = () => ({
  type: 'LOG_OUT'
});
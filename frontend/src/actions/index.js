import ApiHelper from './ApiHelper';

const api = new ApiHelper();

export const attemptLogin = (credentials) => {
  return (dispatch) => {
    console.log(credentials);
    return api.apiAttemptLogin(credentials).then(response => {
        let parsedResponse = JSON.parse(response);
        console.log('JSON RESPONSE: ', parsedResponse);
        return parsedResponse;
      }, error => console.log('Error occurred', error))
      .then(parsedResponse => {
        console.log(parsedResponse);
        dispatch(login(parsedResponse));
    }, error => {
      console.log('Error occurred', error);
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
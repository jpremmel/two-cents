import ApiHelper from './ApiHelper';
const api = new ApiHelper();

export const attemptLogin = (credentials) => {
  return dispatch => {
    console.log(credentials);
    return api.apiAttemptLogin(credentials).then(response => {
      let parsedResponse = JSON.parse(response);
      console.log('JSON RESPONSE: ', parsedResponse);
      return parsedResponse;
    }, error => console.log('Error occurred:', error))
      .then(parsedResponse => {
        console.log(parsedResponse);
        dispatch(login(parsedResponse));
      }, error => {
        console.log('Error occurred:', error);
      });
  };
};

export const login = user => ({
  type: 'LOG_IN',
  user
});

export const logout = () => ({
  type: 'LOG_OUT'
});

export const createUser = (newUser) => {
  return dispatch => {
    console.log(newUser);
    return api.apiCreateNewUser(newUser).then(response => {
      //dispatch something?
      return response;
    }, error => console.log('Error occurred:', error))
      .then(response => {
        console.log(response);
      }, error => {
        console.log('Error occurred:', error);
      });
  };
};
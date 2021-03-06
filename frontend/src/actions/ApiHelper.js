export default class ApiHelper {

  apiCreateNewUser(newUser) {
    return new Promise((resolve, reject) => {
      let url = 'http://localhost:5000/api/Users/create';
      let request = new XMLHttpRequest();
      let body = JSON.stringify(newUser);
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.send(body);
    });
  }

  apiAttemptLogin(credentials) {
    return new Promise((resolve, reject) => {
      let url = 'http://localhost:5000/api/Users/authenticate';
      let request = new XMLHttpRequest();
      let body = JSON.stringify(credentials);
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.send(body);
    });
  }

}
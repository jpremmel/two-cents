export default class ApiHelper {

    apiAttemptLogin(credentials) {
        return new Promise(function(resolve, reject) {
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
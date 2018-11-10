import { checkResponseLogin } from '../response/checkResponse';

class Authorization {

    static register = (user) => {
        return fetch("http://localhost:8080/api/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json());
    }

    static login = (user) => {
        return fetch("http://localhost:8080/api/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then( item => checkResponseLogin(item) );
    }
}

export default Authorization;
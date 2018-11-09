class Authorization {

    static addUser = (user) => {
        return fetch("http://localhost:8080/api/user/adduser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
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
            .then( token => window.localStorage.setItem('auth', token) );
    }
}

export default Authorization;
class Authorization {

    static addUser = (user) => {
        return fetch(/* fetchURL  ,*/ {
         method: "POST",
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
        })
        .then(response => response.json())
    }

}

export default Authorization;
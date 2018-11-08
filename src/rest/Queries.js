class Queries {

    static runQuery = (query) => {
        const packageJson = { query: query };
        return fetch(/* fetchURL  ,*/ {
         method: "POST",
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(packageJson)
        })
        .then(response => response.json())
    }

}

export default Queries;
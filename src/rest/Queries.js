class Queries {

    static runQuery = (query) => {
        const packageJson = {
            query: query
        };
        return fetch("http://localhost:8080/api/queries/execute", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(packageJson)
        })
            .then(response => response.json())
    }

    static runNotSafeQuery = (query) => {
        return fetch("http://localhost:8080/api/queries/notSafeExecute/" + query, {
            method: "GET"
        })
            .then(response => response.json())
    }

    static runSafeQuery = (query) => {
        return fetch("http://localhost:8080/api/queries/safeExecute/" + query, {
            method: "GET"
        })
            .then(response => response.json())
    }
}

export default Queries;
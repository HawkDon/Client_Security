class Queries {

    static runQuery = (query, table) => {
        const packageJson = {
            query: query,
            table: table
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

}

export default Queries;
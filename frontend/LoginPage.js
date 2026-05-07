async function loginUser(credentials) {

    const response = await fetch("/api/auth/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sample-token"
        },

        body: JSON.stringify(credentials)
    });

    return response.json();
}
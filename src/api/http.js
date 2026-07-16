export async function request(url, options = {}) {

    const response = await fetch(url, {

        headers: {
            "Content-Type": "application/json"
        },

        ...options

    });

    const data = await response.json();

    return data;

}
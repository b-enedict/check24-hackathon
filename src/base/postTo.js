/**
 * Poste Daten an einen Endpunkt
 * @param {string} url
 * @param {string} apiKey
 * @param payload - optional
 * @returns {Promise<any>}
 */

export async function postTo(url, apiKey, payload = undefined) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
    })

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}
export default async function api(url) {
    const response = await fetch(`http://localhost:4000${url}`)
    if (!response.ok) throw new Error("Api error")
    return await response.json()
}
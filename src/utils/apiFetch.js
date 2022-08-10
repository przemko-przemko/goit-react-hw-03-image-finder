const apiFetch = (url) =>{
    return fetch(url)
    .then(data => data.json())
}
export {apiFetch }
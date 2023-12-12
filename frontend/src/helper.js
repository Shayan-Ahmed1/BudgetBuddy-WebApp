
// local Storage (Will be replace by fetch API)
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
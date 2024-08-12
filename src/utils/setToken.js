export function setToken(tokenKey, token) {
    debugger;
    localStorage.setItem(tokenKey, token);
}

export function getToken(tokenKey) {
    return localStorage.getItem(tokenKey);
}

export function removeToken(tokenKey) {
    return localStorage.removeItem(tokenKey);
}
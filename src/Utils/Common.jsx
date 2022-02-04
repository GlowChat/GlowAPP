import axios from "axios"

export const getToken = () => {
    try {
        return sessionStorage.getItem("token")
    } catch (error) {
        return error
    }
    
}
export const api = axios.create({
    baseURL: "https://api.glowapp.eu/api"
})
export const getUser = () => {
    try {
        return api.get("/auth/account", {
            headers: {
                "authorization": 'Bearer ' + sessionStorage.getItem("token")
            }
        })
    } catch (error) {
        return error
    }
}
export const setUserSession = (token) => {
    try {
        sessionStorage.setItem("token", token)
    } catch (error) {
        return error
    }
    
}
export const removeUserSession = () => {
    sessionStorage.removeItem("token")
}
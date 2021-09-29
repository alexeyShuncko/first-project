import  axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b9502992-62db-40fc-88c9-2db6ee50380d'
    }
})

export const getUser = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const getFollow = (u) => {
    return instance.post(`follow/${u.id}`)
    .then(response => response.data)
}
export const getUnFollow = (u) => {
    return instance.delete(`follow/${u.id}`)
    .then(response => response.data)
}
export const getAuth = () => {
    return instance.get(`auth/me`)
        .then(response => response.data)
}
export const getProfile = (userId) => {
    return instance.get(`profile/`+userId)
        .then(response => response.data)
}

export const getStatus = (userId) => {
    return instance.get(`profile/status/`+userId)
        .then(response => response.data)
}
export const updateStatus = (status) => {
    return instance.put(`profile/status`,{status: status})
        .then(response => response.data)
}
export const getLogin = (email,password,rememberMe) => {
    return instance.post(`/auth/login`,{
        email: email,
        password: password,
        rememberMe: rememberMe
    })
    .then(response => response.data)
}
export const getLogout = () => {
    return instance.delete(`/auth/login`)
    .then(response => response.data)
}

export const savePhotoProfile = (photoFile) => {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, 
    {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    )
        .then(response => response.data)
}





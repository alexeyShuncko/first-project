import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'c757c3d6-4b51-4fca-8dce-7b995025f597',
  },
});

export const getUser = async (currentPage, pageSize) => {
  const response = await instance.get(
    `users?page=${currentPage}&count=${pageSize}`
  );
  return response.data;
};

export const getFollow = async (id) => {
  const response = await instance.post(`follow/${id}`);
  return response.data;
};
export const getUnFollow = async (id) => {
  const response = await instance.delete(`follow/${id}`);
  return response.data;
};
export const getAuth = async () => {
  const response = await instance.get(`auth/me`);
  return response.data;
};
export const getProfile = async (userId) => {
  const response = await instance.get(`profile/${userId}`);
  return response.data;
};

export const getStatus = async (userId) => {
  const response = await instance.get(`profile/status/` + userId);
  return response.data;
};
export const updateStatus = async (status) => {
  const response = await instance.put(`profile/status`, { status: status });
  return response.data;
};
export const getLogin = async (email, password, rememberMe, captcha) => {
  const response = await instance.post(`/auth/login`, {
    email: email,
    password: password,
    rememberMe: rememberMe,
    captcha: captcha,
  });
  return response.data;
};
export const getLogout = async () => {
  const response = await instance.delete(`/auth/login`);
  return response.data;
};

export const savePhotoProfile = async (photoFile) => {
  const formData = new FormData();
  formData.append('image', photoFile);
  const response = await instance.put(`profile/photo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateProfile = async (profile) => {
  const response = await instance.put(`profile`, profile);
  return response.data;
};
export const getCaptchaURL = async () => {
  const response = await instance.get(`security/get-captcha-url`);
  return response.data;
};

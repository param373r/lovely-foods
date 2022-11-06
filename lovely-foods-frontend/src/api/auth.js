import runAPI from './runAPI';


// Function to login
export const loginAPI = async (email, password) => {
  return await runAPI('/user/login', '', {email, password});
}

export const logoutAPI = async (token) => {
  return await runAPI('/user/logout', token);
}
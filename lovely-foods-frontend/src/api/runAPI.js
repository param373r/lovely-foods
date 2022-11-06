export const hostUrl = 'https://lovely-foods.herokuapp.com';


// Function to run APIs
const runAPI = async (url, token='', body={}) => {
  const apiUrl = new URL(`${hostUrl}${url}`);
  return await fetch(apiUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body),
  }).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return "Error";
    }
  });
}

export default runAPI;
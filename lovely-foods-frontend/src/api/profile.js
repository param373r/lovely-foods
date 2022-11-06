import runAPI from "./runAPI";

export const getFavShopsAPI = async (token) => {
  return await runAPI("/favShop/readShops", token);
}

export const getShopByIdAPI = async (shopId) => {
  return await runAPI("/shop/shopDetails", '', {_id: shopId});
}
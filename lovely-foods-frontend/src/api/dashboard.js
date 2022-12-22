import runAPI from './runAPI'


export const getShopsAPI = async () => {
    return await runAPI('/shop/readShops');
}

export const getFoodsAPI = async() => {
    return await runAPI('/food/readFoods');
}
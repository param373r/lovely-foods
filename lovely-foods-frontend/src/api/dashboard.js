import runAPI from './runAPI'


export const getShopsAPI = async () => {
    return await runAPI('/shop/readShops');
}
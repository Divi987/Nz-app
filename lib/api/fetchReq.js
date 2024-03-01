import authAxios from "./request"

export const fetchItemDetails = async (id) => {
    const response = await authAxios().get(`${id}`).then((res) => res.data).catch((err) => err);
    return response;
}
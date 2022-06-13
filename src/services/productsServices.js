const API_URL = 'https://api.mercadolibre.com';
const LIMIT = 4;

export const getProductsByTerm = async (term) => {
    const url = `${API_URL}/sites/MLA/search?q=${encodeURI(term)}&limit=${LIMIT}`;
    const resp = await fetch(url);
    return await resp.json();
};

export const getProductByID = async (pid) => {
    const url = `${API_URL}/items/${pid}`;
    const resp = await fetch(url);
    return await resp.json();
};

export const getDescriptionByID = async (pid) => {
    const url = `${API_URL}/items/${pid}/description`;
    const resp = await fetch(url);
    return await resp.json();
};

export const getCategoryByID = async (cid) => {
    const url = `${API_URL}/categories/${cid}`;
    const resp = await fetch(url);
    return await resp.json();
};

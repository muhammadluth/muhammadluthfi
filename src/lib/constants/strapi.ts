export const STRAPI_API_BASE_URL = process.env.STRAPI_API_BASE_URL
export const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN
export const getImage = (img: string) => `${STRAPI_API_BASE_URL}${img}`
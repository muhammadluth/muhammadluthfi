import axios from "axios";
import { STRAPI_API_BASE_URL, STRAPI_API_TOKEN } from '@/lib/constants/strapi'



export const getProjects = async (limit: number, page: number) => {
    const response = await axios.get(`${STRAPI_API_BASE_URL}/api/projects?populate[images][fields][1]=url&pagination[pageSize]=${limit}&pagination[page]=${page}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
    });

    const status: number = response.status;
    const responseBody = response.data;
    if (status > 400) {
        return { status, data: {} };
    }
    return { status, meta: responseBody.meta, data: responseBody.data };
}


export const getProjectsByID = async (id: number) => {
    const response = await axios.get(`${STRAPI_API_BASE_URL}/api/projects/${id}?populate[images][fields][1]=url`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
    });

    const status: number = response.status;
    const responseBody = response.data;
    if (status > 400) {
        return { status, data: {} };
    }
    return { status, meta: responseBody.meta, data: responseBody.data };
}

import { STRAPI_API_BASE_URL, STRAPI_API_TOKEN } from '@/lib/constants/strapi'


export const getProjects = async (limit: number, page: number) => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 3600 }
    };
    const response = await fetch(`${STRAPI_API_BASE_URL}/api/projects?populate[images][fields][1]=url&pagination[pageSize]=${limit}&pagination[page]=${page}`, options);
    const status: number = await response.status;
    const responseBody = await response.json();
    if (status > 400) {
        return { status, data: {} };
    }
    return { status, meta: responseBody.meta, data: responseBody.data };
}


export const getProjectsByID = async (id: number) => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 3600 }
    };
    const response = await fetch(`${STRAPI_API_BASE_URL}/api/projects/${id}?populate[images][fields][1]=url`, options);
    const status: number = await response.status;
    const responseBody = await response.json();
    if (status > 400) {
        return { status, data: {} };
    }
    return { status, meta: responseBody.meta, data: responseBody.data };
}


export const getCareers = async () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 3600 }
    };
    const response = await fetch(`${STRAPI_API_BASE_URL}/api/careers?populate[company_logo][fields][1]=url&sort[1]=end_period:desc`, options);
    const status: number = await response.status;
    const responseBody = await response.json();
    if (status > 400) {
        return { status, data: {} };
    }
    return { status, meta: responseBody.meta, data: responseBody.data };
}


export const getEducations = async () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 3600 }
    };
    const response = await fetch(`${STRAPI_API_BASE_URL}/api/educations?populate[school_logo][fields][1]=url&sort[1]=end_period:desc`, options);
    const status: number = await response.status;
    const responseBody = await response.json();
    if (status > 400) {
        return { status, data: {} };
    }
    return { status, meta: responseBody.meta, data: responseBody.data };
}

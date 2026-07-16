import { API } from "../api/endpoints.js";
import { request } from "../api/http.js";

export async function getActivities() {
    return await request(API.ACTIVITIES);
}

export async function getJourneys() {
    return await request(API.JOURNEYS);
}

export async function getGroupTypes() {
    return await request(API.GROUP_TYPES);
}
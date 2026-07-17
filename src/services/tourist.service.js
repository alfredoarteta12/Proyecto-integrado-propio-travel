import { API } from "../api/endpoints.js";
import { request } from "../api/http.js";

export async function getPromotions() {
    return await request(API.PROMOTIONS);
}
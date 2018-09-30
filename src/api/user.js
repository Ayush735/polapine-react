import { getRequest, postRequest, patchRequest, deleteRequest,putRequest } from "./helper"

export const getSignInUser = (data) => getRequest(`login`, data);

export const signInUser = (data) => postRequest(`login`, data);

export const signUpUser = (data) => postRequest(`users`, data);



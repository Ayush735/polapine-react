import axios from "axios"
import { appConstants } from '../_constants';
export const request = (path, data, method) => {  
  if(localStorage.getItem("sessionToken") !== undefined){
      return axios({
        method: method,
        url: `${appConstants.WEB_SERVICE_URL}/${path}`,
          headers: {
            "X-Parse-Application-Id": appConstants.APPLICATION_Id,
            "X-Parse-REST-API-Key": appConstants.REST_API_KEY,
            "X-Parse-Session-Token": localStorage.getItem("sessionToken")
          },
        data: data  
      })
  }
}

export const getRequest = (path, data) => request(path, data, "GET")
export const postRequest = (path, data) => request(path, data, "POST")
export const patchRequest = (path, data) => request(path, data, "PATCH")
export const deleteRequest = (path, data) => request(path, data, "DELETE")
export const putRequest = (path, data) => request(path, data, "PUT")
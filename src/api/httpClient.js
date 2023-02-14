import axios from "axios";


axios.defaults.baseURL = "https://63e877d24f3c6aa6e7be65ca.mockapi.io/api/v1/";
axios.defaults.headers.post['Content-Type'] = 'application/json; charset =utf-8';
axios.defaults.headers.put['Content-Type'] = 'application/json; charset =utf-8';


const errorHandler = (Err) => {
    // api exception
}


const doWrappedOPeration = (operation, urlPath, data = null) => operation(urlPath, data).catch(errorHandler);

export const postData = (urlPath, account) => doWrappedOPeration(axios.post, urlPath, account);
export const deleteData = urlPath => doWrappedOPeration(axios.delete, urlPath);
export const putData = (urlPath, account) => doWrappedOPeration(axios.put, urlPath, account);
export const getData = urlPath => doWrappedOPeration(axios.get, urlPath);
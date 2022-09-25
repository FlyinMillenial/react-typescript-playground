import axios from "axios"

const getRandomUsers = async (resultCount:number) => {
    return axios.get(`https://randomuser.me/api/?results=${resultCount}`)
        .catch((error) => {
            return error;
        })
        .then((data) => {
            return data.data;
        })
}

const getRandomUsersFetch = async (resultCount:number) => {
    return fetch(`https://randomuser.me/api/?results=${resultCount}`)
        .then((response) => response.json())
        .then((payload) => payload);
}

export { getRandomUsers, getRandomUsersFetch }
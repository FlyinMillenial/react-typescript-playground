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

export { getRandomUsers }
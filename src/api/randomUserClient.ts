import axios from "axios"

const getRandomUsers = async () => {
    return axios.get('https://randomuser.me/api/?results=100')
        .catch((error) => {
            return error;
        })
        .then((data) => {
            return data.data;
        })
}

export { getRandomUsers }
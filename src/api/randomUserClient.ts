import axios from "axios"

interface RandomUserResults {
    results: Array<any>
}

const getRandomUsers = async () => {
    return axios.get('https://randomuser.me/api/?results=20')
        .catch((error) => {
            return error;
        })
        .then((data) => {
            return data.data;
        })
}

export { getRandomUsers }
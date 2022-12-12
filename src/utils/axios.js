import axios from 'axios'

const apiClientInstance = axios.create({
    timeout: 60000,
})

export default apiClientInstance
import axios from 'axios'


const baseURL ='https://localshost:3000/api/'


const AXIOS_API=axios.create({
    baseURL
})

export default AXIOS_API
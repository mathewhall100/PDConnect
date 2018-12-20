import axios from "axios"

export default {

    findByLogin: function(info) {
        console.log("Axios call made to '/api/login' to 'find by login' ", info)
        return axios.post("/api/login", info)
    },

} // end of export default
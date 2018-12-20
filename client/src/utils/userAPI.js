import axios from "axios"

export default {

    fetchAll: function() {
        console.log("Axios call made to '/api/user' to 'fetch all' ")
        return axios.get("/api/user")
    },

    findById: function(id) {
        console.log("Axios call made to '/api/user' to 'find by id' ", id)
        return axios.get("/api/user")
    },

    createUser: function(info) {
        console.log("Axios call made to '/api/user' to 'create' ")
        return axios.post("/api/user/create", info)
    }
   

} // end of export default
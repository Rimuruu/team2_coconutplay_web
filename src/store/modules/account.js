import axios from "axios";

const HOST = "http://localhost";
const PORT = 3000;

const state = {
    user :{
        token: "",
    }
};

const mutations = {
    setLogin(state,{user}){
        state.user = user;
    }
};

const actions = {
    async login({commit},{username,password}){
        console.log("log actions")
        try{
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    username : username,
                    password : password,
                }
              };
            axios.get(`${HOST}:${PORT}/login`,axiosConfig)
                .then(function (response){
                    console.log(response)
                    const user = {
                        token : response.data
                    }
                    commit("setLogin",{user});
                
            })
                .catch(function(error){
                    console.error(error);
                })

        }catch(e){
            console.error(e);
        }
    }
  
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

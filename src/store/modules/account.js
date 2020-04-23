import axios from "axios";

const HOST = "http://localhost";
const PORT = 3000;

const state = {
    user :{
        token: "",
        
    },
    info:{
        username:"d",
        email:"d",
        name:"d",
        surname:"d",
    },
    status:"",
};

const mutations = {
    setLogin(state,{user}){
        state.user = user;
    },
    setStatut(state,stat){
        state.status = stat;
    },
    setInfo(state,{info}){
        state.info = info;
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
            return axios.get(`${HOST}:${PORT}/login`,axiosConfig)
                .then(function (response){
                    console.log(response)
                    const user = {
                        token : response.data
                    }
                    commit("setLogin",{user});
                  
                
            })
                .catch(function(error){
                    console.error(error);
                    if(error.response.status==404)commit("setStatut","Le compte n'existe pas");
                  
                })

        }catch(e){
            console.error(e);
        }
    },

    async register({commit},{username,password,email,name,surname}){
        console.log("log actions")
        try{
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    username : username,
                    password : password,
                    email:email,
                    name:name,
                    surname:surname,
                    role:"user,"
                }
              };
            axios.post(`${HOST}:${PORT}/register`,null,axiosConfig)
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
    },
    async logout({commit},{}){
        console.log("logout")
        try{
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "authorization" : "Bearer "+ state.user.token,
                    
                }
              };
            axios.get(`${HOST}:${PORT}/logout`,axiosConfig)
                .then(function (response){
                    console.log(response)
                    const user = {
                        token : "",
                    }
                    commit("setLogin",{user});
                  
                
            })
                .catch(function(error){
                    console.error(error);
                    
                  
                })

        }catch(e){
            console.error(e);
           
        }
    },
    async profileMe({commit},{}){
        console.log("profile")
        try{
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "authorization" : "Bearer "+ state.user.token,
                    
                }
              };
            axios.get(`${HOST}:${PORT}/profile/me`,axiosConfig)
                .then(function (response){
                    console.log(response)
                    const info = {
                        username:response.data.username,
                        email:response.data.email,
                        name:response.data.name,
                        surname:response.data.surname,
                    }
                    commit("setInfo",{info});
                  
                
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

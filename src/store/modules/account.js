import axios from "axios";
/* eslint-disable*/
const HOST = "http://localhost";
const PORT = 3000;

const state = {
    user :{
        token: "",
        role:"",
        
    },
    info:{
        username:"",
        email:"",
        name:"",
        surname:"",
        birthdate:"",
        role:"",
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
            
                    const user = {
                        token : response.data.token,
                        role : response.data.role
                    }
                    commit("setLogin",{user});
                  
                
            })
                .catch(function(error){
               
                    if(error.response.status==404)commit("setStatut","Le compte n'existe pas");
                  
                })

        }catch(e){
        
        }
    },

    async register({commit},{username,password,email,name,surname,birthdate}){
    
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
                    role:"user",
                    birthdate:birthdate,
                }
              };
            axios.post(`${HOST}:${PORT}/register`,null,axiosConfig)
                .then(function (response){
          
                    const user = {
                        token : response.data.token,
                        role : response.data.role
                    }
                    commit("setLogin",{user});
                  
                
            })
                .catch(function(error){
              
                    
                  
                })

        }catch(e){
      
            if(error.response.status==403)commit("setStatut","Les informations utilisé existe déjà");
           
        }
    },
    async logout({commit},{}){
    
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
           
                    const user = {
                        token : "",
                        role:"",
                    }
                    commit("setLogin",{user});
                  
                
            })
                .catch(function(error){
          
                    
                  
                })

        }catch(e){
     
           
        }
    },
    async profileMe({commit},{}){
 
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
    
                    const info = {
                        username:response.data.username,
                        email:response.data.email,
                        name:response.data.name,
                        surname:response.data.surname,
                        birthdate:response.data.birthdate,
                        role:response.data.role,
                    }
                    commit("setInfo",{info});
                  
                
            })
                .catch(function(error){
              
                    
                  
                })

        }catch(e){
            }


    },
    async modifyRole({commit},{username,role}){
    
        try{
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "authorization" : "Bearer "+ state.user.token,
                    
                }
              };
            axios.put(`${HOST}:${PORT}/profile/${username}`,{role:role},axiosConfig)
                .then(function (response){
         
                    commit("setStatut","Role modifié");
                  
                
            })
                .catch(function(error){
                    if(error.response.status==404)commit("setStatut","Le compte existe pas");
                  
                })

        }catch(e){
            
        }


    }
  
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

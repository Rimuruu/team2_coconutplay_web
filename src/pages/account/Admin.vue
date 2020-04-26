

<template>
  <div class="new-test">
<label
for="name"
class="label-name"
>Username : </label>
        <input
          v-model="username"
          required
          maxlength="50"
          type="text"
          id="name"
          name="name"
          placeholder="Nom du compte"
        >
        <label for="category">Rôle : </label>
        <select
v-model="role"
id="role"
name="role"
>
          <option value="admin">
            Admin
          </option>
          <option
selected
value="user"
>
            User
          </option>
          </select>
        <label
for="name"
class="label-name"
>{{ status }}</label>

     
       
         
    

    <a
href="#"
@click="send"
>Envoyer</a>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: "AdminPage",
  data() {
    return {
      username : "",
      role: "user",
      token : "",
    }

  },
  computed : {
    isAdmin(){
      if(this.$store.state.account.user.role == "admin")return true;
      if(this.$route.name != "home"){
        this.$router.push({ name: "home" });
        }
      return false;
    },
    status() {
      let status = this.$store.state.account.status;
      this.$store.state.account.status = "";
      return status;
    }
  },
  mounted() {
      this.isAdmin;
  },
  methods :  {
    async send(e){
   
      if(this.username != ""){
        this.$store.dispatch("account/modifyRole",{username:this.username,role:this.role}).then(function(response){
          
        }).catch(function(err){
        
        })
     
        }
        else{
          this.$store.state.account.status = "Veuillez compléter les champs obligatoires"}
      
    }
  }
};
</script>

<style scoped>
.new-test {
  background-color: #3b3f48;
  min-height: 100%;
  color: aliceblue;

  padding-right: 30px;
  padding-left: 30px;

  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
}

.new-test .part {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.new-test fieldset {
  display: flex;
  flex-direction: column;
}

.new-test input {
  width: 20%;
  padding: 10px;
  padding-left: 20px;
  background-color: #cdd8dc;
  border-style: none;
  border: #9b9b9b solid 1px;
  margin-bottom: 10px;
}

.new-test label {
  margin-top: 20px;
  margin-bottom: 10px;
}

.new-test select {
  width: 20%;
  padding: 10px;
  padding-left: 20px;
  background-color: #cdd8dc;
  border-style: none;
  border: #9b9b9b solid 1px;
  margin-bottom: 10px;
}

.new-test textarea {
  resize: none;
  width: 100%;

  padding: 20px;

  box-sizing: border-box;

  background-color: #cdd8dc;
}

.new-test a {
  float: right;
  background-color: #167dac;
  padding: 8px;
  margin-top: 10px;
  width: 60px;
}
</style>

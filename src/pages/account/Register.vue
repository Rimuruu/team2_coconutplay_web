<template>
  <div class="new-test">
    
        <label for="name" id="label-name">Username : </label>
        <input
          v-model="username"
          required
          maxlength="50"
          type="text"
          id="name"
          name="name"
          placeholder="Nom du compte"
        />
        <label for="name"  id="label-name">Password : </label>
        <input
          v-model="password"
          required
          maxlength="50"
          type="text"
          id="name"
          name="name"
          placeholder="Password"
        />
        <label for="name"  id="label-name">Email : </label>
        <input
          v-model="email"
          required
          maxlength="50"
          type="text"
          id="name"
          name="name"
          placeholder="Email"
        />
        <label for="name"  id="label-name">Nom : </label>
        <input
          v-model="name"
          required
          maxlength="50"
          type="text"
          id="name"
          name="name"
          placeholder="Nom"
        />
        <label for="name"  id="label-name">Prénom : </label>
        <input
          v-model="surname"
          required
          maxlength="50"
          type="text"
          id="name"
          name="name"
          placeholder="Prenom"
        />
        <label for="name"  id="label-name">Date de naissance: </label>
        <input
          v-model="birthdate"
          required
          maxlength="50"
          type="date"
          id="name"
          name="name"
        
        />
        <label v-if="loged" for="name"  id="label-name">Vous êtes inscrit ! </label>
        <label for="name"  id="label-name">{{status}} </label>

     
       
         
    

    <a v-if="loged == false" href="#" @click="send">Envoyer</a>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      username : "",
      password : "",
      email : "",
      name : "",
      surname : "",
      token : "",
      birthdate:"",
    }

  },
  computed : {
    loged(){
      this.token = this.$store.state.account.user.token;
      console.log("token "+ this.token);
      if(this.token != ""){
        this.$router.push({ name: "home" });
        return true;
        
      }
      return false;
    },
    status() {
      let status = this.$store.state.account.status;
      this.$store.state.account.status = "";
      return status;
    }
  },
  methods :  {
    async send(e){
      console.log("send");
      if(this.username != "" || this.password != "" || this.email != ""){
        var response = await this.$store.dispatch("account/register",{username:this.username,password:this.password,email:this.email,name:this.name,surname:this.surname,birthdate:this.birthdate});
        
        }else{
          this.$store.state.account.status = "Veuillez remplir les champs obligatoires"
        }
      
      
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

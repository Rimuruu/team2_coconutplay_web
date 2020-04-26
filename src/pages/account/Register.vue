<template>
  <div class="new-test">
    <label
      for="username"
      class="label-name"
    >Username : </label>
    <input
      id="name"
      v-model="username"
      required
      maxlength="50"
      type="text"
      name="name"
      placeholder="Nom du compte"
    >
    <label
      for="password"
      class="label-name"
    >Password : </label>
    <input
      id="password"
      v-model="password"
      required
      maxlength="50"
      type="text"
      name="name"
      placeholder="Password"
    >
    <label
      for="email"
      class="label-name"
    >Email : </label>
    <input
      id="email"
      v-model="email"
      required
      maxlength="50"
      type="text"
      name="name"
      placeholder="Email"
    >
    <label
      for="Nom"
      class="label-name"
    >Nom : </label>
    <input
      id="nom"
      v-model="name"
      required
      maxlength="50"
      type="text"
      name="name"
      placeholder="Nom"
    >
    <label
      for="Prenom"
      class="label-name"
    >Prénom : </label>
    <input
      id="prenom"
      v-model="surname"
      required
      maxlength="50"
      type="text"
      name="name"
      placeholder="Prenom"
    >
    <label
      for="Birthdate"
      class="label-name"
    >Date de naissance: </label>
    <input
      id="birthdate"
      v-model="birthdate"
      required
      maxlength="50"
      type="date"
      name="name"
    >
    <label
      v-if="loged"
      for="inscrit"
      class="label-name"
    >Vous êtes inscrit ! </label>
    <label
      for="status"
      class="label-name"
    >{{ status }} </label>

     
       
         
    

    <a
      v-if="loged == false"
      href="#"
      @click="send"
    >Envoyer</a>
  </div>
</template>

<script>
export default {
  /* eslint-disable*/
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

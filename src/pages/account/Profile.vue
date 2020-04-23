<template>
  <div class="new-test">
     <label>{{username}}</label>
     <label>{{email}}</label>    
     <label>{{surname}}</label>
     <label>{{name}}</label>

  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      username : "",
      email : "",
      name : "",
      surname : "",
      token : ""
    }

  },
  methods:{
    async getInfo(){
      this.token = this.$store.state.account.user.token;
      if(this.token == ""){
        this.$router.push({ name: "home" });
      }
      else{
          await this.$store.dispatch("account/profileMe",{})
          this.username = this.$store.state.account.info.username;
          this.email = this.$store.state.account.info.email ;
          this.name = this.$store.state.account.info.name;
          this.surname = this.$store.state.account.info.surname;
      }
    }
  },
  mounted(){
      this.getInfo();
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

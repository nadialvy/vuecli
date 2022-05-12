<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="height: 100px;background-color: #FBEFF1;" v-if="authenticated">
      <a class="navbar-brand" href="/">
        <img src="./assets/smlogo.png" alt="" width="45" class="d-inline-block align-middle mr-2">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mx-auto">
            
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

             <li class="nav-item">
              <router-link class="nav-link" to="/member">Member</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/product">Product</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/cart">Cart</router-link>
            </li>

            <li class="nav-item">
              <!-- <p>Hi, {{user}}</p> -->
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item ml-auto">
              <a class="nav-link" v-on:click="logout()"><i class="bi bi-box-arrow-right fa-lg " style=""></i></a>
            </li>
          </ul>
        </div>
    </nav>

    <div>
      <router-view @authenticated = "setAuthenticated"></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data(){
      return{
        authenticated: localStorage.getItem('status'),
        data: [],
        user : localStorage.getItem('user')
      }
    },
    methods:{
      setAuthenticated(status){
        this.authenticated = status;
      },
      logout(){
        this.authenticated = false;
        localStorage.clear();
        this.redirectlogin();
      },
      redirectlogin(){ //cek authenticated false atau true, kalau false login, kalau true kembali ke home
        if(!this.authenticated){
          this.$router.replace('/login');
        }
      }
    },
    mounted(){
      this.redirectlogin();
      if(JSON.parse(localStorage.getItem('user'))!=null){
        this.data = JSON.parse(localStorage.getItem('user'));
      }
        // this.$store.commit('updateCartFromLocalStorage')
    }
  }
</script>

<style>
  @font-face {
    font-family: "Poppins";
    src: local("Poppins"),
    url(./fonts/Poppins/Poppins-Regular.ttf) format("truetype");
  }
</style>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="height: 100px;background-color: #FBEFF1;" v-if="authenticated">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            
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
              <a class="nav-link" v-on:click="logout()">Logout</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
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
        name: '',
        data: []
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
        // this.name = JSON.parse(localStorage.getItem('user')).name;
        // this.role = JSON.parse(localStorage.getItem('user')).type;
      }
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

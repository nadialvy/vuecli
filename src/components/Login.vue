<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                <div class="card-body">
                                    <!-- <p> {{ message }} </p> -->
                                    <br>
                                    <form>
                                        <div class="form-floating mb-3">
                                            <label for="inputEmail">Email address</label>
                                            <input v-model="email" class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                        </div>
                                        <div class="form-floating mb-3">
                                            <label for="inputPassword">Password</label>
                                            <input v-model="password" class="form-control" id="inputPassword" type="password" placeholder="Password" />
                                            
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="btn btn-primary" href="#" v-on:click="login()">Login</a>
                                         </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods:{
            login(){
                let data = {
                    email: this.email,
                    password: this.password
                }

                this.axios.post('http://localhost/toko-laravel-versi-9/public/api/login', data)
                .then(resp => {
                    console.log(resp.data);
                    localStorage.setItem('token', resp.data.token);
                    localStorage.setItem('user', JSON.stringify(resp.data.user_data[0].name));
                    localStorage.setItem('status', true); //nilainya tetap true ketika sudah login, ketika logout false
                    this.$emit('authenticated', true);
                    location.href='/';           
                }).catch(error => {
                    console.log(error);
                    alert('Login gagal');
                })
            }
        }
    }
</script>
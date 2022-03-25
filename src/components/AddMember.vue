<template>
    <div class="container">
        <router-view></router-view>
        <h3 class="mt-3">Add Member</h3>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea type="text" class="form-control" id="address" v-model="address"></textarea>
            </div>
            <div class="mb-3">
                <label for="telp" class="form-label">Telp</label>
                <input type="text" class="form-control" id="telp" v-model="telp">
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <button @click="add()" type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //vmodel
                name: '',
                address: '',
                telp: '',
                username: '',
                password: ''
            }
        },
        methods: {
            add(){
                let data = {
                    nama: this.name, 
                    alamat: this.address,
                    telp: this.telp,
                    username: this.username,
                    password: this.password
                }

                this.axios.post("http://localhost/toko-laravel-versi-9/public/api/customers", data)
                .then(resp => {
                    this.$swal('Sukses', 'Berhasil tambah data', 'OK')
                    console.log(resp)
                    this.get();
                    // this.$route.params('/member')
                })
            }
        }
    }
</script>
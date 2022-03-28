<template>
    <div class="container border mt-4 rounded">
        <h3 class="mt-3">Edit Member</h3>
        <form>
            <input type="hidden" class="form-control" id="name" v-model="id_customers">

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
            <!-- hidden to secure reason  -->
                <input type="hidden" class="form-control" id="password" v-model="password">
        
            <button @click="edit()" type="button" class="btn btn-primary">Edit</button>
        </form> 
    </div>
</template>

<script>
    export default {
        name: 'Edit Siswa',
        data(){
            return{
                //vmodel
                id_customers: '',
                name: '',
                address: '',
                telp: '',
                username: '',
                password: ''
            }
        },
        methods:{
            getDetail(id){
                this.axios.get('http://localhost/toko-laravel-versi-9/public/api/customers/'+id)
                .then(res => {
                    //vmodel
                    this.id_customers = res.data[0].id_customers,
                    this.name= res.data[0].nama,
                    this.address= res.data[0].alamat,
                    this.telp= res.data[0].telp,
                    this.username= res.data[0].username,
                    this.password = res.data[0].password
                })
            },
            edit(){
                let data = {
                    // id_customers: this.id_customers,
                    nama: this.name, 
                    alamat: this.address,
                    telp: this.telp,
                    username: this.username,
                    password: this.password
                }
                
                this.axios.put("http://localhost/toko-laravel-versi-9/public/api/customers/"+this.id_customers, data)
                .then(res => {
                    this.$swal('Sukses', 'Berhasil edit data', 'OK')
                    console.log(res)
                    this.$router.push('/member')
                })
            }
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        }
    }
</script>
<template>
    <div class="container border mt-4 rounded">
        <h3 class="mt-2">Member Data</h3>
        <router-link to="/addMember"> <button class="btn btn-primary mt-3 mb-4">Add Member</button></router-link>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Username</th>
                    <th>No Telp</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(member, i) in member_data" :key="i">
                    <td> {{ i+1 }} </td>
                    <td> {{ member.nama }} </td>
                    <td> {{ member.alamat }} </td>
                    <td> {{ member.username }} </td>
                    <td> {{ member.telp }} </td>
                    <td>
                        <router-link :to="{path: '/editMember/' + member.id_customers}"> <button class="btn btn-info" type="button"><i class="fas fa-pencil-alt fa-fw"></i></button> </router-link>
                        <button v-on:click="hapus(member.id_customers)" class="btn btn-danger" ><i class="fas fa-trash-alt fa-fw"></i></button>
                                
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
\\\\\\
<script>
    export default{
        name:'Member',
        data(){
            return{
                member_data:[],
            }
        },
        methods:{
            get(){
                //call axios
                this.axios.get('http://localhost/toko-laravel-versi-9/public/api/customers')
                .then(resp => {
                    this.member_data = resp.data
                    // console.log(resp.data)
                })
            },
            hapus(id){
                this.$swal({
                    title: 'Apakah anda yakin?',
                    text: "Data yang dihapus tidak dapat dikembalikan!",
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true, 
                }).then( value => {
                    if(value.isConfirmed){
                        console.log(value.isConfirmed);
                        
                        this.axios.delete('http://localhost/toko-laravel-versi-9/public/api/customers/' + id)
                        .then((res) => {
                            this.$swal('Sukses', 'Berhasil hapus data', 'OK')
                            this.get()
                            console.log(res);
                        })
                    }else {
                        this.$swal('Batal', 'Data tidak jadi dihapus', 'error')
                    }
                })
                
            }
        },
        mounted(){
            this.get()
        }
    }
</script>


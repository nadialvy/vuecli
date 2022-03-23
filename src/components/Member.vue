<template>
    <div class="container">
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
                        <button class="btn btn-info" type="button" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-pencil-alt fa-fw"></i></button>
                        <button class="btn btn-danger" ><i class="fas fa-trash-alt fa-fw"></i></button>
                                
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

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
            }
        },
        mounted(){
            this.get()
        }
    }
</script>

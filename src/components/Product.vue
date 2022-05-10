<template>
    <div class="main pt-2 mt-1">
        <h2 class="text-center m-3 overflow-hidden mt-5 pt-5">SM Ent.</h2>
        <div class="row">
            <div class="col text-center">
                <router-link to="/addProduct"><button href="#" class="btn btn-primary"><i class="bi bi-plus-square m-1"></i> Add Product</button></router-link>
            </div>
        </div>

        <hr>
        <div class="ml-1 row">
            <div class="d-flex flex-wrap justify-content-sm-around">
                <div class="card mr-3 mb-5 shadow bg-white rounded" style="width: 18rem;" v-for="(product, i) in products" :key="i">
                    <img :src="'http://localhost:8000/images/' + product.foto_product" class="card-img-top" width="100" height="300" alt="Product">
                    <div class="card-body">
                        <h5 class="card-title"> {{ product.nama_product }} </h5>
                        <h6 class="card-text">Rp.{{ product.harga }} </h6>
                        <p class="card-text"> {{ product.deskripsi }} </p>
                        <div class="d-flex justify-content-around">
                            <router-link :to="{path: '/detailProduct/' + product.id_product}"><button class="btn btn-primary"><i class="bi bi-cart"></i></button></router-link>
                            <!-- <button class="btn btn-primary"><i class="bi bi-cart"></i></button> -->
                            <div v-if="type==1">
                                <router-link :to="{path: '/editProduct/' + product.id_product}"><button class="btn btn-info"><i class="bi bi-pencil"></i></button></router-link>
                                <router-link :to="{path: '/addPhoto/' + product.id_product}"><button class="btn btn-success"><i class="bi bi-image"></i></button></router-link>
                            </div>
                            <div v-else-if="type==2">
                                <router-link :to="{path: '/editProduct/' + product.id_product}"><button class="btn btn-info"><i class="bi bi-pencil"></i></button></router-link>
                                <router-link :to="{path: '/addPhoto/' + product.id_product}"><button class="btn btn-success"><i class="bi bi-image"></i></button></router-link>
                            </div>
                            <button v-if="type == 2" v-on:click="hapus(product.id_product)" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        data() {
            return {
                products: [],
                type: localStorage.getItem('type')
            }
        },
        methods: {
            get(){
                this.axios.get('http://localhost/toko-laravel-versi-9/public/api/product')
                .then(resp => {
                    this.products = resp.data
                    console.log(resp.data)
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
                        // console.log(value.isConfirmed);
                        this.axios.delete('http://localhost/toko-laravel-versi-9/public/api/product/' + id)
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
        mounted() {
            this.get();
        }
    }
</script>

<style scoped>
    .main{
        overflow-x: hidden;
    }
</style>
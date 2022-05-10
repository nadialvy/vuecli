<template>
<div class="mt-5 pt-5">
    <div class="container">
        <router-view></router-view>
        <h3 class="mt-3">Add Product</h3>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name_product">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="address" v-model="desc"></textarea>
            </div>
            <div class="mb-3">
                <label for="telp" class="form-label">Price</label>
                <input type="number" class="form-control" id="telp" v-model="price">
            </div>
            <button @click="add()" type="button" class="btn btn-primary">Add</button>
        </form>
    </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                //v-model
                name_product: '',
                desc: '',
                price: ''
            }
        },
        methods: {
            add(){
                let data = {
                    nama_product: this.name_product, 
                    deskripsi: this.desc,
                    harga: this.price,
                }

                this.axios.post("http://localhost/toko-laravel-versi-9/public/api/product", data)
                .then((resp) => {
                    this.$swal('Sukses', 'Berhasil tambah data', 'OK')
                    console.log(resp)
                    this.$router.push('/product')
                })
            }
        }
    }
</script>

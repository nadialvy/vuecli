<template>
    <div class="container border mt-4 rounded">
        <h3 class="mt-3">Edit Product</h3>
        <form>
            <input type="hidden" class="form-control" id="name" v-model="id_product">

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
            <button @click="edit()" type="button" class="btn btn-primary">Edit</button>
        </form>
    </div>
</template>

<script>

export default {
    data(){
        return{
            //v-model
            id_product:'',
            name_product: '',
            desc: '',
            price: ''
        }
    },
    methods:{
        getDetail(id){
            this.axios.get('http://localhost/toko-laravel-versi-9/public/api/product/'+id)
            .then(res => {
                // console.log(res.data);
                
                //vmodel
                this.id_product = res.data[0].id_product,
                this.name_product= res.data[0].nama_product,
                this.desc= res.data[0].deskripsi,
                this.price= res.data[0].harga
            })
        },
        edit(){
            let data = {
                // id_customers: this.id_customers,
                nama_product: this.name_product, 
                deskripsi: this.desc,
                harga: this.price,
            }
            
            this.axios.put("http://localhost/toko-laravel-versi-9/public/api/product/"+this.id_product, data)
            .then(res => {
                this.$swal('Sukses', 'Berhasil edit data', 'OK')
                console.log(res)
                this.$router.push('/product')
            })
        }
    },
    mounted(){
        this.getDetail(this.$route.params.id)
    }
}
</script>

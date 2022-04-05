<template>
    <div class="container">
    <h3 class="mt-3">Add Photo</h3>
    <form>
        <input type="hidden" class="form-control" id="name" v-model="id_product">
        
        <div class="mb-3">
            <label for="name" class="form-label">Add Photo</label>
            <input type="file" class="form-control" id="name" ref="file"  @change="uploadCover()">
        </div>
        <button @click="add()" type="button" class="btn btn-primary">Add</button>
    </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                id_product: '',
                foto_product:''
            }
        },
        methods: {
            uploadCover(){
                this.foto_product = this.$refs.file.files[0]; //knp 0? karena filenya cuma 1. (index ke 0)
            },
            getDetail(id){
                this.axios.get('http://localhost/toko-laravel-versi-9/public/api/product/'+id)
                .then(res => {
                    //vmodel
                    this.id_product = res.data[0].id_product
                })
            },
            add(){
                let form = new FormData();
                form.append('foto_product', this.foto_product)  

                this.axios.post('http://localhost/toko-laravel-versi-9/public/api/product/'+ this.id_product, form)
                .then(resp => {
                    this.$swal('Sukses', 'Berhasil upload foto', 'OK')
                    console.log(resp)
                    this.$router.push('/product')
                })
            },
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        }
    }
</script>

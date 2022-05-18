<template>
    <div class="mt-5 pt-5">
         <div class="container mt-4">
             <div class="card mb-3" style="max-width: 1240px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img :src="'http://localhost:8000/images/' + foto_product" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">{{name_product}}</h3>
                        <p class="card-text">{{desc}}.</p>
                        <h5 class="card-text"> Rp.{{price}} </h5>
                        <p class="card-text" v-if="getCount">On Cart : {{getCount}}</p>
                        <button v-on:click="addToCart()" type="button" class="btn btn-primary mt-2 mr-3">Add to cart</button>
                        <button v-on:click="removeItem()" type="button" class="btn btn-danger mt-2 mr-3">Remove</button>
                    </div>
                    </div>
                </div>
            </div>  
        </div>
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
            price: '',
            foto_product: '',
            qty: '',
            detail: [],
        }
    },
    methods:{
        getDetail(id){
            this.axios.get('http://localhost/toko-laravel-versi-9/public/api/product/'+id)
            .then(res => {
                //vmodel
                this.id_product = res.data.id_product,
                this.name_product= res.data.nama_product,
                this.desc= res.data.deskripsi,
                this.price= res.data.harga,
                this.foto_product = res.data.foto_product

                this.detail = res.data
                console.log(this.detail);
            })
        },

        addToCart(){
                    //method yg ada di index, parameter
            this.$store.commit('addToCart', this.detail)
        },

        removeItem(){
            this.$store.commit('removeItem', this.detail)
        }
    },
    mounted(){
        this.$store.commit('updateCartFromLocalStorage')

        this.getDetail(this.$route.params.id)
    },
    computed: {
        getCount(){
            return this.$store.getters.productQuantity(this.detail)
            
        }
    }
}
</script>

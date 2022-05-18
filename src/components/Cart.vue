<template>
    <div class="mt-5 pt-5">
         <div class="container mt-4">
             <h1 align="center">Cart</h1>
              <div class="mb-3">
                        <label for="">Customer</label>
                        <select class="form-control" id="class" v-model="id_customers" required>
                            <option 
                                v-for="cust in customers" :key="cust" 
                                :value="cust.id_customers"
                            > 
                                    {{ cust.nama }} 
                            </option>
                        </select>
                    </div>
             <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cart, i) in getCart" :key="i">
                        <td> {{ i + 1}} </td>
                        <td> {{cart.nama_product}} </td>
                        <td> {{cart.quantity}} </td>
                        <td>
                            <button class="btn btn-primary badge mr-4" v-on:click="addToCart()" type="button">+</button>
                            <button class="btn btn-danger badge" v-on:click="removeItem" type="button">-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-info" v-on:click="checkOut()">Check Out</button>
         </div>  
    </div>
    
</template>

<script>
export default {
    name: 'DetailProduct',
    data(){
        return{
            cartItem: [],
            customers: [],
            id_customers:'',
            
            detail : [],
            dataPost: []
        }
    },
    methods: {
        checkOut(){
            this.cartItem = this.$store.getters.cartItems;
            // console.log(this.cartItem);

            for(let i = 0; i < this.cartItem.length; i++){
                this.detail = {
                    'id_product': this.cartItem[i].id_product,
                    'qty' :  this.cartItem[i].quantity
                }
                this.dataPost.push(this.detail)
            }
                // console.log(this.dataPost);

            let form = {
                'id_customers' : this.id_customers,
                'detail' : this.dataPost
            }

            console.log(form);

            this.axios.post('http://localhost:8000/api/order', form)
            .then( resp => {
                console.log(resp)
                if(resp.data.status === 1) {
                    this.$swal('Sukses', 'Berhasil tambah data', 'OK')
                    this.$store.commit('resetCart')
                    this.$router.push('/product')
                }else {
                    this.$swal('Gagal', 'Gagal tambah data', 'failed')
                }
                
            })
            
        },
        getCustomers(){
            this.axios.get('http://localhost/toko-laravel-versi-9/public/api/customers')
                .then(resp => {
                    this.customers = resp.data
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
    computed: {
        getCart(){
            return this.$store.getters.cartItems
        }
    },
    mounted(){
        this.getCustomers()
        this.$store.commit('updateCartFromLocalStorage')
    }
}
</script>
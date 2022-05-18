<template>
<div class="mt-5 pt-5">
    <div class="container border mt-2 pt-1 rounded">
        <h3 class="mt-2">Member Data</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Tanggal Pembelian</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, i) in dataOrder" :key="i">
                    <td> {{ data.id_orders}} </td>
                    <td> {{data.nama}} </td>
                    <td> {{data.tgl_transaksi}} </td>
                    <td>
                        <button class="btn btn-primary badge mr-4" data-toggle="modal" data-target="#DetailOrder" v-on:click="detailOrder(data.id_orders)" type="button">Detail</button>
                        <!-- <button class="btn btn-danger badge" v-on:click="removeItem" type="button">-</button> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="modal fade" id="DetailOrder" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Detail Order</h5>
                </div>
                <div class="modal-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Harga/pieces</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(detail, i) in dataDetail" :key="i">
                                <td> {{ i + 1 }} </td>
                                <td> {{ detail.nama_product }} </td>
                                <td> {{ detail.qty }} </td>
                                <td>{{detail.harga}}</td>
                                <td>{{detail.subtotal}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    name: 'history-component',
    data(){
        return{
            dataOrder : [],
            dataDetail: [],
        }
    },
    methods: {
        getData(){
            this.axios.get('http://localhost:8000/api/order')
            .then( resp => {
                this.dataOrder = resp.data.data
            })
        },
        detailOrder(id){
            console.log(id);
            this.axios.get('http://localhost:8000/api/detailOrder/' + id)
            .then( resp => {
                this.dataDetail = resp.data.data
            })
        }
    },
    mounted(){
        this.getData()

    }
}
</script>
<script>
    export default{
        name: "add-to-cart",
        props: {
            image: String,
            product_id: String,
            price: String,
            name: String
        },
        data() {
            return {
                productName: this.name,
                productPrice: this.price,
                productImage: this.image,
                productId: this.product_id,
            }
        },
    }
</script>

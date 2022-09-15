<script lang="ts">
    import {cart} from '../store/cart.js'
    import {Button} from 'sveltestrap';

    export let productId

    const inArray = (array, key, value) => {
        return array.some(object => object[key] === value);
    }

    const addToCart = (productId) => {
        if (!inArray($cart, 'id', productId)) {
            const newProduct = Object.assign({['id']: productId}, {['quantity']: 0})
            $cart = [...$cart, newProduct]
        }

        $cart.map((item) => {
            if (item.id === productId) {
                item.quantity += 1
            }
            $cart = $cart
        })
        return;
    }
</script>

<Button on:click={() => addToCart(productId)} class="float-end" color="warning">
    Add to Cart
</Button>

<script lang="ts">
    import Cart from "./components/Cart.svelte";
    import {products} from './store/products.ts';
    import {cart} from './store/cart.js'
    import ProductsList from "./components/ProductsList.svelte";
    import Product from "./components/Product.svelte";
    import {
        Navbar,
        Nav,
        Container,
    } from 'sveltestrap';

    const addProduct = (e) => {
        cart.addProduct(e.detail)
    }
</script>
<Container class="pb-2">
    <Navbar class="fixed-top" color="light">
        <Nav class="ms-auto" navbar>
            <Cart/>
        </Nav>
    </Navbar>
</Container>

<Container class="pt-5">
    <ProductsList>
        {#each $products as item (item.id)}
            <Product {item} on:addProduct={addProduct}/>
        {/each}
    </ProductsList>
</Container>

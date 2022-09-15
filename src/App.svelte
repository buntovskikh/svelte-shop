<script lang="ts">
    import Cart from "./components/Cart.svelte";
    import ProductsList from "./components/ProductsList.svelte";
    import {
        Navbar,
        Nav,
        Container,
    } from 'sveltestrap';

</script>
<Container class="pb-2">
    <Navbar class="fixed-top" color="light">
        <Nav class="ms-auto" navbar>
            <Cart/>
        </Nav>
    </Navbar>
</Container>

<Container class="pt-5">
    <ProductsList/>
</Container>

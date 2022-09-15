<script lang="ts">
    import Cart from "./components/Cart.svelte";
    import {totalPrice} from "./store/cart";
    import ProductsList from "./components/ProductsList.svelte";
    import {
        Navbar,
        Nav,
        Container,
        Button
    } from 'sveltestrap';

    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);

</script>
<Container class="pb-2">
    <Navbar class="fixed-top" color="light">
        <Nav class="ms-auto" navbar>
            <Button on:click={toggle} class="bg-success text-dark">
                {$totalPrice} Kč
                <Cart {isOpen}/>
            </Button>
        </Nav>
    </Navbar>
</Container>

<Container class="pt-5">
    <ProductsList/>
</Container>

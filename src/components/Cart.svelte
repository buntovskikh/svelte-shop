<script>
    import {totalPrice, cart} from "../store/cart"
    import {products} from '../store/products.ts';
    import {
        Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Table,
        Input
    } from 'sveltestrap';

    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);

    const deleteAll = () => {
        cart.set([])
    }

    const checkout = () => {
        alert(JSON.stringify($cart))
        deleteAll()
        toggle()
    }

    const deleteProduct = (productId) => {
        $cart.map((item, index) => {
            if (item.id === productId) {
                $cart.splice(index, 1)
            }
            $cart = $cart
        })
    }

    $: $cart.map((item, index) => {
        if (item.quantity === 0) {
            $cart.splice(index, 1)
        }
    })
</script>

<Button on:click={toggle} class="bg-success text-dark">
    {$totalPrice} Kč
</Button>

<Modal isOpen={isOpen} {toggle} scrollable>
    <ModalHeader {toggle}>
        Cart
    </ModalHeader>
    <ModalBody>
        {#if $cart.length === 0}
            <p>
                Cart is empty. Add items to cart.
            </p>
        {:else}
            <Table responsive>
                <thead>
                <tr>
                    <th></th>
                    <th>Název</th>
                    <th>Počet</th>
                    <th>Cena</th>
                </tr>
                </thead>
                {#each $cart as item (item.id)}
                    <tbody>
                    <tr>
                        <th scope="row">
                            <Button on:click={() => deleteProduct(item.id)}>
                                &times;
                            </Button>
                        </th>
                        <td>
                            {$products[item.id].name}
                        </td>
                        <td>
                             <Input type={'number'} min="0" max="99" bind:value={item.quantity}/>
                        </td>
                        <td>{$products[item.id].price * item.quantity} Kč</td>
                    </tr>
                    </tbody>
                {/each}
            </Table>
        {/if}
    </ModalBody>
    {#if $cart.length !== 0}
        <ModalFooter>
            <Button on:click={checkout} color='success'>
                {$totalPrice} Kč
            </Button>
        </ModalFooter>
    {/if}
</Modal>

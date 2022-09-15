<script lang="ts">
    import {cart, totalPrice} from "../store/cart"
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

    const checkout = () => {
        alert('checkout!')
        cart.deleteAll()
        toggle()
    }

    const onInputChange = () => {
        cart.update(item => item.filter((product) => product.quantity > 0))
    }
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
                            <Button on:click={() => cart.deleteProduct(item.id)}>
                                &times;
                            </Button>
                        </th>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            <Input type={'number'} min="0" max="99" bind:value={item.quantity}
                                   on:change={() => onInputChange()}/>
                        </td>
                        <td>{item.price * item.quantity} Kč</td>
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

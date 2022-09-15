<script lang="ts">
    import {Button} from 'sveltestrap';
    import { createEventDispatcher } from 'svelte';

    export let productId

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch('addProduct', productId);
    };

</script>

<Button on:click={handleClick} class="float-end" color="warning">
    Add to Cart
</Button>

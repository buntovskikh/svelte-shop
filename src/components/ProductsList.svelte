<script lang="ts">
    import {products} from '../store/products.ts';
    import Product from "./Product.svelte";
    import {Row} from 'sveltestrap';

</script>
<Row cols={{ lg: 3, md: 2, sm: 1, xs: 1 }} class="mb-3">
    {#each $products as item (item.id)}
        <Product {item}/>
    {/each}
</Row>

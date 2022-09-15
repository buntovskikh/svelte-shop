<script lang="ts">
    import {Row} from 'sveltestrap';
</script>

<Row cols={{ lg: 3, md: 2, sm: 1, xs: 1 }} class="mb-3">
    <slot/>
</Row>

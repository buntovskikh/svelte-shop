<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import {
        Badge,
        Card,
        CardBody,
        CardImg,
        CardHeader,
        CardText,
        CardTitle,
        Col,
        CardFooter, Button,
    } from 'sveltestrap';

    export let item

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch('addProduct', item);
    };

</script>
<Col class="mb-3">
    <Card class="h-100">
        <CardHeader>
            <CardTitle>
                {item.name}
                <Badge class="bg-danger float-end">{item.price} Kč</Badge>
            </CardTitle>
            <CardImg src="https://drive.google.com/uc?export=view&id={item.picture}" alt="{item.name}" top="true">
            </CardImg>
        </CardHeader>
        <CardBody>
            <CardText>
                {item.description}
            </CardText>
        </CardBody>
        <CardFooter class="bg-transparent border-0">
            <Button on:click={handleClick} class="float-end" color="warning">
                Add to Cart
            </Button>
        </CardFooter>
    </Card>
</Col>


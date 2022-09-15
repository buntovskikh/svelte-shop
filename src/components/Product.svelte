<script lang="ts">
    import AddToCart from "./AddToCart.svelte";
    import {
        Badge,
        Card,
        CardBody,
        CardImg,
        CardHeader,
        CardText,
        CardTitle,
        Col,
        CardFooter,
    } from 'sveltestrap';

    export let item

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
            <AddToCart productId={item.id}/>
        </CardFooter>
    </Card>
</Col>


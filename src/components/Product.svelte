<script lang="ts">
    import AddToCart from "./AddToCart.svelte";
    import {cart} from '../store/cart.js'
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

    const inArray = (array, key, value) => {
        return array.some(object => object[key] === value);
    }


    const addProduct = (e) => {
        if (!inArray($cart, 'id', e.detail)) {
            const newProduct = Object.assign({['id']: e.detail}, {['quantity']: 0})
            $cart = [...$cart, newProduct]
        }

        $cart.map((item) => {
            if (item.id === e.detail) {
                item.quantity += 1
            }
            $cart = $cart
        })
        return;
    }

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
            <AddToCart productId={item.id} on:addProduct={addProduct}/>
        </CardFooter>
    </Card>
</Col>


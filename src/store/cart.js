import {writable, derived} from 'svelte/store'
import {products} from './products.js'

//id + quantity of products
export const cart = writable([])

export const totalPrice = derived(
    [products, cart],
    ([$products, $cart]) => {
        let total = 0;

        $cart.map((item) => {
            total += item.quantity * $products[item.id].price
        })

        if (total < 0) {
            return 0;
        }

        return total;
    }
);

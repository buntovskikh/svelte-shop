import {writable, derived} from 'svelte/store'

function createCart() {
    const {subscribe, set, update} = writable([])

    const isAlreadyInTheCart = (items, product) => {
        return items.some((item) => item.id === product.id)
    }

    return {
        subscribe: subscribe,
        set: set,
        update: update,
        addProduct: (product) => update((state) => {
            if (isAlreadyInTheCart(state, product)) {
                return state.map((item) => ({
                    ...item,
                    quantity: item.id === product.id ? ++item.quantity : item.quantity
                }))
            }

            return [...state, {
                ...product,
                quantity: 1,
            }]
        }),

        deleteAll: () => set([]),
        deleteProduct: (id) => update(item => item.filter((product) => product.id !== id)),
    };
}

export const cart = createCart();

export const totalPrice = derived(
    cart,
    ($cart) => {
        return $cart.reduce((total, item) => item.quantity * item.price + total, 0)
    }
);

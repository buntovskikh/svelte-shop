import {readable} from "svelte/store";

type ProductData = {
    id: number;
    name: string;
    description: string;
    price: number;
    picture: string;
}

const productsList: ProductData[] = [
    {
        id: 0,
        name: 'bb-8',
        description: 'Figurka Lego, má hmotnost 0.003 kg, roku 2022',
        price: 250,
        picture: '1t_pjl0DAkK4L04FNmE6Vj7eWerKPhjZO'
    },
    {
        id: 1,
        name: 'c-3po',
        description: 'Figurka Lego, má hmotnost 0.004 kg, roku 2020',
        price: 200,
        picture: '1qqyZJTgXLCG0wjcYahHDniD3b0mKZdP-'
    },
    {
        id: 2,
        name: 'Chewbaccca',
        description: 'Figurka Lego, má hmotnost 0.003 kg, roku 2021',
        price: 400.5,
        picture: '13ko7RkFdzwVDupM3jWlqVnst7WoFjb1V'
    },
    {
        id: 3,
        name: 'Darth Vader',
        description: 'Figurka Lego, má hmotnost 0.004 kg, roku 2020',
        price: 70,
        picture: '1NI3q0Pymxtp3Ld_h_bdk2gVv0IughgXc'
    },
    {
        id: 4,
        name: 'Han Solo',
        description: 'Figurka Lego, má hmotnost 0.005 kg, roku 2022',
        price: 100,
        picture: '1mgOAo77yxVzFW2eOiwpxttAqG7OoBdh3'
    },
    {
        id: 5,
        name: 'Obi-Wan Kenobi',
        description: 'Popis produktu není dostupný',
        price: 180,
        picture: '1FhduS7sFLsN-D5MI83wK-nArwwidWL2Z'
    },
    {
        id: 6,
        name: 'Mandalorian',
        description: 'Popis produktu není dostupný',
        price: 160.5,
        picture: '1-ykfZM5HYysUrogMk_HdPAH4xutUm0hl'
    },
    {
        id: 7,
        name: 'Stormtrooper',
        description: 'Popis produktu není dostupný',
        price: 150,
        picture: '1y_qCMkg5Pby5UqzXTTUlYNtnAxZNRI6Q'
    },
];


export const products = readable(productsList)
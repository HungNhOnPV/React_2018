

let initialState = [
    {
        id: 1,
        name: 'Iphone 6 plus',
        price: 300,
        status: true
    },
    {
        id: 2,
        name: 'Samsung',
        price: 500,
        status: false
    },
    {
        id: 3,
        name: 'Oppo f1s',
        price: 200,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;
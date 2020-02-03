let initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản suất',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Samsung galaxy S7',
        image: '',
        description: 'Sản phẩm do Samsung sản suất',
        price: 400,
        inventory: 15
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: '',
        description: 'Sản phẩm do Oppo sản suất',
        price: 450,
        inventory: 5
    }
];

const product = (state = initialState, action) => {
    switch(action.type) {
        case '': return state;
        default: return state;
    }
}

export default product;
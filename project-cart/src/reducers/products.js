let initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://24hstore.vn/images/products/2019/05/28/large/iphone-7-plus-128gb-cu-98-mau-hong.jpg',
        description: 'Sản phẩm do Apple sản suất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung galaxy S7',
        image: 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s7-my-den-didongviet_3_1.jpg',
        description: 'Sản phẩm do Samsung sản suất',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://salt.tikicdn.com/cache/550x550/ts/product/ef/2c/2d/c7ba58029cd9cdebb0c71c46c4cc7fc3.jpg',
        description: 'Sản phẩm do Oppo sản suất',
        price: 450,
        inventory: 5,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        case '': return state;
        default: return state;
    }
}

export default products;
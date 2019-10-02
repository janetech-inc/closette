const uuid =  require('uuid/v4');

const MockItems = () => { return [
    {
        id: uuid(),
        designer: "Faith Connexion",
        description:"Sequins Tee Dress",
        deliveryWindow: 0,
        price: "600.00",
        image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1564149937/tweeddress_raqy3t.png',
        trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1564149937/tweeddress_raqy3t.png',
        color: "Silver",
        variants: [
            {color: 'Silver', inventory: 1},
            {color: 'Red', inventory: 4},
            {color: 'Blue', inventory: 2}
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
    },
    {
        id: uuid(),
        designer: "Faith Connexion",
        description:"Printed Frill",
        deliveryWindow: 0,
        price: "550.00",
        color: "Multi",
        image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1564149369/longdress_uei9do.png',
        trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1564149369/longdress_uei9do.png',
        variants: [
            {color: 'Floral', inventory: 5},
            {color: 'Black', inventory: 1}
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
    },
    {
        id: uuid(),
        designer: "Faith Connexion",
        description:"Lace Dress",
        deliveryWindow: 1,
        price: "900.00",
        color: "White",
        image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1564096011/whitedresshanger2_w6svus.png',
        trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1564096011/whitedresshanger2_w6svus.png',
        variants: [
            {color: 'White', inventory: 5},
            {color: 'Black', inventory: 1},
        ],
        sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
    },
    {
        id: uuid(),
        designer: "Faith Connexion",
        description:"Tweed Dress",
        deliveryWindow: 1,
        price: "1250.00",
        color: "plaid",
        image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1560371030/plaiddress_aedveo.png',
        trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1560371030/plaiddress_aedveo.png',
        sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
    },
    {
        id: uuid(),
        designer: "Faith Connexion",
        description:"Plaid Blouse",
        deliveryWindow: 0,
        price: "350.00",
        color: "plaid",
        image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1560371031/shirt_k9aeyf.png',
        trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1560371031/shirt_k9aeyf.png',
        sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
    }

]};

module.exports = MockItems;

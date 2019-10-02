const uuid =  require('uuid/v4');

const MockItemsPL = (slug) => {

    items = [
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Green Blazer",
            slug:"green-blazer",
            delivery_window_start: "2019-07-03 12:00:00",
            delivery_window_end: "2019-08-10 12:00:00",
            retail_price: "600",
            whole_sale_price: "300",
            color: "Green",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563556601/greennblazer_wq8c5z.png',
            trimmed_image:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563556601/greennblazer_wq8c5z.png',
            variants: [
                "Cotton",
                "Dry Clean Only"
            ],
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"],
            gender: "Women"
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            slug:"green-pants",
            description: "Green Pants",
            price: "800.00",
            deliveryWindow: 0,
            color: "Green",
            image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563556601/greenpant_le06bg.png',
            trimmedImage: 'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563556601/greenpant_le06bg.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            slug:"gray-coat",
            description:"Gray Coat",
            delivery_window_start: "2019-07-03 12:00:00",
            delivery_window_end: "2019-08-10 12:00:00",
            retail_price: "1000.00",
            whole_sale_price: "700.00",
            color: "grey",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563548465/coat_zvsfnu.png',
            trimmed_image:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563548465/coat_zvsfnu.png',
            variants: [
                "Cotton",
                "Dry Clean Only"
            ],
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"],
            gender: "Women"
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            slug:"black-coat",
            description:"Black Coat",
            deliveryWindow: 0,
            price: "600.00",
            color: "plaid",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563554309/blackcoat_prliou.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563554309/blackcoat_prliou.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },

        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Leopard Blazer",
            slug:"leopard-blazer",
            deliveryWindow: 1,
            price: "600.00",
            color: "Leopard",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563552147/blazer_qel530.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563552147/blazer_qel530.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Leopard Skirt",
            slug:"leopard-skirt",
            deliveryWindow: 1,
            price: "900.00",
            color: "Leopard",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563547436/leapordskirt_uz6wcj.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563547436/leapordskirt_uz6wcj.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },

        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Leopard Pants",
            slug:"leopard-pants",
            deliveryWindow: 1,
            price: "800.00",
            color: "plaid",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563554628/leapordpant_x9i8zj.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563554628/leapordpant_x9i8zj.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Trench Coat",
            slug:"trench-coat",
            delivery_window_start: "2019-07-03 12:00:00",
            delivery_window_end: "2019-08-10 12:00:00",
            retail_price: "800.00",
            whole_sale_price: "700.00",
            color: "plaid",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563554310/trench_xwwgit.png',
            trimmed_image:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563554310/trench_xwwgit.png',
            variants: [
                "Cotton",
                "Dry Clean Only"
            ],
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"],
            gender: "Women"
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Leather Pants",
            slug:"leather-pants",
            deliveryWindow: 2,
            price: "900.00",
            variants: [
                {color: 'Black', inventory: 1},
                {color: 'White', inventory: 4},
            ],
            color: "Multi",
            image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563554310/leatherpants_yiqhxb.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563554310/leatherpants_yiqhxb.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Leather Top",
            slug:"leather-top",
            deliveryWindow: 2,
            price: "1250.00",
            color: "leather",
            variants: [
                {color: 'Black', inventory: 1},
                {color: 'White', inventory: 4},
            ],
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563554310/leathertop_qflelf.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563554310/leathertop_qflelf.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Leather Top",
            slug:"leather-turtleneck",
            deliveryWindow: 2,
            price: "700.00",
            color: "plaid",
            variants: [
                {color: 'Black', inventory: 1},
                {color: 'White', inventory: 4},
            ],
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563556601/blacktop2_b5zrfc.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563556601/blacktop2_b5zrfc.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Zebra Coat",
            slug:"zebra-coat",
            deliveryWindow: 2,
            price: "600.00",
            color: "plaid",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563555131/zebracoat_nrfeam.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563555131/zebracoat_nrfeam.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"White Top",
            slug:"white-top",
            delivery_window_start: "2019-07-03 12:00:00",
            delivery_window_end: "2019-08-10 12:00:00",
            retail_price: "850.00",
            whole_sale_price: "550.00",
            color: "White",
            image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563556177/whitetop_j7fd0r.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563556177/whitetop_j7fd0r.png',
            variants: [
                "Cotton",
                "Dry Clean Only"
            ],
            sizes: ["XL", "XXL"],
            gender: "Women"
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"White Pants",
            slug:"white-pants",
            retail_price: "800.00",
            whole_sale_price: "500.00",
            delivery_window_start: "2019-07-03 12:00:00",
            delivery_window_end: "2019-08-10 12:00:00",
            color: "White",
            image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563555673/whitepants_x7isjv.png',
            trimmed_image:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563555673/whitepants_x7isjv.png',
            variants: [
                "Cotton",
                "Dry Clean Only"
            ],
            sizes: ["XXS", "XS", "S", "M", "L"],
            gender: "Women"
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            slug:"white-dress",
            description:"White Dress",
            deliveryWindow: 3,
            price: "800.00",
            color: "White",
            image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563546665/whitedress2_twxyqa.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563546665/whitedress2_twxyqa.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Black Dress ",
            slug:"black-dress",
            deliveryWindow: 3,
            price: "600.00",
            color: "plaid",
            image:'   https://res.cloudinary.com/cxn-fashion/image/upload/v1563552147/blackdress_yh5rsg.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563552147/blackdress_yh5rsg.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },

        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Fuzzy Vest",
            slug:"fuzzy-vest",
            deliveryWindow: 3,
            price: "1250.00",
            color: "plaid",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563547508/vest_q5rl9b.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563547508/vest_q5rl9b.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Black Pants",
            slug:"black-pants",
            deliveryWindow: 2,
            price: "700.00",
            color: "plaid",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563928049/blackpants_hjjoav.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563928049/blackpants_hjjoav.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Long Dress",
            slug:"long-dress",
            deliveryWindow: 2,
            price: "900.00",
            color: "Multi",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1563552957/longflow_hiwk7s.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1563552957/longflow_hiwk7s.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Brown Sweater",
            slug:"brown-sweater",
            deliveryWindow: 3,
            price: "600.00",
            color: "Multi",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1564242235/brownsweaterhanger_humjig.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1564242235/brownsweaterhanger_humjig.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Long Skirt",
            slug:"long-skirt",
            deliveryWindow: 3,
            price: "750.00",
            color: "Multi",
            image:'        https://res.cloudinary.com/cxn-fashion/image/upload/v1564242235/longskirt-hanger_rryerp.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10//v1564242235/longskirt-hanger_rryerp.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"White Skirt",
            slug:"white-skirt",
            deliveryWindow: 3,
            price: "750.00",
            color: "Multi",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1564242235/whiteskirthanger_uarv6o.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10//v1564242235/whiteskirthanger_uarv6o.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },
        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Pink Top",
            slug:"pink-top",
            deliveryWindow: 3,
            price: "750.00",
            color: "Multi",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1564328654/pinktophamger_tsxwt8.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1564328654/pinktophamger_tsxwt8.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },

        {
            id: uuid(),
            designer: "Phillip Lim",
            description:"Beige Sweater",
            slug:"beige-sweater",
            deliveryWindow: 3,
            price: "550.00",
            color: "Multi",
            image:'https://res.cloudinary.com/cxn-fashion/image/upload/v1564409909/beigesweaterhanger_braxwy.png',
            trimmedImage:'https://res.cloudinary.com/cxn-fashion/image/upload/e_trim:10/v1564409909/beigesweaterhanger_braxwy.png',
            sizes: ["XXS", "XS", "S", "M", "L", "XL",  "XXL"]
        },



    ];

    findItem = (slug) => {
        return items.find( (item) => { return item.slug == slug; })
    };

    if(slug) { return findItem(slug); }

    return items;

};

module.exports = MockItemsPL;

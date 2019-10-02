// models/collections-model.js

const { MOCK_CUE_DATA_PG, MOCK_CUE_DATA_PL } = require('./mock-cue-data');
const MockItems =  require('./mock-item-data.js');
const MockItemsPL =  require('./mock-item-data-pl.js');


// --------------- MOCK DATA ---------------- //
const products_mock_data = [
  {collectionId: 101, data: [{name: 'product_1_for_collection_101', id: 11}, {name: 'product_1_for_collection_101', id: 12}]},
  {collectionId: 102, data: [{name: 'product_1_for_collection_102', id: 13}, {name: 'product_2_for_collection_102', id: 14}]},
  {collectionId: 103, data: [{name: 'product_1_for_collection_103', id: 15}, {name: 'product_2_for_collection_103', id: 16}]},
]
const looks_mock_data = [
  {collectionId: 101, data: [{name: 'look_1_for_collection_101', id: 11}, {name: 'look_1_for_collection_101', id: 12}]},
  {collectionId: 102, data: [{name: 'look_1_for_collection_102', id: 13}, {name: 'look_2_for_collection_102', id: 14}]},
  {collectionId: 103, data: [{name: 'look_1_for_collection_103', id: 15}, {name: 'look_2_for_collection_103', id: 16}]},
]


const collections_mock_data = [
  {
    id: 2,
    collectionName: 'LORES',
    season: '_FW/19',
    link: '/test1',
    media: {
      primary_image: {
        default: 'https://res.cloudinary.com/cxn-fashion/image/upload/c_fill,h_792,q_100,w_1680/v1563318980/Philip%20Lim/PL_BESTOFSHOW_new_tgycgr_d3ceh9.jpg',
        red: 'https://res.cloudinary.com/cxn-fashion/image/upload/c_fill,h_792,q_100,w_1680/e_grayscale/e_auto_contrast/c_fill,e_multiply,h_792,l_red_with_multiply_sn711t,w_1680/v1563318980/Philip%20Lim/PL_BESTOFSHOW_new_tgycgr_d3ceh9.jpg',
      },
      video: {
        // mobile_src: 'https://content.jwplatform.com/videos/yEc8coR8-WnSObgvD.mp4',
        desktop_src: 'https://res.cloudinary.com/cxn-fashion/video/upload/v1563302536/Philip%20Lim/PL_BESTOFSHOW_new_tgycgr.mp4',
        cue_points: MOCK_CUE_DATA_PL
      }
    },
    designer: {
      id: 2,
      name: 'Phillip Lim ',
      description: 'I am the designer description',
      email: 'some@email.com',
      phone_number: '555-555-5555'
    },
    looks: [
      {
        id: 100,
        collection_id: 2,
        name: "Some Dress",
        images: [
          'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look01_gomj3m.jpg'
        ],
        videos: [],
        products: [
          MockItemsPL("trench-coat")
        ]
      },
      {
        id: 101,
        collection_id: 2,
        name: "Some White Pants and White Top",
        images: [],
        videos: [
          'https://res.cloudinary.com/cxn-fashion/video/upload/v1563302149/Philip%20Lim/Ecom_Sequence_5.1_ita9za.mp4'
        ],
        products:[
          MockItemsPL("white-pants"),
          MockItemsPL("white-top")
        ]
      },
      {
        id: 102,
        collection_id: 2,
        description: "White Top",
        name: "Some White Top",
        images: [
          'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look02_tz5qut.jpg'
        ], 
        products: [
          MockItemsPL("white-top")
        ]
      },
      {
        id: 103,
        collection_id: 3,
        description: "Grey Coat",
        name: "Some Grey Coat",
        images: [
          'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look03_zoytzx.jpg',
          'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look03_zoytzx.jpg',
          'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look03_zoytzx.jpg'
        ],
        products:[
          MockItemsPL("gray-coat")
        ]
      },
      // {id: 104, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303707/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look04_bog5z9.jpg'], products:[MockItemsPL("white-top")]},
      // {id: 104, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look05_h99pvl.jpg'], products:[MockItemsPL("white-pants")]},
      // {id: 104, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look06_ahmjqu.jpg'], products:[MockItemsPL("pink-top"),MockItemsPL("white-skirt") ]},
      // {id: 104, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303707/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look07_eux5rm.jpg'], products:[MockItemsPL("black-dress")]},
      // {id: 104, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303707/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look08_ldiwxr.jpg'], products:[MockItemsPL("white-pants")]},
      // {id: 105, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look09_xbujhv.jpg'], products:[MockItemsPL("leather-turtleneck"), MockItemsPL("leopard-skirt")]},
      // {id: 105, images: [], videos: ['https://res.cloudinary.com/cxn-fashion/video/upload/v1563302188/Philip%20Lim/Ecom_Sequence_4.1_vi95gu.mp4'], products:[MockItemsPL("leopard-skirt"), MockItemsPL("leopard-blazer"), MockItemsPL("leopard-pants")]},
      // {id: 105, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look10_hd8r4v.jpg'], products:[MockItemsPL("leopard-skirt"), MockItemsPL("leather-top")]},
      // {id: 105, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look11_i1jtwm.jpg'], products:[MockItemsPL("leopard-skirt"), MockItemsPL("white-top")]},
      // {id: 105, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303709/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look12_by221f.jpg'], products:[ MockItemsPL("white-top"),  MockItemsPL("white-pants")]},
      // {id: 105, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look13_kyaht4.jpg'], products:[MockItemsPL("brown-sweater"), MockItemsPL("white-skirt")]},
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303709/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look14_xbojbl.jpg'], products:[MockItemsPL("trench-coat")]},
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303710/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look15_be2huj.jpg'], products:[MockItemsPL("beige-sweater")]},
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303709/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look16_klgf3s.jpg'], products:[MockItemsPL("long-skirt")]},
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303709/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look17_nqehxr.jpg'], products:[MockItemsPL("black-pants")]},
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look18_ut9owa.jpg'], products:[MockItemsPL("trench-coat")]},
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look19_uf1fwf.jpg']},
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look20_xmqfbb.jpg'], products:[MockItemsPL("white-skirt")]},
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look21_jbkadb.jpg'], products:[MockItemsPL()[2]] },
      // {id: 106, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look22_thmsur.jpg'], products:[MockItemsPL()[2]]},
      // {id: 107, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303709/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look23_erclk7.jpg'], products:[MockItemsPL("white-dress"), MockItemsPL("gray-coat")]},
      // {id: 107, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303709/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look24_ijfx6n.jpg'], products:[MockItemsPL("white-dress")]},
      // {id: 107, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303710/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look25_pqxnoa.jpg'], products:[MockItemsPL("white-pants"), MockItemsPL("green-blazer")]},
      // {id: 107, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303710/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look26_hndcey.jpg'], products:[MockItemsPL("green-pants"), MockItemsPL("green-blazer")]},
      // {id: 107, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303710/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look27_e9n3fr.jpg'], products:[MockItemsPL("black-pants")]},
      // {id: 107, images: [], videos: ['https://res.cloudinary.com/cxn-fashion/video/upload/du_9,so_8/v1563302330/Philip%20Lim/PHILLIP_LIM_FW19_INSTA_FRONT_ROW_V2_ch1avz.mp4'], products:[MockItemsPL("green-pants"), MockItemsPL("green-blazer")]},
      // {id: 108, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303711/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look28_nearnz.jpg'], products:[MockItemsPL("zebra-coat")]},
      // {id: 108, images: [], videos: ['https://res.cloudinary.com/cxn-fashion/video/upload/v1563302196/Philip%20Lim/Ecom_Sequence_8.1_eyjmho.mp4'], products:[MockItemsPL("zebra-coat")]},
      // {id: 108, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303711/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look29_rhlzxl.jpg'], products:[MockItemsPL("zebra-coat")]},
      // {id: 108, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303711/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look30_kdgicr.jpg'], products:[MockItemsPL("black-coat")]},
      // {id: 108, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303711/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look31_juz6zy.jpg'], products:[MockItemsPL("black-dress")]},
      // {id: 108, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303711/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look32_uz00bq.jpg'], products:[MockItemsPL("zebra-coat")]},
      // {id: 108, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303711/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look33_k7hcdc.jpg'], products:[MockItemsPL("black-coat")]},
      // {id: 108, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303711/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look34_iirttq.jpg'], products:[MockItemsPL("brown-sweater")]},
      // {id: 108, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303712/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look35_ghdbi9.jpg'], products:[MockItemsPL()[2]]},
      // {id: 109, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303712/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look37_wnjkal.jpg'], products:[MockItemsPL("black-dress"), MockItemsPL("fuzzy-vest")]},
      // {id: 109, images: [], videos: ['https://res.cloudinary.com/cxn-fashion/video/upload/v1563302183/Philip%20Lim/Ecom_Sequence_7.1_gslysj.mp4'], products:[MockItemsPL("black-dress"), MockItemsPL("fuzzy-vest")]},
      // {id: 109, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303712/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look38_oe7gzi.jpg'], products:[MockItemsPL("black-dress"), MockItemsPL("fuzzy-vest")]},
      // {id: 109, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303712/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look39_yujk4o.jpg'], products:[MockItemsPL("black-dress"), MockItemsPL("fuzzy-vest")]},
      // {id: 109, images: ['https://res.cloudinary.com/cxn-fashion/image/upload/v1563303713/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look40_gqrfni.jpg'], products:[MockItemsPL("black-dress"), MockItemsPL("fuzzy-vest")]},
      // {id: 109, images: [], videos: ['https://res.cloudinary.com/cxn-fashion/video/upload/du_5.5,so_19.5/v1563302313/Philip%20Lim/PHILLIP_LIM_FW19_INSTA_ATMO_V2_bx6f7i.mp4'], products:[MockItemsPL("black-dress"), MockItemsPL("fuzzy-vest")]}
    ],
    themeBlack: false,
    perRow: 3
  },
  {
    id: 102,
    collectionName: 'FABRIK',
    season: '_FW/19',
    link: '/test3',
    media: {
      primary_image: {
        default: "https://res.cloudinary.com/cxn-fashion/image/upload/c_fill,h_792,q_100,w_1680/v1560449039/Prabal_2x1_1_eqbjz2.jpg",
        red: `https://res.cloudinary.com/cxn-fashion/image/upload/c_fill,h_792,q_100,w_1680/e_grayscale/e_auto_contrast/c_fill,e_multiply,h_792,l_red_with_multiply_sn711t,w_1680/v1560449039/Prabal_2x1_1_eqbjz2.jpg`
      },
      video: {
        // mobile_src: 'https://content.jwplatform.com/videos/yEc8coR8-WnSObgvD.mp4',
        desktop_src: 'https://res.cloudinary.com/cxn-fashion/video/upload/v1559755357/THE_CXN_JUJU_FILM_ASSETS_-_MAIN_nr76iq.mp4',
        cue_points: MOCK_CUE_DATA_PG,
      }
    },
    designer: {
      id: 102,
      name: 'Prabal Gurung',
      description: 'I am the designer description',
      email: 'some@email.com',
      phone_number: '555-555-5555'
    },
    looks: [
      {id: 100, image: '', video: 'https://res.cloudinary.com/cxn-fashion/video/upload/so_2/v1559755347/THE_CXN_JUJU_FILM_ASSETS_-_Look_1_wvuqxu.mp4', products: MockItems()[0]},
      {id: 100, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1670T00E10_01test_1500x_wadygn.jpg', products: MockItems()[0]},
      {id: 100, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1670T00E10_06_1500x_g2ellu.jpg', products: MockItems()[0]},
      {id: 100, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898928/W1670T00E10_13_1500x_tpvipj.jpg', products: MockItems()[0]},
      {id: 101, image: '', video: 'https://res.cloudinary.com/cxn-fashion/video/upload/so_1.5/v1559755346/THE_CXN_JUJU_FILM_ASSETS_-_Look_2_irn96f.mp4', products: MockItems()[1]},
      {id: 101, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1610T0N251_ACQUA_VERDE_11_1366x_ccbxnk.jpg', products: MockItems()[1]},
      {id: 101, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1610T0N251_ACQUA_VERDE_04_1366x_z6l6ck.jpg', products: MockItems()[1]},
      {id: 101, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1610T0N251_ACQUA_VERDE_16_1366x_rzdy2l.jpg', products: MockItems()[1]},
      {id: 103, image: '', video: 'https://res.cloudinary.com/cxn-fashion/video/upload/so_0.5/v1559755348/THE_CXN_JUJU_FILM_ASSETS_-_Look_3_vwvjke.mp4', products: MockItems()[2]},
      {id: 103, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1611T0N209_WHITE_01_1366x_wccekl.jpg', products: MockItems()[2]},
      {id: 103, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1611T0N209_WHITE_05_1366x_bls6a1.jpg', products: MockItems()[2]},
      {id: 103, image: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1611T0N209_WHITE_08_1366x_spx0xh.jpg', products: MockItems()[2]},
    ],
    themeBlack: false,
  }
]

// --------------- above can be deleted when using apis ---------------- //



// Instantiate a new object.
const Collection = {};

// Define methods for the Collections object

// Returns all Collections from the api
Collection.get_all = () => {

  // --------------- this will be an api call ---------------- //
  const collections = collections_mock_data
  // --------------- above can be deleted when using apis ---------------- //

  return new Promise((resolve) => {
    resolve({title: 'The Collections', collections});
  });
};

// Return one Collection_new by collection id
Collection.get_by_id = id => {
  // ---------------- this will be an api call ---------------- //
  const collection = collections_mock_data.find((collection) => collection.id == id);
  // --------------- above can be deleted when using apis ---------------- //
  return new Promise((resolve) => {
    if (collection) {
      resolve({title: 'The Collections', ...collection});
    } else {
      reject({statusCode: 404})
    }
  });
};

// Return all Products for one Collection_new by collection id
Collection.get_products = id => {
  // ---------------- this will be an api call ---------------- //
  const collection_data = collections_mock_data.find((collection) => collection.id == id);
  const products_data = products_mock_data.find((product) => product.collectionId == id);

  const collection = {
    ...collection_data,
    products: products_data ? products_data.data : []
  }
  // --------------- above can be deleted when using apis ---------------- //

  return new Promise((resolve) => {
    resolve({title: 'All Collection_new Products', collection});
  });
};

// Return all Looks for one Collection_new by collection id
Collection.get_looks = id => {
  // ---------------- this will be an api call ---------------- //
  const collection_data = collections_mock_data.find((collection) => collection.id == id);
  const looks_data = looks_mock_data.find((product) => product.collectionId == id);

  const collection = {
    ...collection_data,
    looks: looks_data ? looks_data.data : []
  }
  // --------------- above can be deleted when using apis ---------------- //

  return new Promise((resolve) => {
    resolve({title: 'All Collection_new Looks', collection});
  });
};

// Export the Collections object
module.exports = Collection;
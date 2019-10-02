
// --------------- MOCK DATA ---------------- //

const MOCK_CUE_DATA_PG = [
  {
    // time: 18.37, this is the old value in percentage
    time: "00:00:08",
    thumbnail: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1670T00E10_01test_1500x_wadygn.jpg',
    title:"Sequins Tee Dress",
    look_id: [100]
  },
  {
    // time: 51.02,
    time: "00:00:24",
    thumbnail: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1610T0N251_ACQUA_VERDE_11_1366x_ccbxnk.jpg',
    title:"Printed Frill",
    look_id: [101]
  },
  {
    // time: 71.43,
    time: "00:00:33",
    thumbnail: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563898927/W1611T0N209_WHITE_01_1366x_wccekl.jpg',
    title:"Lace Dress",
    look_id: [103]
  },
]

const MOCK_CUE_DATA_PL = [
  {
    // time: 3.0,
    time: "00:00:07",
    thumbnail: "https://res.cloudinary.com/cxn-fashion/image/upload/v1563303707/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look08_ldiwxr.jpg",
    title:"Sequence A",
    look_ids: [100, 101, 102]
  },
  {
    // time: 19.5,
    time: "00:00:48",
    thumbnail: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303708/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look09_xbujhv.jpg',
    title:"Sequence B",
    look_ids: [103]
  },
  // {
  //   // time: 30.2,
  //   time: "00:01:15",
  //   title:"Sequence C",
  //   thumbnail: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303706/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look18_ut9owa.jpg',
  //   look_id: [106]
  // },
  // {
  //   // time: 50.7,
  //   time: "00:02:04",
  //   title:"Sequence D",
  //   thumbnail: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303709/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look23_erclk7.jpg',
  //   look_id: [107]
  // },
  // {
  //   // time: 60.7,
  //   time: "00:02:29",
  //   title:"Sequence E",
  //   thumbnail: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303711/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look32_uz00bq.jpg',
  //   look_id: [108]
  // },
  // {
  //   // time: 80,
  //   time: "00:03:19",
  //   title:"Sequence F",
  //   thumbnail: 'https://res.cloudinary.com/cxn-fashion/image/upload/v1563303712/Philip%20Lim/Lores/PLim_FW19_Womens_lores_Look37_wnjkal.jpg',
  //   look_id: [109]
  // },
]

module.exports = Object.freeze({
  MOCK_CUE_DATA_PG,
  MOCK_CUE_DATA_PL
});
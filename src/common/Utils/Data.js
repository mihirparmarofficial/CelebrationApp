import { IMAGES } from './Images';

export const CategoryData = [
  {
    id: 1,
    title: 'Decoration Item',
  },
  {
    id: 2,
    title: 'Custom Decoration',
  },
  {
    id: 3,
    title: 'Room special',
  },
  {
    id: 4,
    title: 'Venue Decoration',
  },
];

export const AllCategoryData = [
  {
    id: 5,
    title: 'Kids Birthday',
    img: IMAGES.kid,
  },
  {
    id: 6,
    title: 'Classic Birthday',
    img: IMAGES.Classic,
  },
  { id: 7, title: 'Love Theme', img: IMAGES.Love },
  { id: 8, title: 'Baby Shower', img: IMAGES.BabyShower },
  {
    id: 9,
    title: 'Welcome Baby',
    img: IMAGES.Welcome,
  },
  { id: 10, title: 'Temple', img: IMAGES.Temple },
  {
    id: 11,
    title: 'Engagement',
    img: IMAGES.Engagement,
  },
  { id: 12, title: 'Room Decoration', img: IMAGES.RoomDecor },
];

export const SubCategoryData = [
  {
    id: 13,
    title: 'Blue Theme Party',
    img: IMAGES.SB1,
    price: 500.0,
    description:
      'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',
    // onPress: () => {
    //   navigation.navigate('CustomDecoration');
    // },
  },
  {
    id: 14,
    title: 'Pink Theme Party',
    img: IMAGES.SB2,
    price: 1500.0,
    description:
      'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',
  },
  {
    id: 15,
    title: 'Red Theme Party',
    img: IMAGES.SB3,
    price: 1000.0,
    description:
      'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',
  },
  {
    id: 16,
    title: 'Golden-Blue Theme',
    img: IMAGES.SB4,
    price: 2000.0,
    description:
      'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',

    // onPress: () => {
    //   navigation.navigate('OrderDetails');
    // },
  },
  {
    id: 17,
    title: 'Mickey Mouse Party',
    img: IMAGES.SB5,
    price: 2500.0,
    description:
      'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',
  },
  {
    id: 18,
    title: 'Pink Theme Party',
    img: IMAGES.SB6,
    price: 1600.0,
    description:
      'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',
  },
  {
    id: 19,
    title: 'Unicorn Theme Party',
    img: IMAGES.SB7,
    price: 2100.0,
    description:
      'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',
  },
  {
    id: 20,
    title: 'Unicorn Baloons',
    img: IMAGES.SB8,
    price: 1200.0,
    description:
      'Best birthday decoration ideas involve use of lights. Attractive party lights not only heighten the overall atmosphere.',
  },
];

export const TrendingData = [
  {
    id: 21,
    title: 'Baby Shower Decoration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: IMAGES.BabyShowerParty,
    price: 2000.0,
    btn: 'Order Now',
  },
  {
    id: 22,
    title: 'Marriage Decoration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: IMAGES.Marriage,
    price: 80000.0,
    btn: 'Order Now',
  },
  {
    id: 23,
    title: 'Valentine Room Decoration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: IMAGES.Valentine,
    price: 7000.0,
    btn: 'Order Now',
  },
  {
    id: 24,
    title: 'Birthday Decoration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: IMAGES.GBbirthday,
    price: 3000.0,
    btn: 'Order Now',
  },
  {
    id: 25,
    title: 'Marriage Decoration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: IMAGES.Marriage,
    price: 80000.0,
    btn: 'Order Now',
  },
  {
    id: 26,
    title: 'Valentine Room Decoration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: IMAGES.Valentine,
    price: 7000.0,
    btn: 'Order Now',
  },
  {
    id: 27,
    title: 'Birthday Decoration',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: IMAGES.GBbirthday,
    price: 3000.0,
    btn: 'Order Now',
  },
];

export const AllData = [
  ...AllCategoryData,
  ...SubCategoryData,
  ...TrendingData,
];

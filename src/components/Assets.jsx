import carousal1 from '../assets/carousel-1.webp';
import carousal2 from '../assets/carousel-2.webp';
import carousal3 from '../assets/carousel-3.webp';
import carousal4 from '../assets/carousel-4.webp';
import carousal5 from '../assets/carousel-5.webp';
import carousal6 from '../assets/carousel-6.webp';
import carousal7 from '../assets/carousel-7.webp';

import recipe1 from '../assets/recipe-1.webp';
import recipe2 from '../assets/recipe-2.webp';
import recipe3 from '../assets/recipe-3.webp';
import recipe4 from '../assets/recipe-4.webp';
import recipe5 from '../assets/recipe-5.webp';
import recipe6 from '../assets/recipe-6.webp';
import recipe7 from '../assets/recipe-7.webp';
import recipe8 from '../assets/recipe-8.webp';

import category1 from '../assets/category-1.webp'
import category2 from '../assets/category-2.webp'
import category3 from '../assets/category-3.webp'
import category4 from '../assets/category-4.webp'
import category5 from '../assets/category-5.webp'
import category6 from '../assets/category-6.webp'

import post1 from '../assets/post-1.webp';
import post2 from '../assets/post-2.webp';
import post3 from '../assets/post-3.webp';
import post4 from '../assets/post-4.webp';

export const slides = [
  {
    image: carousal1,
    tag: 'Hot Recipes',
    title: 'Spicy Chicken Wings',
    description: 'Crispy on the outside, juicy on the inside — these wings are tossed in a fiery buffalo glaze that hits every note of heat and flavor.',
    time: '30 Min',
    category: 'Chicken',
  },
  {
    image: carousal2,
    tag: "Chef's Special",
    title: 'Creamy Pasta Primavera',
    description: 'A rich and velvety pasta loaded with seasonal vegetables and tossed in a luscious cream sauce. Simple, elegant, and absolutely satisfying.',
    time: '25 Min',
    category: 'Pasta',
  },
  {
    image: carousal3,
    tag: 'Trending Now',
    title: 'Grilled Salmon Fillet',
    description: 'Perfectly seared salmon with a golden crust and tender, flaky interior. Finished with a zesty lemon herb butter that elevates every bite.',
    time: '20 Min',
    category: 'Seafood',
  },
  {
    image: carousal4,
    tag: 'Weekend Brunch',
    title: 'Avocado Toast Supreme',
    description: 'Smashed avocado on artisan sourdough, topped with poached eggs, chili flakes, and a drizzle of extra virgin olive oil. Brunch perfected.',
    time: '15 Min',
    category: 'Vegetarian',
  },
  {
    image: carousal5,
    tag: 'Fan Favourite',
    title: 'Classic Beef Burger',
    description: 'A towering smash burger with caramelized onions, melted cheddar, crisp lettuce, and house sauce — all stacked between a brioche bun.',
    time: '35 Min',
    category: 'Beef',
  },
  {
    image: carousal6,
    tag: 'Light & Fresh',
    title: 'Mediterranean Salad',
    description: 'Crisp cucumbers, ripe tomatoes, kalamata olives, and creamy feta tossed in a bright lemon oregano vinaigrette. Fresh and effortless.',
    time: '10 Min',
    category: 'Salad',
  },
  {
    image: carousal7,
    tag: 'Sweet Tooth',
    title: 'Molten Lava Cake',
    description: 'Warm dark chocolate cake with a gooey molten center, dusted with powdered sugar and served alongside a scoop of vanilla bean ice cream.',
    time: '25 Min',
    category: 'Dessert',
  },
];


export const recipes = [
  {
    img: recipe1,
    name: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 Minutes',
    category: 'Snack',
    color: 'from-white to-purple-100',
    favorite: true,
  },
  {
    img: recipe2,
    name: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    time: '30 Minutes',
    category: 'Fish',
    color: 'from-white to-orange-100',
    favorite: false,
  },
  {
    img: recipe3,
    name: 'Strawberry Oatmeal Pancake with Honey Syrup',
    time: '30 Minutes',
    category: 'Breakfast',
    color: 'from-white to-yellow-100',
    favorite: true,
  },
  {
    img: recipe4,
    name: 'Fresh and Healthy Mixed Mayonnaise Salad',
    time: '30 Minutes',
    category: 'Healthy',
    color: 'from-white to-green-100',
    favorite: false,
  },
  {
    img: recipe5,
    name: 'Chicken Meatballs with Cream Cheese',
    time: '30 Minutes',
    category: 'Meat',
    color: 'from-white to-red-100',
    favorite: true,
  },
  {
    img: recipe6,
    name: 'Fruity Pancake with Orange & Blueberry',
    time: '30 Minutes',
    category: 'Sweet',
    color: 'from-white to-blue-100',
    favorite: false,
  },
  {
    img: recipe7,
    name: 'The Best Easy One Pot Chicken and Rice',
    time: '30 Minutes',
    category: 'Snack',
    color: 'from-white to-amber-100',
    favorite: false,
  },
  {
    img: recipe8,
    name: 'The Creamiest Creamy Chicken and Bacon Pasta',
    time: '30 Minutes',
    category: 'Noodles',
    color: 'from-white to-slate-100',
    favorite: true,
  },
];

export const categories = [
  { img: category1, name: 'Breakfast', color: 'from-white to-yellow-100' },
  { img: category2, name: 'Vegan', color: 'from-white to-green-100' },
  { img: category3, name: 'Meat', color: 'from-white to-red-100' },
  { img: category4, name: 'Dessert', color: 'from-white to-pink-100' },
  { img: category5, name: 'Lunch', color: 'from-white to-orange-100' },
  { img: category6, name: 'Chocolate', color: 'from-white to-amber-100' },
];


export const posts = [
  { img: post1, alt: 'Vegetables Salad' },
  { img: post2, alt: 'Chocolate Pancake' },
  { img: post3, alt: 'Fresh Ingredients' },
  { img: post4, alt: 'Grilled Steak' },
];

export const navOptions = [
  { name: 'Home',     toLink: '/' },
  { name: 'Recipes',  toLink: '/recipes' },
  { name: 'Contact',  toLink: '/contact' },
  { name: 'About',    toLink: '/about' },
];
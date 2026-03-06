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
    calories: '340.5 kcal',
    fat: '18.2 g',
    protein: '22.1 g',
    carbohydrate: '28.4 g',
    cholesterol: '75.3 mg',
  },
  {
    img: recipe2,
    name: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    time: '30 Minutes',
    category: 'Fish',
    color: 'from-white to-orange-100',
    favorite: false,
    calories: '280.0 kcal',
    fat: '13.5 g',
    protein: '34.8 g',
    carbohydrate: '6.2 g',
    cholesterol: '89.0 mg',
  },
  {
    img: recipe3,
    name: 'Strawberry Oatmeal Pancake with Honey Syrup',
    time: '30 Minutes',
    category: 'Breakfast',
    color: 'from-white to-yellow-100',
    favorite: true,
    calories: '219.9 kcal',
    fat: '10.7 g',
    protein: '7.9 g',
    carbohydrate: '22.3 g',
    cholesterol: '37.4 mg',
  },
  {
    img: recipe4,
    name: 'Fresh and Healthy Mixed Mayonnaise Salad',
    time: '30 Minutes',
    category: 'Healthy',
    color: 'from-white to-green-100',
    favorite: false,
    calories: '150.2 kcal',
    fat: '8.4 g',
    protein: '4.1 g',
    carbohydrate: '14.7 g',
    cholesterol: '12.5 mg',
  },
  {
    img: recipe5,
    name: 'Chicken Meatballs with Cream Cheese',
    time: '30 Minutes',
    category: 'Meat',
    color: 'from-white to-red-100',
    favorite: true,
    calories: '410.3 kcal',
    fat: '24.6 g',
    protein: '31.2 g',
    carbohydrate: '12.8 g',
    cholesterol: '110.7 mg',
  },
  {
    img: recipe6,
    name: 'Fruity Pancake with Orange & Blueberry',
    time: '30 Minutes',
    category: 'Sweet',
    color: 'from-white to-blue-100',
    favorite: false,
    calories: '265.4 kcal',
    fat: '9.1 g',
    protein: '6.3 g',
    carbohydrate: '38.9 g',
    cholesterol: '44.2 mg',
  },
  {
    img: recipe7,
    name: 'The Best Easy One Pot Chicken and Rice',
    time: '30 Minutes',
    category: 'Snack',
    color: 'from-white to-amber-100',
    favorite: false,
    calories: '390.0 kcal',
    fat: '11.3 g',
    protein: '28.7 g',
    carbohydrate: '45.1 g',
    cholesterol: '68.9 mg',
  },
  {
    img: recipe8,
    name: 'The Creamiest Creamy Chicken and Bacon Pasta',
    time: '30 Minutes',
    category: 'Noodles',
    color: 'from-white to-slate-100',
    favorite: true,
    calories: '520.8 kcal',
    fat: '28.9 g',
    protein: '35.4 g',
    carbohydrate: '38.2 g',
    cholesterol: '95.6 mg',
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
  { name: 'Home', toLink: '/' },
  { name: 'Recipes', toLink: '/recipes' },
  { name: 'Contact', toLink: '/contact' },
  { name: 'About', toLink: '/about' },
];

export const steps = [
  { step: 1, task: 'Gather all ingredients and measure them out before you start cooking.' },
  { step: 2, task: 'Prepare and chop all vegetables, meats, or other ingredients as required.' },
  { step: 3, task: 'Heat your pan or oven to the recommended temperature before adding anything.' },
  { step: 4, task: 'Cook the main ingredients, stirring or flipping as needed until done.' },
  { step: 5, task: 'Season with salt, pepper, and spices to taste during the final stage.' },
  { step: 6, task: 'Plate the dish neatly, garnish if desired, and serve immediately while hot.' },
];

export const directions = [
  {
    step: 1,
    task: 'Prepare Your Ingredients',
    description: 'Start by thoroughly washing all vegetables under cold running water to remove any dirt or residue. Peel and chop them into uniform sizes so they cook evenly. Measure out all your spices, sauces, and liquids into small bowls beforehand — this is called mise en place and it makes the entire cooking process smoother, faster, and much less stressful once the heat is on.',
  },
  {
    step: 2,
    task: 'Marinate & Season',
    description: 'Combine your marinade ingredients in a bowl and coat your main protein or vegetables thoroughly, making sure every surface is covered. For best results, cover and refrigerate for at least 30 minutes, or overnight if time allows. The longer it rests, the deeper the flavors penetrate into the ingredient, resulting in a much more complex and satisfying taste once cooked.',
  },
  {
    step: 3,
    task: 'Heat the Pan or Oven',
    description: 'Place your skillet or pan on the stove over medium-high heat and allow it to warm up for at least 2 minutes before adding any oil. If using an oven, preheat it to the exact temperature specified in the recipe and give it enough time to fully reach that temperature. A properly heated cooking surface is the difference between a beautifully seared crust and a soggy, pale result that sticks to the pan.',
  },
  {
    step: 4,
    task: 'Cook the Main Ingredient',
    description: 'Carefully place your main ingredient into the hot pan and resist the urge to move it around immediately. Let it sit undisturbed for the first 3 to 4 minutes so a proper golden crust can form on the surface. Flip it only once using tongs or a spatula, then continue cooking on the other side until it reaches the desired internal temperature. Use a meat thermometer if needed to ensure it is fully and safely cooked through.',
  },
  {
    step: 5,
    task: 'Build the Sauce or Base',
    description: 'Without cleaning the pan, reduce the heat to medium and add your aromatics such as minced garlic, diced onions, or shallots directly into the leftover drippings. Sauté for 2 to 3 minutes until softened and fragrant. Then pour in your liquid — whether that is broth, cream, wine, or a prepared sauce — and use a wooden spoon to scrape up all the caramelized bits from the bottom of the pan, as these are packed with deep, concentrated flavor that will enrich your entire dish.',
  },
  {
    step: 6,
    task: 'Combine & Finish',
    description: 'Return all your cooked components back into the pan and gently toss or stir everything together so the sauce coats every piece evenly. Let it simmer together on low heat for another 3 to 5 minutes so the flavors can fully meld and come together. Taste the dish carefully at this stage and make any final adjustments — a pinch more salt, a crack of black pepper, a squeeze of fresh lemon juice, or a small knob of butter stirred in at the end can completely transform and elevate the final flavor.',
  },
  {
    step: 7,
    task: 'Plate & Serve',
    description: 'Warm your serving plates in the oven for a minute or two before plating so the food stays hot longer at the table. Spoon or arrange the dish carefully in the center of the plate, building height and structure for visual appeal. Finish with a drizzle of sauce, a scatter of fresh herbs like parsley or basil, or a light dusting of spice for color. Serve immediately so your guests enjoy the dish at its absolute best — hot, fresh, and full of flavor.',
  },
];
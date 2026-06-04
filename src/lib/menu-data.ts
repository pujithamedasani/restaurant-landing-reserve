export type DietType = "veg" | "non-veg" | "seafood" | "egg";

export interface MenuItem {
  name: string;
  price: number;
  diet: DietType;
  popular?: boolean;
  chef?: boolean;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export const chefRecommendations: MenuItem[] = [
  { name: "Chicken Dum Biryani", price: 329, diet: "non-veg", chef: true, popular: true, description: "Slow-cooked basmati with succulent chicken & royal spices." },
  { name: "Mutton Dum Biryani", price: 459, diet: "non-veg", chef: true, popular: true, description: "Tender mutton layered with saffron-kissed long-grain rice." },
  { name: "Potlam Biryani", price: 449, diet: "non-veg", chef: true, description: "Sealed-pouch biryani opened tableside for full aroma." },
  { name: "Ulavacharu Chicken Biryani", price: 459, diet: "non-veg", chef: true, description: "Andhra horse-gram soul on every grain of rice." },
  { name: "Gongura Mutton Biryani", price: 519, diet: "non-veg", chef: true, description: "Tangy gongura leaves elevate slow-cooked mutton." },
  { name: "Dakshina Ruchulu Royyala Biryani", price: 599, diet: "seafood", chef: true, popular: true, description: "House-signature prawns biryani — coastal & regal." },
  { name: "Apollo Fish", price: 379, diet: "seafood", chef: true, description: "Crispy chilli-fried fish — a Hyderabadi favourite." },
  { name: "Chicken Majestic", price: 339, diet: "non-veg", chef: true, description: "Golden boneless chicken with curry leaves & green chilli." },
  { name: "Mutton Ghee Roast", price: 529, diet: "non-veg", chef: true, description: "Slow-roasted mutton, ghee & coastal masala." },
  { name: "Paneer Majestic", price: 259, diet: "veg", chef: true, description: "Crispy paneer tossed in spicy-sweet majestic sauce." },
];

export const menu: MenuCategory[] = [
  {
    id: "biryani",
    name: "Signature Biryanis",
    description: "The heart of Dakshina Ruchulu — dum-cooked, layered, unforgettable.",
    items: [
      { name: "Veg Biryani", price: 259, diet: "veg" },
      { name: "Paneer Biryani", price: 289, diet: "veg" },
      { name: "Cashew Biryani", price: 289, diet: "veg" },
      { name: "Guti Vankaya Biryani", price: 329, diet: "veg" },
      { name: "Chicken Dum Biryani", price: 329, diet: "non-veg", popular: true, chef: true },
      { name: "Chicken Fry Biryani", price: 359, diet: "non-veg" },
      { name: "Lollipop Biryani", price: 389, diet: "non-veg" },
      { name: "SP Chicken Biryani", price: 389, diet: "non-veg" },
      { name: "Ulavacharu Chicken Biryani", price: 459, diet: "non-veg", chef: true },
      { name: "Mutton Dum Biryani", price: 459, diet: "non-veg", popular: true, chef: true },
      { name: "Mutton Kheema Biryani", price: 559, diet: "non-veg" },
      { name: "Mutton Boneless Biryani", price: 529, diet: "non-veg" },
      { name: "Gongura Mutton Biryani", price: 519, diet: "non-veg", chef: true },
      { name: "Chinta Chiguru Biryani", price: 519, diet: "non-veg" },
      { name: "Shahi Gosh Biryani", price: 599, diet: "non-veg" },
      { name: "Prawn Biryani", price: 429, diet: "seafood" },
      { name: "Gongura Prawn Biryani", price: 459, diet: "seafood" },
      { name: "Prawn Kheema Biryani", price: 469, diet: "seafood" },
      { name: "Dakshina Ruchulu Royyala Biryani", price: 599, diet: "seafood", chef: true, popular: true },
      { name: "Family Pack Chicken Dum", price: 679, diet: "non-veg", popular: true },
      { name: "Family Pack Mutton Biryani", price: 859, diet: "non-veg" },
    ],
  },
  {
    id: "house-special",
    name: "Dakshina Ruchulu Specials",
    description: "Regional treasures from across coastal Andhra.",
    items: [
      { name: "Mummidivaram Puttagodugula Vepudu", price: 389, diet: "non-veg", chef: true },
      { name: "Konaseema Karam Paneer Bajji", price: 329, diet: "veg" },
      { name: "Amalapuram Palle Paneer", price: 389, diet: "veg" },
      { name: "Ponnur Babycorn Vellulikaram", price: 349, diet: "veg" },
      { name: "Mutton Ghee Roast", price: 529, diet: "non-veg", chef: true, popular: true },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      { name: "Chicken Manchow", price: 129, diet: "non-veg" },
      { name: "Hot & Sour", price: 129, diet: "veg" },
      { name: "Tomato Soup", price: 129, diet: "veg" },
      { name: "Lemon Coriander", price: 129, diet: "veg" },
      { name: "Sweet Corn", price: 129, diet: "veg" },
      { name: "Dragon Soup", price: 129, diet: "non-veg" },
      { name: "Tom Not Soup", price: 159, diet: "non-veg" },
      { name: "Mutton Soup", price: 209, diet: "non-veg" },
    ],
  },
  {
    id: "veg-appetizers",
    name: "Veg Appetizers",
    items: [
      { name: "Veg Manchuria", price: 219, diet: "veg" },
      { name: "RR Veg", price: 249, diet: "veg" },
      { name: "Mushroom Manchuria", price: 259, diet: "veg" },
      { name: "Mushroom 65", price: 259, diet: "veg" },
      { name: "Mushroom Chilly", price: 259, diet: "veg" },
      { name: "Baby Corn 65", price: 239, diet: "veg" },
      { name: "Crispy Corn", price: 239, diet: "veg" },
      { name: "Paneer Majestic", price: 259, diet: "veg", popular: true, chef: true },
      { name: "Sesame Paneer", price: 259, diet: "veg" },
    ],
  },
  {
    id: "non-veg-appetizers",
    name: "Non-Veg Appetizers",
    items: [
      { name: "Chicken Manchurian", price: 249, diet: "non-veg" },
      { name: "Chilli Chicken", price: 259, diet: "non-veg" },
      { name: "Dragon Chicken", price: 279, diet: "non-veg" },
      { name: "Chicken Majestic", price: 339, diet: "non-veg", popular: true, chef: true },
      { name: "Chicken Lollipop", price: 399, diet: "non-veg" },
      { name: "Honey Chicken", price: 329, diet: "non-veg" },
      { name: "Butter Garlic Chicken", price: 329, diet: "non-veg" },
      { name: "Black Bean Chicken", price: 349, diet: "non-veg" },
      { name: "Sesame Chicken", price: 359, diet: "non-veg" },
      { name: "Crunchy Chicken", price: 359, diet: "non-veg" },
      { name: "Thread Chicken", price: 359, diet: "non-veg" },
    ],
  },
  {
    id: "fish",
    name: "Fish Appetizers",
    items: [
      { name: "Apollo Fish", price: 379, diet: "seafood", popular: true, chef: true },
      { name: "Chilli Fish", price: 379, diet: "seafood" },
      { name: "Butter Garlic Fish", price: 389, diet: "seafood" },
      { name: "Fish Finger", price: 419, diet: "seafood" },
      { name: "Crispy Fish Masala", price: 399, diet: "seafood" },
    ],
  },
  {
    id: "prawns",
    name: "Prawns Appetizers",
    items: [
      { name: "Loose Prawns", price: 429, diet: "seafood" },
      { name: "Butter Garlic Prawns", price: 429, diet: "seafood" },
      { name: "Dragon Prawns", price: 439, diet: "seafood" },
      { name: "Crispy Fried Prawns", price: 439, diet: "seafood" },
    ],
  },
  {
    id: "egg",
    name: "Egg Appetizers",
    items: [
      { name: "Chilli Egg", price: 219, diet: "egg" },
      { name: "Egg Manchurian", price: 219, diet: "egg" },
      { name: "Egg 65", price: 219, diet: "egg" },
    ],
  },
  {
    id: "tandoori",
    name: "Tandoori Specials",
    items: [
      { name: "Paneer Tikka", price: 329, diet: "veg" },
      { name: "Malai Paneer Tikka", price: 329, diet: "veg" },
      { name: "Mushroom Tikka", price: 329, diet: "veg" },
      { name: "Malai Broccoli Tikka", price: 359, diet: "veg" },
      { name: "Chicken Tikka", price: 329, diet: "non-veg" },
      { name: "Hariyali Chicken", price: 339, diet: "non-veg" },
      { name: "Achari Chicken", price: 359, diet: "non-veg" },
      { name: "Murgh Malai Tikka", price: 339, diet: "non-veg" },
      { name: "Murgh Angara Tikka", price: 349, diet: "non-veg" },
      { name: "Tandoori Half", price: 359, diet: "non-veg" },
      { name: "Tandoori Full", price: 519, diet: "non-veg" },
    ],
  },
  {
    id: "veg-curries",
    name: "Veg Curries",
    items: [
      { name: "Palak Paneer", price: 339, diet: "veg" },
      { name: "Paneer Butter Masala", price: 349, diet: "veg", popular: true },
      { name: "Kadai Paneer", price: 319, diet: "veg" },
      { name: "Kaju Tomato", price: 329, diet: "veg" },
      { name: "Kaju Paneer", price: 329, diet: "veg" },
      { name: "Methi Chaman", price: 329, diet: "veg" },
      { name: "Mushroom Masala", price: 319, diet: "veg" },
      { name: "Veg Kofta", price: 329, diet: "veg" },
    ],
  },
  {
    id: "non-veg-curries",
    name: "Non-Veg Curries",
    items: [
      { name: "Andhra Chicken", price: 329, diet: "non-veg" },
      { name: "Kadai Chicken", price: 339, diet: "non-veg" },
      { name: "Chicken Kolhapuri", price: 339, diet: "non-veg" },
      { name: "Butter Chicken", price: 369, diet: "non-veg", popular: true },
      { name: "Murgh Masala", price: 349, diet: "non-veg" },
      { name: "Mutton Curry", price: 389, diet: "non-veg" },
      { name: "Gongura Mutton", price: 419, diet: "non-veg" },
      { name: "Chicken Tikka Masala", price: 359, diet: "non-veg" },
      { name: "Chicken Chettinad", price: 359, diet: "non-veg" },
    ],
  },
  {
    id: "rice-bowls",
    name: "Rice Bowls",
    items: [
      { name: "Curd Rice", price: 109, diet: "veg" },
      { name: "Kashmir Curd Rice", price: 199, diet: "veg" },
      { name: "Kaju Curd Rice", price: 159, diet: "veg" },
    ],
  },
  {
    id: "fried-rice-noodles",
    name: "Fried Rice & Noodles",
    items: [
      { name: "Veg Fried Rice", price: 259, diet: "veg" },
      { name: "Paneer Fried Rice", price: 279, diet: "veg" },
      { name: "Kaju Fried Rice", price: 279, diet: "veg" },
      { name: "Egg Fried Rice", price: 289, diet: "egg" },
      { name: "Chicken Fried Rice", price: 299, diet: "non-veg" },
      { name: "Special Chicken Fried Rice", price: 339, diet: "non-veg" },
      { name: "Mixed Fried Rice", price: 399, diet: "non-veg" },
      { name: "Veg Soft Noodles", price: 329, diet: "veg" },
      { name: "Schezwan Noodles", price: 339, diet: "veg", popular: true },
    ],
  },
  {
    id: "breads",
    name: "Indian Breads",
    items: [
      { name: "Pulka", price: 39, diet: "veg" },
      { name: "Roti", price: 39, diet: "veg" },
      { name: "Butter Roti", price: 39, diet: "veg" },
      { name: "Plain Naan", price: 49, diet: "veg" },
      { name: "Butter Naan", price: 69, diet: "veg", popular: true },
      { name: "Garlic Naan", price: 79, diet: "veg", popular: true },
      { name: "Lacha Naan", price: 69, diet: "veg" },
      { name: "Masala Kulcha", price: 89, diet: "veg" },
      { name: "Mughlai Naan", price: 89, diet: "veg" },
      { name: "Kashmir Naan", price: 119, diet: "veg" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Single Scoop Ice Cream", price: 129, diet: "veg" },
      { name: "Apricot Delight", price: 159, diet: "veg" },
      { name: "Fruit Salad with Ice Cream", price: 179, diet: "veg" },
      { name: "Ice Cream with Gulab Jamun", price: 159, diet: "veg", popular: true },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { name: "Buttermilk", price: 49, diet: "veg" },
      { name: "Sweet Lassi", price: 69, diet: "veg" },
      { name: "Salt Lassi", price: 59, diet: "veg" },
      { name: "Coriander Buttermilk", price: 69, diet: "veg" },
      { name: "Fresh Lime Soda", price: 99, diet: "veg" },
      { name: "Jeera Masala", price: 50, diet: "veg" },
      { name: "Sprite", price: 20, diet: "veg" },
      { name: "Thums Up", price: 20, diet: "veg" },
    ],
  },
];

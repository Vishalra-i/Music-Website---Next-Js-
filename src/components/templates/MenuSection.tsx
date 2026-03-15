import type { JSX } from "react";
import DishCard from "@/components/templates/DishCard";

type MenuDish = {
  name: string;
  price: string;
};

type MenuCategory = {
  category: "Starters" | "Main Course" | "Chinese" | "Biryani" | "Desserts" | "Drinks";
  dishes: MenuDish[];
};

// Restaurant demos always use a fixed menu structure for reliable showcase output.
const restaurantMenu: MenuCategory[] = [
  {
    category: "Starters",
    dishes: [
      { name: "Crispy Veg Spring Rolls", price: "₹180" },
      { name: "Paneer Tikka Skewers", price: "₹240" },
      { name: "Chicken Lollipop", price: "₹260" },
      { name: "Chilli Garlic Potatoes", price: "₹190" },
    ],
  },
  {
    category: "Main Course",
    dishes: [
      { name: "Paneer Butter Masala", price: "₹290" },
      { name: "Dal Tadka", price: "₹210" },
      { name: "Butter Chicken", price: "₹340" },
      { name: "Veg Kolhapuri", price: "₹250" },
    ],
  },
  {
    category: "Chinese",
    dishes: [
      { name: "Hakka Noodles", price: "₹220" },
      { name: "Schezwan Fried Rice", price: "₹230" },
      { name: "Chilli Paneer", price: "₹260" },
      { name: "Manchurian Gravy", price: "₹240" },
    ],
  },
  {
    category: "Biryani",
    dishes: [
      { name: "Chicken Dum Biryani", price: "₹320" },
      { name: "Hyderabadi Veg Biryani", price: "₹270" },
      { name: "Mutton Biryani", price: "₹390" },
      { name: "Paneer Tikka Biryani", price: "₹300" },
    ],
  },
  {
    category: "Desserts",
    dishes: [
      { name: "Chocolate Brownie", price: "₹170" },
      { name: "Gulab Jamun", price: "₹120" },
      { name: "Rasmalai", price: "₹140" },
      { name: "Ice Cream Sundae", price: "₹160" },
    ],
  },
  {
    category: "Drinks",
    dishes: [
      { name: "Fresh Lime Soda", price: "₹110" },
      { name: "Cold Coffee", price: "₹150" },
      { name: "Mint Mojito", price: "₹140" },
      { name: "Masala Buttermilk", price: "₹100" },
    ],
  },
];

export function getFoodImage(category: string): string {
  const imageQueryMap: Record<string, string> = {
    starters: "restaurant-appetizers-hd",
    "main course": "restaurant-main-course",
    chinese: "chinese-food",
    biryani: "biryani",
    desserts: "dessert",
    drinks: "mocktail-drinks",
  };

  const key = category.toLowerCase();
  const query = imageQueryMap[key] || "restaurant-food";

  return `https://source.unsplash.com/featured/?${encodeURIComponent(query)}`;
}

export default function MenuSection(): JSX.Element {
  return (
    <section id="menu" className="mx-auto w-full max-w-6xl px-4 py-12">
      <h2 className="text-3xl font-bold text-stone-900">Our Menu</h2>
      <p className="mt-2 text-stone-600">Automatically curated demo menu with category-based HD food imagery.</p>

      <div className="mt-8 space-y-10">
        {restaurantMenu.map((menuCategory) => {
          const image = getFoodImage(menuCategory.category);

          return (
            <div key={menuCategory.category}>
              <h3 className="text-2xl font-semibold text-stone-900">{menuCategory.category}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {menuCategory.dishes.map((dish) => (
                  <DishCard
                    key={`${menuCategory.category}-${dish.name}`}
                    name={dish.name}
                    price={dish.price}
                    image={image}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

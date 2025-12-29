export interface MenuItem {
  name: string
  desc: string
  price: string
  tags?: string[]
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      {
        name: "Bruschetta al Pomodoro",
        desc: "Toasted bread with fresh tomatoes, garlic, basil, and extra virgin olive oil",
        price: "$9",
        tags: ["V"],
      },
      {
        name: "Calamari Fritti",
        desc: "Lightly fried squid served with marinara sauce and lemon",
        price: "$14",
      },
      {
        name: "Caprese Salad",
        desc: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
        price: "$12",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "mains",
    label: "Main Courses",
    items: [
      {
        name: "Lasagna della Nonna",
        desc: "Our signature recipe with layers of pasta, meat sauce, béchamel, and cheese",
        price: "$18",
      },
      {
        name: "Spaghetti Carbonara",
        desc: "Classic Roman pasta with eggs, pecorino cheese, guanciale, and black pepper",
        price: "$16",
      },
      {
        name: "Eggplant Parmigiana",
        desc: "Breaded eggplant layered with marinara, mozzarella, and parmesan",
        price: "$15",
        tags: ["V"],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Tiramisu",
        desc: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
        price: "$8",
      },
      {
        name: "Panna Cotta",
        desc: "Silky vanilla custard topped with berry compote",
        price: "$7",
        tags: ["GF"],
      },
      {
        name: "Cannoli Siciliani",
        desc: "Crispy shells filled with sweet ricotta and chocolate chips",
        price: "$7",
      },
    ],
  },
  {
    id: "drinks",
    label: "Beverages",
    items: [
      {
        name: "Italian Espresso",
        desc: "Strong and bold coffee shot",
        price: "$3",
      },
      {
        name: "House Wine",
        desc: "Red or white wine by the glass",
        price: "$8",
      },
      {
        name: "San Pellegrino",
        desc: "Sparkling mineral water",
        price: "$4",
      },
    ],
  },
]

import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { ingredients } from "@/DB/schema";

dotenv.config({
  path: "./.env.local",
});

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined")
}

const db = drizzle(process.env.DATABASE_URL);

async function seedIngredients() {
  const dairyIngredients = [
    {
      userId: "default",
      categoryId: 11,
      description: "Burrata",
      sugar: "2.00",
      fat: "23.00",
      slng: "10.00",
      altriSolidi: "1.40",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Burro",
      sugar: "0.00",
      fat: "84.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "1.00",
      pac: "5.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Burro anidro",
      sugar: "0.00",
      fat: "99.00",
      slng: "0.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Caseina",
      sugar: "0.00",
      fat: "0.00",
      slng: "100.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Crema al Latte 18%",
      sugar: "0.00",
      fat: "18.00",
      slng: "6.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Crème fraiche",
      sugar: "0.00",
      fat: "35.00",
      slng: "5.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Emmental",
      sugar: "0.00",
      fat: "31.00",
      slng: "31.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Essenza di formaggio CBT",
      sugar: "1.00",
      fat: "15.00",
      slng: "3.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Formaggio Spalmabile",
      sugar: "4.30",
      fat: "21.00",
      slng: "5.40",
      altriSolidi: "1.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Formaggio Spalmabile Senza Lattosio",
      sugar: "3.00",
      fat: "27.00",
      slng: "4.50",
      altriSolidi: "1.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Gorgonzola",
      sugar: "0.00",
      fat: "29.00",
      slng: "28.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte Condensato Zuccherato Intero",
      sugar: "43.00",
      fat: "9.00",
      slng: "22.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte Condensato Zuccherato Magro",
      sugar: "52.00",
      fat: "0.00",
      slng: "27.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte di Bufala",
      sugar: "0.00",
      fat: "8.50",
      slng: "10.30",
      altriSolidi: "3.80",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte di Capra",
      sugar: "0.00",
      fat: "4.20",
      slng: "9.80",
      altriSolidi: "3.60",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte di Pecora",
      sugar: "0.00",
      fat: "6.50",
      slng: "11.00",
      altriSolidi: "6.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte Evaporato Intero",
      sugar: "0.00",
      fat: "8.00",
      slng: "18.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte Evaporato Magro",
      sugar: "0.00",
      fat: "0.00",
      slng: "32.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte in Polvere 11% Grassi",
      sugar: "0.00",
      fat: "11.00",
      slng: "89.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte in Polvere 22% Grassi",
      sugar: "0.00",
      fat: "22.00",
      slng: "78.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte in Polvere Magro",
      sugar: "0.00",
      fat: "1.00",
      slng: "96.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "2.00",
      pac: "6.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte Intero",
      sugar: "0.00",
      fat: "3.60",
      slng: "9.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "20.00",
      pac: "65.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte Parzialmente Scremato",
      sugar: "0.00",
      fat: "1.80",
      slng: "9.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "20.00",
      pac: "65.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Latte Scremato",
      sugar: "0.00",
      fat: "0.00",
      slng: "9.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "20.00",
      pac: "65.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Mascarpone",
      sugar: "5.00",
      fat: "47.00",
      slng: "11.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Mozzarella di bufala",
      sugar: "0.00",
      fat: "24.50",
      slng: "7.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Panna 25%",
      sugar: "0.00",
      fat: "25.00",
      slng: "16.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "4.00",
      pac: "20.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Panna 30%",
      sugar: "0.00",
      fat: "30.00",
      slng: "6.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "4.00",
      pac: "20.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Panna 35%",
      sugar: "0.00",
      fat: "35.00",
      slng: "6.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "4.00",
      pac: "20.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Panna 40%",
      sugar: "0.00",
      fat: "40.00",
      slng: "5.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "4.00",
      pac: "20.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Panna 45%",
      sugar: "0.00",
      fat: "45.00",
      slng: "5.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "4.00",
      pac: "20.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Parmigiano",
      sugar: "0.00",
      fat: "28.00",
      slng: "43.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Proteine del siero del latte 80%",
      sugar: "0.00",
      fat: "0.00",
      slng: "100.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Ricotta",
      sugar: "3.50",
      fat: "10.00",
      slng: "8.50",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "10.00",
      pac: "20.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Ricotta di Bufala",
      sugar: "3.30",
      fat: "20.00",
      slng: "8.50",
      altriSolidi: "2.50",
      bilanciaSuLiquidi: false,
      pod: "10.00",
      pac: "20.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Ricotta di Pecora",
      sugar: "3.50",
      fat: "25.00",
      slng: "8.50",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: "10.00",
      pac: "20.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Roquefort",
      sugar: "0.00",
      fat: "32.00",
      slng: "23.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Taleggio",
      sugar: "0.00",
      fat: "25.00",
      slng: "19.00",
      altriSolidi: "2.20",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Uova (Albume)",
      sugar: "0.00",
      fat: "0.00",
      slng: "0.00",
      altriSolidi: "15.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Uova (Tuorlo 1=20gr)",
      sugar: "0.00",
      fat: "32.00",
      slng: "0.00",
      altriSolidi: "18.00",
      bilanciaSuLiquidi: false,
      pod: "2.00",
      pac: "13.00",
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Uova (Tuorlo Essiccato)",
      sugar: "0.00",
      fat: "66.00",
      slng: "0.00",
      altriSolidi: "34.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Yogurt Greco",
      sugar: "4.00",
      fat: "10.00",
      slng: "10.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Yogurt Intero 3,5%",
      sugar: "5.00",
      fat: "3.60",
      slng: "10.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Yogurt Magro 1%",
      sugar: "5.00",
      fat: "1.00",
      slng: "10.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
    {
      userId: "default",
      categoryId: 11,
      description: "Zincarlin",
      sugar: "3.00",
      fat: "25.00",
      slng: "10.00",
      altriSolidi: "0.00",
      bilanciaSuLiquidi: false,
      pod: null,
      pac: null,
      minPercentage: null,
      maxPercentage: null,
      foodCostForKg: null,
    },
  ];

  try {
    await db.insert(ingredients).values(dairyIngredients);
    console.log("Dairy ingredients seeded successfully");
  } catch (error) {
    console.error("Error seeding dairy ingredients:", error);
  }
}

seedIngredients();

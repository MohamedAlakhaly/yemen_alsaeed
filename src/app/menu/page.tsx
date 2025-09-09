"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; // تأكد من مسار firebase config
import ProductsCard from "@/components/card/ProductsCard";
import Navbar from "@/components/navbar/Navbar";
import { Flame, IceCream, UtensilsCrossed, Coffee, Fish, Soup } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  time: string;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const categories = [
  { name: "All", icon: Flame }, // إضافة All لعرض كل المنتجات
  { name: "Popular", icon: Flame },
  { name: "Curry", icon: IceCream },
  { name: "Ramen", icon: Soup },
  { name: "Tepanyaki", icon: UtensilsCrossed },
  { name: "Donburi", icon: Coffee },
  { name: "Sushi", icon: Fish },
  { name: "Noodles", icon: Soup },
];

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (category: string) => {
    setLoading(true);
    try {
      let q;
      if (category === "All") {
        q = query(collection(db, "menu"));
      } else {
        q = query(collection(db, "menu"), where("category", "==", category));
      }
      const querySnapshot = await getDocs(q);
      const items: Product[] = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as Product);
      });
      setProducts(items);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen container mx-auto bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      <Navbar />
      <div className="pt-16"></div>

      {/* Categories */}
      <div className="py-6 flex items-center justify-around gap-6 flex-wrap">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.name}
              className={`flex flex-col items-center cursor-pointer group ${
                activeCategory === cat.name ? "text-primary" : ""
              }`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full transition ${
                  activeCategory === cat.name
                    ? "bg-primary/20 text-primary"
                    : "bg-muted/30 group-hover:bg-primary/20"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  activeCategory === cat.name ? "text-primary" : "group-hover:text-primary"
                }`}
              >
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Products Grid */}
      <div className="px-6 pb-10">
        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-muted-foreground">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((item) => (
              <ProductsCard
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                time={item.time}
                isNew={item.isNew}
                isPopular={item.isPopular}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

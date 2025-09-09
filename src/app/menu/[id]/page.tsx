"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "../../firebaseConfig"; // ✅ عدل المسار إذا غير
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  Clock,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ProductsCard from "@/components/card/ProductsCard";

// ✅ تعريف النوع بشكل واضح
interface Product {
  id: string;
  name: string;
  price: number;
  time: string;
  image: string;
  category: string;
  description?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string; // id من الـ URL

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isFav, setIsFav] = useState(false);

  // 🔹 تحميل المنتج من Firestore
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "menu", productId);
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          const data = { id: snap.id, ...(snap.data() as Omit<Product, "id">) };
          setProduct(data);

          // ✅ جلب منتجات مشابهة حسب القسم
          if (data.category) {
            const q = query(
              collection(db, "menu"),
              where("category", "==", data.category)
            );
            const relatedSnap = await getDocs(q);
            const relatedData: Product[] = relatedSnap.docs
              .map(
                (d) => ({ id: d.id, ...(d.data() as Omit<Product, "id">) }) // cast صح
              )
              .filter((p) => p.id !== snap.id);
            setRelatedProducts(relatedData);
          }
        } else {
          router.push("/menu");
        }
      } catch (err) {
        console.error("❌ Error fetching product:", err);
        router.push("/menu");
      }
    };

    fetchProduct();
  }, [productId, router]);

  if (!product) {
    return <p className="p-10">⏳ Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* زر العودة */}
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Menu
        </Button>

        {/* تفاصيل المنتج */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* صورة المنتج */}
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-muted/30 border p-8 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full max-w-md h-auto object-contain"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isPopular && (
                <Badge className="bg-primary text-primary-foreground">
                  Popular
                </Badge>
              )}
              {product.isNew && (
                <Badge className="bg-green-500 text-white">New</Badge>
              )}
            </div>
          </motion.div>

          {/* معلومات المنتج */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              {product.time && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{product.time}</span>
                </div>
              )}
            </div>

            <p className="text-2xl font-bold mb-6">€{product.price}</p>

            {product.description && (
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>
            )}

            {/* الكمية + زر السلة */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="flex items-center border rounded-full overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none h-10 w-10"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none h-10 w-10"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button className="flex-1 gap-2" size="lg">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`h-12 w-12 rounded-full ${
                  isFav ? "text-red-500" : ""
                }`}
                onClick={() => setIsFav(!isFav)}
              >
                <Heart className={`h-5 w-5 ${isFav ? "fill-current" : ""}`} />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* منتجات مشابهة */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductsCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  time={p.time}
                  image={p.image}
                  isPopular={p.isPopular}
                  isNew={p.isNew}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "../../firebaseConfig";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ✅ تعريف النوع بشكل واضح
interface Product {
  id: string;
  name: string;
  price: number;
  time: string;
  image: string;
  category: string;
  description?: string;
  ingredients?: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string; // id من الـ URL

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);


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
            className="relative rounded-2xl  bg-muted/30 border p-8 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="h-96 w-full max-w-md object-contain"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4">
                <Badge className="bg-white text-black font-bold text-sm">
                  {product.category}
                </Badge>
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

            <p className="text-2xl font-bold mb-6">€{product.price.toFixed(2)} </p>

            {product.description && (
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>
            )}

            {product.ingredients && product.ingredients.length > 0 && (
              <div>
                <p className="text-xl font-medium mb-6">Ingredients</p>
                <div className="mb-8 flex gap-5">
                  {product.ingredients.map((item: string, index: number) => (
                    <p className="bg-muted/30 px-5 py-1 rounded-3xl border" key={index}>{item}</p>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>



      </div>
    </div>
  );
}

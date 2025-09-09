"use client";
import { Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  time: string;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const ProductsCard = ({
  id,
  name,
  price,
  time,
  image,
  isPopular,
  isNew,
}: ProductProps) => {
  return (
    <Link href={`/menu/${id}`}>
      <div className="group relative h-full rounded-xl overflow-hidden border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
        {/* Image container */}
        <div className="relative h-64 overflow-hidden bg-muted/30">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isPopular && (
              <Badge
                variant="default"
                className="bg-primary text-primary-foreground"
              >
                Popular
              </Badge>
            )}
            {isNew && (
              <Badge variant="secondary" className="bg-green-500 text-white">
                New
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 min-h-[3.5rem] group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
            <Timer className="h-4 w-4" />
            <span className="text-sm">{time}</span>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-bold">
              €{typeof price === "number" ? price.toFixed(2) : price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;

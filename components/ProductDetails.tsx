import { CheckIcon } from "lucide-react";
import ProductOptions from "./ProductOptions";
import ProductActions from "./ProductActions";
import { ProductInfoTypes } from "@/types/productTypes";

export default function ProductDetails({
  productInfo,
}: {
  productInfo: ProductInfoTypes;
}) {
  const { name, description, price, inStock, colors, sizeArray } = productInfo;
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="font-semibold text-4xl sm:text-4xl">{name}</h1>
        <h3 className="text-lg sm:text-2xl text-[#1F2937] font-medium mt-4">
          €{price}
        </h3>
        <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
          {description}
        </p>
        {inStock && (
          <p className="flex items-center mt-3 text-sm text-muted-foreground">
            <CheckIcon size="20px" className="stroke-green-500" />
            <span className="ml-2">In stock and ready to ship</span>
          </p>
        )}

        <ProductOptions colors={colors} sizeArray={sizeArray} />
      </div>

      <ProductActions />
    </div>
  );
}

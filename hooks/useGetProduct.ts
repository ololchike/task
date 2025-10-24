import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const productSchema = z.object({
  size: z.string().min(1, "Size is required"),
  color: z.string().min(1, "Color is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function useGetProduct() {
  const apiColors = productInfo?.colors;

  const methods = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    defaultValues: {
      size: "",
      color: apiColors[0]?.label ?? "black",
      quantity: 1,
    },
  });

  const { handleSubmit, watch, reset } = methods;
  const selectedColor = watch("color");
  const selectedVariant = useMemo(() => {
    return apiColors.find((c) => c.label === selectedColor) ?? apiColors[0];
  }, [apiColors, selectedColor]);

  const onSubmit = () => {
    toast.success(`Product added to the cart`);
    setTimeout(() => reset(), 2000);
  };

  return {
    data: productInfo,
    handleSubmit,
    methods,
    onSubmit,
    selectedVariant,
  };
}

const productInfo = {
  name: "Black T-shirt",
  price: 120,
  description: ` Discover the ultimate wardrobe staple – our classic black t-shirt.
          Crafted from premium, soft-touch cotton, this tee offers all-day
          comfort and a flattering fit for any body type. Durable, breathable,
          and designed to last, this black t-shirt is more than just a basic –
          it's the foundation of your everyday style.`,
  inStock: true,
  colors: [
    {
      label: "black",
      url: "/black.png",
      name: "Black T-shirt",
    },
    {
      label: "white",
      url: "/white.png",
      name: "white T-shirt",
    },
  ],
  sizeArray: [
    {
      label: "XS",
      isPresent: true,
    },
    {
      label: "S",
      isPresent: true,
    },
    {
      label: "M",
      isPresent: true,
    },
    {
      label: "L",
      isPresent: true,
    },
    {
      label: "XL",
      isPresent: true,
    },
    {
      label: "XXL",
      isPresent: false,
    },
  ],
};

export type UseGetProductReturn = ReturnType<typeof useGetProduct>;

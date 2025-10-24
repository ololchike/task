"use client";

import { FormProvider } from "react-hook-form";
import ProductDetails from "@/components/ProductDetails";
import ProductImage from "@/components/ProductImage";
import RecommendedSection from "@/components/RecommendedSection";
import useGetProduct from "@/hooks/useGetProduct";

export default function Home() {
  const {
    data: productInfo,
    methods,
    handleSubmit,
    selectedVariant,
    onSubmit,
  } = useGetProduct();

  return (
    <main className="flex items-center justify-center min-h-screen w-screen bg-gray-50 px-4">
      <section className="bg-white p-6 sm:p-8 max-w-[1211px] w-full rounded-xl shadow-sm">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row gap-8 items-stretch"
          >
            <div className="flex-1">
              <ProductDetails productInfo={productInfo} />
            </div>

            <div className="flex-1">
              <ProductImage
                src={selectedVariant?.url || "/image.png"}
                alt={
                  selectedVariant?.name || productInfo?.name || "Product image"
                }
              />
            </div>
          </form>
        </FormProvider>

        <div className="mt-12">
          <RecommendedSection />
        </div>
      </section>
    </main>
  );
}

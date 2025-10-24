import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
};

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div
      className="bg-gray-100 w-full h-80 sm:h-96
     lg:h-[634px] flex items-center justify-center rounded-xl overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={452}
        height={585}
        className="object-cover max-w-full max-h-full w-full h-full
         transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

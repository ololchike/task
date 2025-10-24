import Image from "next/image";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    color: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative  hover:rounded-lg   hover:shadow-md transition-all overflow-hidden">
      <Image
        width={278}
        height={360}
        src={product.imageSrc}
        alt={product.imageAlt}
        className="aspect-square rounded-lg w-full object-cover group-hover:opacity-90 transition"
      />
      <div className="p-3">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-sm font-medium text-gray-800 truncate">
            <a href={product.href} className="block">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="text-sm font-semibold text-gray-900">{product.price}</p>
        </div>

        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
      </div>
    </div>
  );
}

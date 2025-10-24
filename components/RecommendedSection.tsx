import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/image.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "€35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/image.png",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "€35",
    color: "Aspen White",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/image.png",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "€35",
    color: "Charcoal",
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc: "/image.png",
    imageAlt: "Front of men's Artwork Tee in peach.",
    price: "€35",
    color: "Iso Dots",
  },
];

export default function RecommendedSection() {
  return (
    <div className="mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold">Recommended for you</h1>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          Tailored to your recent searches and interests, these picks are
          curated just for you.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

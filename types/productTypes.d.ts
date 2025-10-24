export type ProductInfoTypes = {
  name: string;
  price: number;
  description: string;
  inStock: boolean;
  colors: {
    label: string;
    url: string;
    name: string;
  }[];
  sizeArray: {
    label: string;
    isPresent: boolean;
  }[];
};

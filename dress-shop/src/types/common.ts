export type Product = {
  id: number,
  src: string;
  altText?: string;
  name: string;
  price: number;
  description?: string;
};

export type Category = {
  id: string;
  label: string;
  action: () => void;
}

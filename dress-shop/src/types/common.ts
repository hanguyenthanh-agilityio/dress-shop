export type Product = {
  id: number,
  src: string;
  altText?: string;
  name: string;
  price: number;
};

export type Categories = {
  id: string;
  label: string;
  action: () => void;
}

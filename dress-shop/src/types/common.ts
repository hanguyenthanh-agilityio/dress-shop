export type Product = {
  id: number;
  imageURL: string;
  altText?: string;
  name: string;
  price: number;
  description?: string;
};

export type Category = {
  id: string;
  label: string;
  action: () => void;
};


export interface Params {
  page: number;
  limit: number;
}

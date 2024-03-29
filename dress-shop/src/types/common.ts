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
  img?: string;
  alt?: string;
  label: string;
  action: () => void;
  value: string;
};

export interface Params {
  page: number;
  limit: number;
  search?: string;
  category?: string;
  sortby?: string;
  order?: string;
}

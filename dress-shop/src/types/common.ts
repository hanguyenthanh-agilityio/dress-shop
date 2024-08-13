export type Product = {
  id?: number;
  imageURL: string;
  altText?: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
};

export type Category = {
  id: string;
  img?: string;
  alt?: string;
  label: string;
  action: (value: string) => void;
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

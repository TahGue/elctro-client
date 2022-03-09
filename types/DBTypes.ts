export type Category = {
  id: number;
  name: string;
  image: string;
  is_active: boolean;
  created_at: Date;
};

export type Product = {
  id: number;
  name: string;
  image: string;
  is_active: boolean;
  price: number;
  is_new: boolean;
  description: string;
  brandId: number;
  taxTypeId: number;
};

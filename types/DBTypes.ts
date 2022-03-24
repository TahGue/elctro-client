export type Category = {
  id: number;
  name: string;
  image: string;
  is_active: boolean;
  created_at: Date;
  slug: string;
  products: CategoryProduct[];
};

export type Brand = {
  id: number;
  name: string;
  image: string;
  is_active: boolean;
  created_at: Date;
  slug: string;
  products: Product[];
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
  slug: string;
  categories: Category[];
  brand: Brand;
};

export type CategoryProduct = {
  productId: number;
  categoryId: number;
  product: Product;
  category: Category;
  id: number;
};

export type BrandProduct = {
  productId: number;
  categoryId: number;
  product: Product;
  category: Category;
  id: number;
};

export interface CartProduct extends Product {
  count: number;
}

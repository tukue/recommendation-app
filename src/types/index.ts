export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  tags: string[];
}

export interface UserPreference {
  categories: string[];
  priceRange: [number, number];
  tags: string[];
}

export interface AmplifyUser {
  username: string;
  attributes: {
    email: string;
    sub: string;
    [key: string]: any;
  };
}
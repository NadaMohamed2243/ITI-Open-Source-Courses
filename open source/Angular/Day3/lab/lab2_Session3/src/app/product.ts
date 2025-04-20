// export interface Product {
//   id: number;
//   imageUrl: string;
//   price: number;
//   name: string;
//   discount?: number;
//   rating: number;
//   category: string;
// }


export interface Product {
  id: number
  title: string
  price: number
  description: string
  discount?: number;
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

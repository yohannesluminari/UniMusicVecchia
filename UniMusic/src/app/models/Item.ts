// item.model.ts

import { User } from "./User";



export interface Item {
  id: number;
  title: string;
  description: string;
  available: string;
  price: number;
  createdAt: Date; // Assuming it's a Date object
  user: User;
  image: string | null;
  buyer: User | null;
  sold: boolean;
}

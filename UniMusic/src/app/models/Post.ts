import { User } from "./User";

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date; // Assuming it's a Date object
  user: User;
  rating: number | null;
  image: string | null;
}

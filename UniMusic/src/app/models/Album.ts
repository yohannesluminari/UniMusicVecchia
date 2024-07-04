import { Artist } from "./Artist";
import { User } from "./User";

export interface Album {
  id: number;
  title: string;
  cover: string;
  coverBig: string;
  tracklist: string;
  link: string;
  releaseDate: string; // Or Date object, depending on your preference
  listeningTimeInMinutes: number;
  userListeningTimes: Map<User, number>;
  likedByUsers: User[];
  artist: Artist;
}

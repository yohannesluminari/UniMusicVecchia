import { Artist, Album } from "./Artist";
import { Item } from "./Item";
import { Post } from "./Post";
import { Track } from "./Track";


export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  avatar: string | null;
  posts: Post[];
  items: Item[];
  favouriteTracks: Track[];
  likedArtists: Artist[];
  likedAlbums: Album[];
  totalListeningTimeInMinutes: number;
  mostListenedAlbum: Album | null;
  mostListenedArtist: Artist | null;
  followers: User[];
  following: User[];
}

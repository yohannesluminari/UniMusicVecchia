import { Album } from "./Album";
import { Artist } from "./Artist";
import { User } from "./User";

export interface Track {
  id: number;
  title: string;
  link: string;
  duration: number;
  rank: number;
  explicitLyrics: boolean;
  explicitContentLyrics: number;
  explicitContentCover: number;
  preview: string;
  artist: Artist;
  album: Album;
  likedByUsers: User[];
  userInteractions: UserTrackInteraction[];
}

export interface UserTrackInteraction {
  id: number;
  // Define any other properties related to user interactions with tracks
}

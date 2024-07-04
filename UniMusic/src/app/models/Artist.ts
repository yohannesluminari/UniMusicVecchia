import { User } from './User'; // Assicurati di importare correttamente l'interfaccia User, se necessario

export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  pictureBig: string;
  tracklist: string;
  listeningTimeInMinutes: number;
  userListeningTimes: Map<User, number>;
  likedByUsers: User[];
}

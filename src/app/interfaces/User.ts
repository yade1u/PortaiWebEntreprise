import { RoleUser } from './rolesUser';

export interface User {
  nom: string;
  prenom: string;
  adresseMail: string;
  role: RoleUser;
  lienPhoto?: URL;
  motDePasse: string;
}

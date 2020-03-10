import { RoleUser } from './rolesUser';

export interface User {
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  role: RoleUser;
  lien_photo?: URL;
}

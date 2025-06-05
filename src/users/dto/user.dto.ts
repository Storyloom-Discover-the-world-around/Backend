import { Exclude } from 'class-transformer';

export class UserEntity {
  id: string;
  email: string;
  username: string;
  password: string;
  hashedRefreshToken: string | null; // fix: mark as nullable
  subscribed: boolean;
  createdAt: Date;
}

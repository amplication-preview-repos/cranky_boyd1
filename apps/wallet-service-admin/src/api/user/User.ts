import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  updatedAt: Date;
  username: string | null;
  wallets?: Array<Wallet>;
};

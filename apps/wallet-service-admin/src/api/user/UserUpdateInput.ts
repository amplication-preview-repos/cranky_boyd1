import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  username?: string | null;
  wallets?: WalletUpdateManyWithoutUsersInput;
};

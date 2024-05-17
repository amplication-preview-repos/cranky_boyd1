import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  username?: string | null;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};

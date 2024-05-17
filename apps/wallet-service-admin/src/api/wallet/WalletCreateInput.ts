import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  balance?: number | null;
  user?: UserWhereUniqueInput | null;
};

import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  fromWallet?: SortOrder;
  fromWalletId?: SortOrder;
  id?: SortOrder;
  toWallet?: SortOrder;
  toWalletId?: SortOrder;
  transactionAmount?: SortOrder;
  transactionCreatedAt?: SortOrder;
  transactionType?: SortOrder;
  transactionTypeOptions?: SortOrder;
  updatedAt?: SortOrder;
};

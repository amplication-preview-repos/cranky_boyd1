import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  fromWallet?: StringNullableFilter;
  fromWalletId?: StringNullableFilter;
  id?: StringFilter;
  toWallet?: StringNullableFilter;
  toWalletId?: StringNullableFilter;
  transactionAmount?: FloatNullableFilter;
  transactionCreatedAt?: DateTimeNullableFilter;
  transactionType?: "Option1";
  transactionTypeOptions?: "Option1";
};

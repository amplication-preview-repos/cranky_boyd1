import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LiquidityPairsWhereInput = {
  creationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  pairName?: StringNullableFilter;
};

import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TradesWhereInput = {
  buyAmount?: FloatNullableFilter;
  id?: StringFilter;
  pairName?: StringNullableFilter;
  profit?: FloatNullableFilter;
  sellAmount?: FloatNullableFilter;
  status?: StringNullableFilter;
};

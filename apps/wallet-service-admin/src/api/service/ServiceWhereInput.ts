import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ServiceWhereInput = {
  id?: StringFilter;
  serviceDescription?: StringNullableFilter;
  serviceName?: StringNullableFilter;
  servicePrice?: FloatNullableFilter;
};

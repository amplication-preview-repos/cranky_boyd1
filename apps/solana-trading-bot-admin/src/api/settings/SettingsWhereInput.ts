import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsersListRelationFilter } from "../users/UsersListRelationFilter";

export type SettingsWhereInput = {
  buyAmount?: FloatNullableFilter;
  id?: StringFilter;
  targetProfit?: FloatNullableFilter;
  usersItems?: UsersListRelationFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SettingsWhereUniqueInput } from "../settings/SettingsWhereUniqueInput";

export type UsersWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  settings?: SettingsWhereUniqueInput;
  username?: StringNullableFilter;
};

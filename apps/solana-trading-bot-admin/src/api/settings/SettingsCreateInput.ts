import { UsersCreateNestedManyWithoutSettingsItemsInput } from "./UsersCreateNestedManyWithoutSettingsItemsInput";

export type SettingsCreateInput = {
  buyAmount?: number | null;
  targetProfit?: number | null;
  usersItems?: UsersCreateNestedManyWithoutSettingsItemsInput;
};

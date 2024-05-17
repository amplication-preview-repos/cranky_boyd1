import { UsersUpdateManyWithoutSettingsItemsInput } from "./UsersUpdateManyWithoutSettingsItemsInput";

export type SettingsUpdateInput = {
  buyAmount?: number | null;
  targetProfit?: number | null;
  usersItems?: UsersUpdateManyWithoutSettingsItemsInput;
};

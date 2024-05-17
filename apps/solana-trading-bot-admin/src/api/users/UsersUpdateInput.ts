import { SettingsWhereUniqueInput } from "../settings/SettingsWhereUniqueInput";

export type UsersUpdateInput = {
  email?: string | null;
  settings?: SettingsWhereUniqueInput | null;
  username?: string | null;
};

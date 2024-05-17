import { SettingsWhereUniqueInput } from "../settings/SettingsWhereUniqueInput";

export type UsersCreateInput = {
  email?: string | null;
  settings?: SettingsWhereUniqueInput | null;
  username?: string | null;
};

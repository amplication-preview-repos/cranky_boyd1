import { Users as TUsers } from "../api/users/Users";

export const USERS_TITLE_FIELD = "username";

export const UsersTitle = (record: TUsers): string => {
  return record.username?.toString() || String(record.id);
};

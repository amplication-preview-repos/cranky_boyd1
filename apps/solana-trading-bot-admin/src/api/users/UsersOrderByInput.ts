import { SortOrder } from "../../util/SortOrder";

export type UsersOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  settingsId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};

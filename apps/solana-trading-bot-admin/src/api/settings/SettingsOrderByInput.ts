import { SortOrder } from "../../util/SortOrder";

export type SettingsOrderByInput = {
  buyAmount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  targetProfit?: SortOrder;
  updatedAt?: SortOrder;
};

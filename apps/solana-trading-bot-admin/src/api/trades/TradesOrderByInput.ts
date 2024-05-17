import { SortOrder } from "../../util/SortOrder";

export type TradesOrderByInput = {
  buyAmount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pairName?: SortOrder;
  profit?: SortOrder;
  sellAmount?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  serviceDescription?: SortOrder;
  serviceName?: SortOrder;
  servicePrice?: SortOrder;
  updatedAt?: SortOrder;
};

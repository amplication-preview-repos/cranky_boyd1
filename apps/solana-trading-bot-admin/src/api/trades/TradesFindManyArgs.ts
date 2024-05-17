import { TradesWhereInput } from "./TradesWhereInput";
import { TradesOrderByInput } from "./TradesOrderByInput";

export type TradesFindManyArgs = {
  where?: TradesWhereInput;
  orderBy?: Array<TradesOrderByInput>;
  skip?: number;
  take?: number;
};

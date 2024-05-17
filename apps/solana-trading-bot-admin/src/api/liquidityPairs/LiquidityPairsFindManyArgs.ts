import { LiquidityPairsWhereInput } from "./LiquidityPairsWhereInput";
import { LiquidityPairsOrderByInput } from "./LiquidityPairsOrderByInput";

export type LiquidityPairsFindManyArgs = {
  where?: LiquidityPairsWhereInput;
  orderBy?: Array<LiquidityPairsOrderByInput>;
  skip?: number;
  take?: number;
};

import { LiquidityPairs as TLiquidityPairs } from "../api/liquidityPairs/LiquidityPairs";

export const LIQUIDITYPAIRS_TITLE_FIELD = "pairName";

export const LiquidityPairsTitle = (record: TLiquidityPairs): string => {
  return record.pairName?.toString() || String(record.id);
};

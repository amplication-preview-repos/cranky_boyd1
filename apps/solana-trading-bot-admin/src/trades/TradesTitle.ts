import { Trades as TTrades } from "../api/trades/Trades";

export const TRADES_TITLE_FIELD = "pairName";

export const TradesTitle = (record: TTrades): string => {
  return record.pairName?.toString() || String(record.id);
};

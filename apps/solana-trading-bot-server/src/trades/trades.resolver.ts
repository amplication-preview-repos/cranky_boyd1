import * as graphql from "@nestjs/graphql";
import { TradesResolverBase } from "./base/trades.resolver.base";
import { Trades } from "./base/Trades";
import { TradesService } from "./trades.service";

@graphql.Resolver(() => Trades)
export class TradesResolver extends TradesResolverBase {
  constructor(protected readonly service: TradesService) {
    super(service);
  }
}

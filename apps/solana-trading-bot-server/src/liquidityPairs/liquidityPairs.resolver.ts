import * as graphql from "@nestjs/graphql";
import { LiquidityPairsResolverBase } from "./base/liquidityPairs.resolver.base";
import { LiquidityPairs } from "./base/LiquidityPairs";
import { LiquidityPairsService } from "./liquidityPairs.service";

@graphql.Resolver(() => LiquidityPairs)
export class LiquidityPairsResolver extends LiquidityPairsResolverBase {
  constructor(protected readonly service: LiquidityPairsService) {
    super(service);
  }
}

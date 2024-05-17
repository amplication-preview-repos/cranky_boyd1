import { Module } from "@nestjs/common";
import { LiquidityPairsModuleBase } from "./base/liquidityPairs.module.base";
import { LiquidityPairsService } from "./liquidityPairs.service";
import { LiquidityPairsController } from "./liquidityPairs.controller";
import { LiquidityPairsResolver } from "./liquidityPairs.resolver";

@Module({
  imports: [LiquidityPairsModuleBase],
  controllers: [LiquidityPairsController],
  providers: [LiquidityPairsService, LiquidityPairsResolver],
  exports: [LiquidityPairsService],
})
export class LiquidityPairsModule {}

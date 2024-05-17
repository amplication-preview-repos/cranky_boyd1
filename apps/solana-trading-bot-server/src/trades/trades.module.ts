import { Module } from "@nestjs/common";
import { TradesModuleBase } from "./base/trades.module.base";
import { TradesService } from "./trades.service";
import { TradesController } from "./trades.controller";
import { TradesResolver } from "./trades.resolver";

@Module({
  imports: [TradesModuleBase],
  controllers: [TradesController],
  providers: [TradesService, TradesResolver],
  exports: [TradesService],
})
export class TradesModule {}

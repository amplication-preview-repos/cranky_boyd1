import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LiquidityPairsService } from "./liquidityPairs.service";
import { LiquidityPairsControllerBase } from "./base/liquidityPairs.controller.base";

@swagger.ApiTags("liquidityPairs")
@common.Controller("liquidityPairs")
export class LiquidityPairsController extends LiquidityPairsControllerBase {
  constructor(protected readonly service: LiquidityPairsService) {
    super(service);
  }
}

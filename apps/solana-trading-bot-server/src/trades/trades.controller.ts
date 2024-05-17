import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradesService } from "./trades.service";
import { TradesControllerBase } from "./base/trades.controller.base";

@swagger.ApiTags("trades")
@common.Controller("trades")
export class TradesController extends TradesControllerBase {
  constructor(protected readonly service: TradesService) {
    super(service);
  }
}

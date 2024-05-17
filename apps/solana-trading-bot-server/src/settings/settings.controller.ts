import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SettingsService } from "./settings.service";
import { SettingsControllerBase } from "./base/settings.controller.base";

@swagger.ApiTags("settings")
@common.Controller("settings")
export class SettingsController extends SettingsControllerBase {
  constructor(protected readonly service: SettingsService) {
    super(service);
  }
}

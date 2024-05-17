import { Module } from "@nestjs/common";
import { SettingsModuleBase } from "./base/settings.module.base";
import { SettingsService } from "./settings.service";
import { SettingsController } from "./settings.controller";
import { SettingsResolver } from "./settings.resolver";

@Module({
  imports: [SettingsModuleBase],
  controllers: [SettingsController],
  providers: [SettingsService, SettingsResolver],
  exports: [SettingsService],
})
export class SettingsModule {}

import * as graphql from "@nestjs/graphql";
import { SettingsResolverBase } from "./base/settings.resolver.base";
import { Settings } from "./base/Settings";
import { SettingsService } from "./settings.service";

@graphql.Resolver(() => Settings)
export class SettingsResolver extends SettingsResolverBase {
  constructor(protected readonly service: SettingsService) {
    super(service);
  }
}

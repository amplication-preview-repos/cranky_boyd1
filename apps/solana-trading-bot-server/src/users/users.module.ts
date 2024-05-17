import { Module } from "@nestjs/common";
import { UsersModuleBase } from "./base/users.module.base";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersResolver } from "./users.resolver";

@Module({
  imports: [UsersModuleBase],
  controllers: [UsersController],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}

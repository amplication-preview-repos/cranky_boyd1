import * as graphql from "@nestjs/graphql";
import { UsersResolverBase } from "./base/users.resolver.base";
import { Users } from "./base/Users";
import { UsersService } from "./users.service";

@graphql.Resolver(() => Users)
export class UsersResolver extends UsersResolverBase {
  constructor(protected readonly service: UsersService) {
    super(service);
  }
}

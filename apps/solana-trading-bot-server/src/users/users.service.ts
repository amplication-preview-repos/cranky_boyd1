import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersServiceBase } from "./base/users.service.base";

@Injectable()
export class UsersService extends UsersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

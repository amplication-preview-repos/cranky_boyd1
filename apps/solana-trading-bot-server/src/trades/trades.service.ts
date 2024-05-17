import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradesServiceBase } from "./base/trades.service.base";

@Injectable()
export class TradesService extends TradesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

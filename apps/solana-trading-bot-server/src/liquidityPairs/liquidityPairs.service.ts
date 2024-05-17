import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiquidityPairsServiceBase } from "./base/liquidityPairs.service.base";

@Injectable()
export class LiquidityPairsService extends LiquidityPairsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

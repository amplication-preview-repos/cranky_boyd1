/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Transaction } from "./Transaction";
import { TransactionCountArgs } from "./TransactionCountArgs";
import { TransactionFindManyArgs } from "./TransactionFindManyArgs";
import { TransactionFindUniqueArgs } from "./TransactionFindUniqueArgs";
import { CreateTransactionArgs } from "./CreateTransactionArgs";
import { UpdateTransactionArgs } from "./UpdateTransactionArgs";
import { DeleteTransactionArgs } from "./DeleteTransactionArgs";
import { ServicePaymentDto } from "../ServicePaymentDto";
import { TransferDto } from "../TransferDto";
import { TransactionService } from "../transaction.service";
@graphql.Resolver(() => Transaction)
export class TransactionResolverBase {
  constructor(protected readonly service: TransactionService) {}

  async _transactionsMeta(
    @graphql.Args() args: TransactionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Transaction])
  async transactions(
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    return this.service.transactions(args);
  }

  @graphql.Query(() => Transaction, { nullable: true })
  async transaction(
    @graphql.Args() args: TransactionFindUniqueArgs
  ): Promise<Transaction | null> {
    const result = await this.service.transaction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Transaction)
  async createTransaction(
    @graphql.Args() args: CreateTransactionArgs
  ): Promise<Transaction> {
    return await this.service.createTransaction({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Transaction)
  async updateTransaction(
    @graphql.Args() args: UpdateTransactionArgs
  ): Promise<Transaction | null> {
    try {
      return await this.service.updateTransaction({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Transaction)
  async deleteTransaction(
    @graphql.Args() args: DeleteTransactionArgs
  ): Promise<Transaction | null> {
    try {
      return await this.service.deleteTransaction(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ServicePaymentDto)
  async ServicePayment(
    @graphql.Args()
    args: ServicePaymentDto
  ): Promise<ServicePaymentDto> {
    return this.service.ServicePayment(args);
  }

  @graphql.Mutation(() => TransferDto)
  async Transfer(
    @graphql.Args()
    args: TransferDto
  ): Promise<TransferDto> {
    return this.service.Transfer(args);
  }
}

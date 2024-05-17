import { UsersWhereInput } from "./UsersWhereInput";
import { UsersOrderByInput } from "./UsersOrderByInput";

export type UsersFindManyArgs = {
  where?: UsersWhereInput;
  orderBy?: Array<UsersOrderByInput>;
  skip?: number;
  take?: number;
};

import { Users } from "../users/Users";

export type Settings = {
  buyAmount: number | null;
  createdAt: Date;
  id: string;
  targetProfit: number | null;
  updatedAt: Date;
  usersItems?: Array<Users>;
};

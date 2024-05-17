import { Settings } from "../settings/Settings";

export type Users = {
  createdAt: Date;
  email: string | null;
  id: string;
  settings?: Settings | null;
  updatedAt: Date;
  username: string | null;
};

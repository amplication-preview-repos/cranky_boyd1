import { Service as TService } from "../api/service/Service";

export const SERVICE_TITLE_FIELD = "serviceName";

export const ServiceTitle = (record: TService): string => {
  return record.serviceName?.toString() || String(record.id);
};

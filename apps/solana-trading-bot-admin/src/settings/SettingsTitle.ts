import { Settings as TSettings } from "../api/settings/Settings";

export const SETTINGS_TITLE_FIELD = "id";

export const SettingsTitle = (record: TSettings): string => {
  return record.id?.toString() || String(record.id);
};

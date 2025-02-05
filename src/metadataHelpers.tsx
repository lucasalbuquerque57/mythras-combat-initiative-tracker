import OBR, { Metadata } from "@owlbear-rodeo/sdk";
import { getPluginId } from "./getPluginId";

// scene metadata
export const ROUND_COUNT_METADATA_ID = "roundCount";
export const PREVIOUS_STACK_METADATA_ID = "previousStack";

// room metadata
export const SORT_ASCENDING_METADATA_ID = "sortAscending";
export const ADVANCED_CONTROLS_METADATA_ID = "advancedControls";
export const DISPLAY_ROUND_METADATA_ID = "displayRound";
export const DISABLE_NOTIFICATION_METADATA_ID = "disableNotifications";
export const ZIPPER_INITIATIVE_ENABLED_METADATA_ID = "zipperEnabled";
export const SELECT_ACTIVE_ITEM_METADATA_ID = "selectActive";

export function readBooleanFromMetadata(
  metadata: Metadata,
  key: string,
  fallback: boolean = false
): boolean {
  const value = metadata[getPluginId(key)];
  if (typeof value !== "boolean") return fallback;
  return value;
}

export function readNumberFromMetadata(
  metadata: Metadata,
  key: string,
  fallback: number = 0
): number {
  const value = metadata[getPluginId(key)];
  if (typeof value !== "number") return fallback;
  if (Number.isNaN(value)) return fallback;
  return value;
}

export function readStringArrayFromMetadata(
  metadata: Metadata,
  key: string
): string[] {
  const value = metadata[getPluginId(key)];
  if (!Array.isArray(value)) return [];
  for (const entry of value) if (typeof entry !== "string") return [];
  return value;
}

export function updateRoundCount(
  newRoundCount: number,
  setRoundCount: (value: React.SetStateAction<number>) => void
) {
  setRoundCount(newRoundCount);
  OBR.scene.setMetadata({
    [getPluginId(ROUND_COUNT_METADATA_ID)]: newRoundCount,
  });
}

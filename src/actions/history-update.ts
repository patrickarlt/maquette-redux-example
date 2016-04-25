export const HISTORY_UPDATE = 'HISTORY_UPDATE';

export default function historyUpdate (location) {
  return {
    type: HISTORY_UPDATE,
    payload: location
  }
}
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export default function updateLocation (location) {
  return {
    type: UPDATE_LOCATION,
    payload: location
  }
}
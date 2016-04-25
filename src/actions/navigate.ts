export const NAVIGATE = 'NAVIGATE';
import history from '../history';

export default function navigate (location) {
  return {
    type: NAVIGATE,
    payload: history.createLocation(location)
  }
}
import history from '../history';

export const NAVIGATE = 'NAVIGATE';

export default function navigate (location) {
  return {
    type: NAVIGATE,
    payload: history.createLocation(location)
  }
}
export const NAVIGATE = 'NAVIGATE';

export default function navigate (location) {
  return {
    type: NAVIGATE,
    payload: location
  }
}
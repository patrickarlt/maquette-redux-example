import { NAVIGATE } from '../actions/navigate';

export default function location (state = {}, action) {
  if(action.type === NAVIGATE) {
    return Object.assign({}, action.payload);
  }

  return state;
};
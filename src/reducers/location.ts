import { HISTORY_UPDATE } from '../actions/history-update';
import { NAVIGATE } from '../actions/navigate';

export default function location (state = {}, action) {
  if(action.type === HISTORY_UPDATE || action.type === NAVIGATE) {
    return Object.assign({}, action.payload);
  }

  return state;
};
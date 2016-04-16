import {UPDATE_LOCATION} from '../actions/update-location';

export default function location (state = {}, action) {
  if(action.type === UPDATE_LOCATION) {
    return Object.assign({}, action.location);
  }

  return state;
};
import { createAction, createReducer, on } from '@ngrx/store';
import {ClockState} from "./clock.state";
import * as ClockActions from './clock.action';

export const initialState: ClockState = {
  time: new Date().toLocaleTimeString()
};

export const clockReducer = createReducer(initialState,
  on(ClockActions.updateTime, (state, action) => {
    console.log(action.time)
    return {
      ...state,
      time: new Date (action.time).toLocaleTimeString()
    };
  })
);

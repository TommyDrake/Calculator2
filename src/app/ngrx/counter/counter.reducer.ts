import {createReducer, on} from '@ngrx/store';
import {CounterState} from './counter.state';

import * as CountActions from './counter.action';

export const counterReducer = createReducer(<CounterState>{
  count: 0
},

  on(CountActions.increase, (state) => {
    return {
      count: state.count + 1
    };
  }),

  on(CountActions.decrease, (state)=> {
    return {
      count: state.count - 1
    };
  }),

  on(CountActions.reset, (state) => {
    return {
      count: 0
    };
  }),

  on(CountActions.set, (state, {value}) => {
    return {
      count: value
    };
  })
)

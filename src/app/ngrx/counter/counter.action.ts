import {createAction, props} from '@ngrx/store';

export const increase = createAction('[Counter] Increase');

export const decrease = createAction('[Counter] Decrease');

export const reset = createAction('[Counter] Reset');

export const set = createAction('[Counter] Set', props<{ value: number }>());

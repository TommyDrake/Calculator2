import {createAction, props} from "@ngrx/store";

export const add = createAction('[Calculator] add', props<{ value: number }>());
export const subtract = createAction('[Calculator] subtract', props<{ value: number }>());
export const multiply = createAction('[Calculator] multiply', props<{ value: number }>());
export const div = createAction('[Calculator] div', props<{ value: number }>());
export const clear = createAction('[Calculator] clear');
export const setOperation = createAction('[Calculator] Set Operation', props<{ operation: string }>());
export const calculate = createAction('[Calculator] Calculate');


import {createAction, props} from '@ngrx/store';

export const updateTime = createAction('[Clock] Increase', props<{ time: Date }>());

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/counter/counter.reducer';
import { clockReducer } from './ngrx/clock/clock.reducer';
import { calculatorReducer } from './ngrx/calculator/calculator.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      counter: counterReducer,
      clock: clockReducer,
      calculator: calculatorReducer,
    }),
  ],
};

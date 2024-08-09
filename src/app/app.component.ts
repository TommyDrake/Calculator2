import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { CounterState } from './ngrx/counter/counter.state';
import { AsyncPipe, DatePipe } from '@angular/common';
import * as CounterActions from './ngrx/counter/counter.action';
import { FormsModule } from '@angular/forms';
import { ClockState } from './ngrx/clock/clock.state';
import * as ClockActions from './ngrx/clock/clock.action';
import { RocketService } from './rocket.service';
import * as CalculatorActions from './ngrx/calculator/calculator.action';
import { CalculatorState } from './ngrx/calculator/calculator.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, FormsModule, DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-demo';

  result$ = this.store.select(state => state.calculator.result);
  time$ = this.store.select(state => state.clock.time);
  count$ = this.store.select(state => state.counter.count);
  input: number = 0;

  constructor(private store: Store<{ counter: CounterState, clock: ClockState, calculator: CalculatorState }>, private rocketService: RocketService) {
    setInterval(() => {
      this.store.dispatch(
        ClockActions.updateTime({ time: new Date() })
      );
    }, 1000);
  }

  add(value: number) {
    this.store.dispatch(CalculatorActions.add({ value }));
  }

  subtract(value: number) {
    this.store.dispatch(CalculatorActions.subtract({ value }));
  }

  multiply(value: number) {
    this.store.dispatch(CalculatorActions.multiply({ value }));
  }

  div(value: number) {
    this.store.dispatch(CalculatorActions.div({ value }));
  }

  clear() {
    this.store.dispatch(CalculatorActions.clear());
  }

  setOperation(operation: string) {
    this.store.dispatch(CalculatorActions.setOperation({ operation }));
  }

  calculate() {
    this.store.dispatch(CalculatorActions.calculate());
  }

  appendNumber(value: number) {
    this.input = this.input * 10 + value;
  }

  increase() {
    this.store.dispatch(CounterActions.increase());
  }

  decrease() {
    this.store.dispatch(CounterActions.decrease());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  set() {
    this.store.dispatch(CounterActions.set({ value: this.input }));
  }

  async launch() {
    await this.rocketService.planB();
  }
}

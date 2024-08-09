import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './calculator.action';
import { CalculatorState } from './calculator.state';

export const initialState: CalculatorState = {
  result: 0,
  firstOperand: null,
  operator: null,
  waitingForSecondOperand: false
};

export const calculatorReducer = createReducer(
  initialState,
  on(CalculatorActions.add, (state, { value }) => ({
    ...state,
    result: state.waitingForSecondOperand ? value : state.result + value,
    waitingForSecondOperand: false
  })),
  on(CalculatorActions.subtract, (state, { value }) => ({
    ...state,
    result: state.waitingForSecondOperand ? value : state.result - value,
    waitingForSecondOperand: false
  })),
  on(CalculatorActions.multiply, (state, { value }) => ({
    ...state,
    result: state.waitingForSecondOperand ? value : state.result * value,
    waitingForSecondOperand: false
  })),
  on(CalculatorActions.div, (state, { value }) => ({
    ...state,
    result: state.waitingForSecondOperand ? value : state.result / value,
    waitingForSecondOperand: false
  })),
  on(CalculatorActions.clear, (state) => ({
    ...state,
    result: 0,
    firstOperand: null,
    operator: null,
    waitingForSecondOperand: false
  })),
  on(CalculatorActions.setOperation, (state, { operation }) => ({
    ...state,
    firstOperand: state.result,
    operator: operation,
    waitingForSecondOperand: true
  })),
  on(CalculatorActions.calculate, (state) => {
    if (state.operator && state.firstOperand !== null) {
      const result = performCalculation(state.operator, state.firstOperand, state.result);
      return {
        ...state,
        result,
        firstOperand: null,
        operator: null,
        waitingForSecondOperand: false
      };
    }
    return state;
  })
);

function performCalculation(operator: string, firstOperand: number, secondOperand: number): number {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

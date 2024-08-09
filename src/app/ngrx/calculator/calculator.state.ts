export interface CalculatorState {
  result: number;
  firstOperand: number | null;
  operator: string | null;
  waitingForSecondOperand: boolean;
}

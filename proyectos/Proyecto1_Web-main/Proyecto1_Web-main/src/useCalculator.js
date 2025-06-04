import { useState } from 'react'

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [operand, setOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [overwrite, setOverwrite] = useState(false)

  const MAX_LENGTH = 9
  const ERROR = 'ERROR'

  const inputDigit = (digit) => {
    if (display === ERROR) return
    if (overwrite || display === '0') {
      setDisplay(digit)
      setOverwrite(false)
    } else if (display.length < MAX_LENGTH) {
      setDisplay(display + digit)
    }
  }

  const handleOperation = (op) => {
    if (display === ERROR) return

    const current = parseFloat(display)

    if (operator && operand !== null && !overwrite) {
      const result = performCalculation(operand, current, operator)
      if (result === ERROR) {
        setDisplay(ERROR)
        reset()
        return
      }
      setOperand(result)
      setDisplay(result.toString().slice(0, MAX_LENGTH))
    } else {
      setOperand(current)
    }

    setOperator(op)
    setOverwrite(true)
  }

  const calculate = () => {
    if (operator === null || operand === null || display === ERROR) return

    const current = parseFloat(display)
    const result = performCalculation(operand, current, operator)

    if (result === ERROR) {
      setDisplay(ERROR)
    } else {
      setDisplay(result.toString().slice(0, MAX_LENGTH))
    }

    reset()
  }

  const performCalculation = (a, b, op) => {
    let result

    switch (op) {
      case '+': result = a + b; break
      case '-': result = a - b; break
      case '*': result = a * b; break
      case '/': result = b !== 0 ? a / b : ERROR; break
      case '%': result = a % b; break
      default: return ERROR
    }

    if (isNaN(result) || result < 0 || result > 999999999) return ERROR
    return result
  }

  const reset = () => {
    setOperand(null)
    setOperator(null)
    setOverwrite(true)
  }

  return {
    display,
    inputDigit,
    handleOperation,
    calculate
  }
}

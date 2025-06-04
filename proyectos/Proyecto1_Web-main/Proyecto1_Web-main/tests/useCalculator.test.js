import { renderHook, act } from '@testing-library/react'
import { useCalculator } from '../src/useCalculator.js'

test('muestra un solo número: 5', () => {
  const { result } = renderHook(() => useCalculator())
  act(() => result.current.inputDigit('5'))
  expect(result.current.display).toBe('5')
})

test('sobrescribe display si se presiona operación', () => {
  const { result } = renderHook(() => useCalculator())
  act(() => {
    result.current.inputDigit('7')
    result.current.handleOperation('+')
    result.current.inputDigit('2')
  })
  expect(result.current.display).toBe('2')
})

test('sobrescribe si se llama calculate()', () => {
  const { result } = renderHook(() => useCalculator())
  act(() => {
    result.current.inputDigit('4')
    result.current.handleOperation('*')
    result.current.inputDigit('2')
    result.current.calculate()
    result.current.inputDigit('9') // después de igual, debe sobrescribirse
  })
  expect(result.current.display).toBe('9')
})

test('ignora entrada si ya hay 9 dígitos', () => {
  const { result } = renderHook(() => useCalculator())
  act(() => {
    for (let i = 0; i < 12; i++) result.current.inputDigit('9')
  })
  expect(result.current.display.length).toBeLessThanOrEqual(9)
})

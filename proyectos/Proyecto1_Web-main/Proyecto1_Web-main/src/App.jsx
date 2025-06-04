const App = () => {
    const calc = useCalculator()
  
    const handleClick = label => {
      if (!isNaN(label)) return calc.inputDigit(label)
      if (label === '.') return calc.inputDot()
      if (label === 'C') return calc.clear()
      if (label === '+/-') return calc.toggleSign()
      if (['+', '-', '*', '/', '%'].includes(label)) return calc.handleOperation(label)
      if (label === '=') return calc.calculate()
    }
  
    return (
      <div className='calculator'>
        <Display value={calc.display} />
        <Keyboard onClick={handleClick} />
      </div>
    )
  }
  
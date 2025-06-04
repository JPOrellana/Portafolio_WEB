const Keyboard = ({ onClick }) => {
    const keys = [
      { label: '7' }, { label: '8' }, { label: '9' }, { label: '+', class: 'orange' },
      { label: '4' }, { label: '5' }, { label: '6' }, { label: '-', class: 'orange' },
      { label: '1' }, { label: '2' }, { label: '3' }, { label: '*', class: 'orange' },
      { label: '0' }, { label: '.', class: 'gray' }, { label: '=', class: 'orange' }, { label: '/', class: 'orange' },
      { label: 'C', class: 'gray' }, { label: '%', class: 'orange' }, { label: '+/-', class: 'orange' }
    ]
  
    return (
      <div className='keyboard'>
        {keys.map(k => (
          <Button key={k.label} label={k.label} onClick={onClick} className={k.class} />
        ))}
      </div>
    )
  }
  
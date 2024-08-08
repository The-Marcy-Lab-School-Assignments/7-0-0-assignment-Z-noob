import { useState } from 'react'

const CounterDisplay = ({ count }) => {
  return <p>{count}</p>
}

// component names use PascalCase
const CounterButtons = ({ increment, decrement }) => {
  // props are destructured ^          ^
  
  // multiple returned components are wrapped with () and <> </>
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

const MorningDisplay = ({ morning, fontSize }) => {
  return <p style={{fontSize: fontSize }}>{morning}</p>
}

const LanguageButtons = ({ english, chinese, spanish, haitian, portuguese}) => {
  // props are destructured ^          ^
  
  // multiple returned components are wrapped with () and <> </>
  return (
    <>
      <button onClick={english}>English</button>
      <button onClick={chinese}>Chinese</button>
      <button onClick={spanish}>Spanish</button>
      <button onClick={haitian}>Haitian</button>
      <button onClick={portuguese}>Portuguese</button>
    </>
  )
}

// App is exported (default or named is fine)
export const App = () => {
  // state is "lifted up" and passed down with props
  const [count, setCount] = useState(0);
  const [morning, setMorning] = useState("Good Morning")
  const [fontSize, setFontSize] = useState('50px');

  const increaseFontSize = () => {
    setFontSize(fontSize => {
      const newSize = parseInt(fontSize) + 10;
      return `${newSize}px`;
    });
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize => {
      const newSize = (parseInt(fontSize) <= 0? 10: parseInt(fontSize))  - 10;
      return `${newSize}px`;
    });
  };

  // helper functions can be passed down instead of the setter function itself
  const increment = () => { setCount(count + 1), increaseFontSize() }
  const decrement = () => { setCount(count - 1), decreaseFontSize() }
  const english = () => setMorning("Good Morning")
  const chinese = () => setMorning("早上好")
  const spanish = () => setMorning("Buenos día")
  const haitian = () => setMorning("Bonjou")
  const portuguese = () => setMorning("Bom Dia")

  return (
    <>
      {/* <CounterDisplay count={count} /> */}
      <CounterButtons increment={increment} decrement={decrement} />
      <MorningDisplay morning={morning} fontSize={fontSize} />
      <LanguageButtons english={english} chinese={chinese} spanish={spanish} haitian={haitian} portuguese={portuguese} />
    </>
  )
}

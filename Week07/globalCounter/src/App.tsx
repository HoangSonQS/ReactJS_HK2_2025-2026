import './App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counterAtom } from './states/counterAtom'
import { ThemeAtom } from './states/themeAtom'
import ThemeToggle from './components/themeToggle'

function App() {
  const [count, setCount] = useRecoilState(counterAtom)
  const theme = useRecoilValue(ThemeAtom)
  return (
    <>
      <div className={theme}>
        <button onClick={() => {count === 0 ? true : setCount(count - 1)}}>DECREASE</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>INCREASE</button>
        <ThemeToggle/>
      </div>
    </>
  )
}

export default App

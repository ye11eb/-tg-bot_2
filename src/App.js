import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/usetelegram';




function App() {
  const {onToggleButton, tg} = useTelegram

  useEffect(() => {
    tg.ready()
  }, [tg])



  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
      <Header />

    </div>
  );
}

export default App;

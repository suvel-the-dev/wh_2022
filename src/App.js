import './App.css';
import {
  AppLayout,
  LoginLayout
} from './components'
import { useState } from 'react'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="App">
        {isLoggedIn ?
          <AppLayout />
          :
          <LoginLayout handelLogin={() => setIsLoggedIn(true)} />
        }
      </div>
    </>
  );
}

export default App;


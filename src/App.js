import './App.css';
import {
  AppLayout,
  LoginLayout
} from './components'
import { useState } from 'react'
import { ControlProvider } from './context/ControlContext'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="App">
        {isLoggedIn ?
          (
            <ControlProvider>
              <AppLayout />
            </ControlProvider>
          )
          :
          <LoginLayout handelLogin={() => setIsLoggedIn(true)} />
        }
      </div>
    </>
  );
}

export default App;


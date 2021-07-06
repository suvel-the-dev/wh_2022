import './App.css';
import {
  AppLayout,
  LoginLayout
} from './components'
import { useState } from 'react'
import { ControlProvider } from './context/ControlContext'
import { SKUColorMapProvider } from './context/SKUColorMapContext'
import { SpinnerProvider } from './context/SpinnerContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="App">
        {isLoggedIn ?
          <SpinnerProvider>
            <ControlProvider>
              <SKUColorMapProvider>
                <AppLayout />
              </SKUColorMapProvider>
            </ControlProvider>
          </SpinnerProvider>
          :
          <LoginLayout handelLogin={() => setIsLoggedIn(true)} />
        }
      </div>
    </>
  );
}

export default App;


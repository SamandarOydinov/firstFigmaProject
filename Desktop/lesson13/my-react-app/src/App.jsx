import React from 'react';
import Todo from './pages/Todo';
import UseRefExplanation from './pages/UseRefExp';
import AComponent from './components/AComponent';

import Cookies from 'js-cookie';
import Users from './pages/Users';
import UseCallback from './pages/UseCallback';
import { LanguageProvider } from './components/Language';

export const ThemeContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  return (
    <div className='max-w-[1400px] m-auto'>
        <ThemeContext.Provider value={{ theme: 'light' }}>
          <AuthContext.Provider value={{ isLoggedIn: !!Cookies.get('token') }}>
            <LanguageProvider>
              {/* Routing yoki sahifalar */}
              <Todo />
              <UseRefExplanation />
              <AComponent />
              <UseCallback />
              <Users />
            </LanguageProvider>
          </AuthContext.Provider>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
